import { json, LoaderFunction } from "@remix-run/node";
import { getPost } from "~/models/post.server";
import { useLoaderData } from "@remix-run/react";

export default function PostRoute() {
  const { title, body } = useLoaderData()

  return (
    <main className="mx-auto max-w-4x1">
      <h1 className="my-6 border-b-2 text-center text-3x1">{title}</h1>
      <p>{body}</p>
    </main>
  );
}

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params
  const post = await getPost(slug)
  return json({ title: post.title, body: post.body });
}