import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getPosts } from "~/models/post.server";

interface Post {
  id: number;
  slug: string;
  title: string;
  body: string;
}

export default function PostsRoute() {
  const { posts } = useLoaderData<{  posts: Post[] }>()
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

export const loader = async() => {
  const posts = await getPosts()
  return json({posts})
}