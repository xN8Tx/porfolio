/**
 * `deepPopulate` middleware
 */

import type { Core } from "@strapi/strapi";
import { UID } from "@strapi/types";
import { contentTypes } from "@strapi/utils";
import pluralize from "pluralize";

interface Options {
  /**
   * Fields to select when populating relations
   */
  relationalFields?: string[];
}

const extractPathSegment = (url: string) =>
  url.match(/\/([^/?]+)(?:\?|$)/)?.[1] || "";

const getDeepPopulate = (uid: UID.Schema, opts: Options = {}) => {
  // @ts-ignores
  const model = strapi.getModel(uid);
  const attributes = Object.entries(model.attributes);

  return attributes.reduce((acc: any, [attributeName, attribute]) => {
    switch (attribute.type) {
      case "relation": {
        const isMorphRelation = attribute.relation
          .toLowerCase()
          .startsWith("morph");
        if (isMorphRelation) {
          break;
        }
        // Ignore not visible fields other than createdBy and updatedBy
        // @ts-ignores
        const isVisible = contentTypes.isVisibleAttribute(model, attributeName);
        if (isVisible) {
          acc[attributeName] = { populate: "*" };
        }
        break;
      }
      case "media": {
        acc[attributeName] = { populate: "*" };
        break;
      }
      case "component": {
        let populate;
        if (attribute.component === "ui.link") {
          populate = {
            page: {
              fields: ["slug", "title"],
            },
            icon: { populate: "*" }, // Полная популяция icon
          };
        } else {
          populate = getDeepPopulate(attribute.component, opts);
        }

        acc[attributeName] = { populate };
        break;
      }
      default:
        break;
    }

    return acc;
  }, {});
};

const getDeepPopulateForDynamicZone = (uid: UID.Schema, opts: Options = {}) => {
  // @ts-ignores
  const model = strapi.getModel(uid);
  const attributes = Object.entries(model.attributes);

  return attributes.reduce((acc: any, [attributeName, attribute]) => {
    if (attribute.type === "dynamiczone") {
      // Популяция компонентов внутри динамической зоны
      const populatedComponents = (attribute.components || []).reduce(
        (componentAcc: any, componentUID: UID.Component) => {
          componentAcc[componentUID] = {
            populate: getDeepPopulate(componentUID, opts),
          };

          return componentAcc;
        },
        {},
      );

      acc[attributeName] = { on: populatedComponents };
    }

    return acc;
  }, {});
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx, next) => {
    if (
      ctx.request.url.startsWith("/api/") &&
      ctx.request.method === "GET" &&
      ctx.query.populate &&
      ctx.query.populate.includes("dynamicZone")
    ) {
      const contentType = extractPathSegment(ctx.request.url);
      const singular = pluralize.singular(contentType);
      const uid = `api::${singular}.${singular}`;

      // @ts-ignores
      ctx.query.populate = getDeepPopulateForDynamicZone(uid);
    }
    await next();
  };
};
