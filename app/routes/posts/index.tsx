import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getPostListings } from "~/models/post.server";

export default function PostsRoute() {
  const { posts } = useLoaderData<LoaderData>()
  return (
    <main>
      <h1>Posts</h1>
      <Link to="admin" className="text-red-600 underline">
        Admin
      </Link>
      <ul>
        {posts.map(post => {
          return (
            <li key={post.slug}>
              <Link to={`/posts/${post.slug}`} className="text-blue-600 underline">{post.title}</Link>
            </li>
          )
        })
        }
      </ul>
    </main>
  )
}

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPostListings>>;
}

export const loader: LoaderFunction = async() => {
  const posts = await getPostListings()
  return json<LoaderData>({posts})
}