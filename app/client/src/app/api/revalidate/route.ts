import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const accessToken = request.headers.get("Authorization")?.slice(6);

  if (!accessToken) {
    return new Response("No access token", { status: 401 });
  }

  if (accessToken !== process.env.STRAPI_WEBHOOK_TOKEN) {
    return new Response("Invalid access token", { status: 401 });
  }

  const req = await request.json();
  const { entry } = req;

  if (!entry) {
    return new Response("No entry", { status: 401 });
  }

  if (!entry?.locale) {
    return new Response("No locale", { status: 401 });
  }

  revalidatePath("/" + entry.locale);

  return new Response("Success", { status: 200 });
}
