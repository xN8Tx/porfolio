import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsFooter extends Struct.ComponentSchema {
  collectionName: 'components_components_footers';
  info: {
    displayName: 'Footer';
    icon: 'apps';
  };
  attributes: {
    links: Schema.Attribute.Component<'ui.link', true>;
  };
}

export interface ComponentsHeader extends Struct.ComponentSchema {
  collectionName: 'components_components_headers';
  info: {
    description: '';
    displayName: 'Header';
    icon: 'dashboard';
  };
  attributes: {
    links: Schema.Attribute.Component<'ui.link', true>;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    menuLinks: Schema.Attribute.Component<'ui.link', true>;
  };
}

export interface DynamicZoneHero extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'cast';
  };
  attributes: {
    componentId: Schema.Attribute.String;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DynamicZoneSectionProjects extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_projects';
  info: {
    displayName: 'Section - Projects';
    icon: 'book';
  };
  attributes: {
    componentId: Schema.Attribute.String;
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DynamicZoneSectionSkills extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_skills';
  info: {
    displayName: 'Section - Skills';
    icon: 'bulletList';
  };
  attributes: {
    button: Schema.Attribute.Component<'ui.button', false> &
      Schema.Attribute.Required;
    componentId: Schema.Attribute.String;
    skills: Schema.Attribute.Component<'misc.skill-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DynamicZoneSectionText extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_texts';
  info: {
    displayName: 'Section - Text';
    icon: 'filter';
  };
  attributes: {
    button: Schema.Attribute.Component<'ui.button', false> &
      Schema.Attribute.Required;
    componentId: Schema.Attribute.String;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MiscSkillItem extends Struct.ComponentSchema {
  collectionName: 'components_misc_skill_items';
  info: {
    displayName: 'Skill Item';
    icon: 'bulletList';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagePropertiesAttribute extends Struct.ComponentSchema {
  collectionName: 'components_page_properties_attributes';
  info: {
    displayName: 'Attribute';
    icon: 'cog';
  };
  attributes: {
    content: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagePropertiesSeo extends Struct.ComponentSchema {
  collectionName: 'components_page_properties_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'code';
  };
  attributes: {
    attributes: Schema.Attribute.Component<'page-properties.attribute', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    keywords: Schema.Attribute.Text;
    preventIndexing: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Relation<'oneToOne', 'api::icon.icon'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.footer': ComponentsFooter;
      'components.header': ComponentsHeader;
      'dynamic-zone.hero': DynamicZoneHero;
      'dynamic-zone.section-projects': DynamicZoneSectionProjects;
      'dynamic-zone.section-skills': DynamicZoneSectionSkills;
      'dynamic-zone.section-text': DynamicZoneSectionText;
      'misc.skill-item': MiscSkillItem;
      'page-properties.attribute': PagePropertiesAttribute;
      'page-properties.seo': PagePropertiesSeo;
      'ui.button': UiButton;
      'ui.link': UiLink;
    }
  }
}
