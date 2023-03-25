import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getPosts } from "~/models/post.server";


export default function PostsRoute() {
  const { posts } = useLoaderData<LoaderData>()
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => {
          return (
            <li key={post.id}>
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
  posts: Awaited<ReturnType<typeof getPosts>>;
}

export const loader: LoaderFunction = async() => {
  const posts = await getPosts()
  return json<LoaderData>({posts})
}