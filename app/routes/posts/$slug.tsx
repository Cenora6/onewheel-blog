import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getPost } from "~/models/post.server";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

export default function PostRoute() {
  const { title, body } = useLoaderData<LoaderData>()

  return (
    <main className="mx-auto max-w-4x1">
      <h1 className="my-6 border-b-2 text-center text-3x1">{title}</h1>
      <p>{body}</p>
    </main>
  );
}

type LoaderData = {
  title: string;
  body: string;
}

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params
  invariant(slug, "slug is required");
  const post = await getPost(slug)

  invariant(post, `post not found: ${slug}`);
  return json<LoaderData>({ title: post.title, body: post.body });
}