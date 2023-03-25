import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

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

const posts = [
  {
    id: 1,
    slug: "my-first-post",
    title: "My first post",
    body: "This is my first post",
  },
  {
    id: 2,
    slug: "my-second-post",
    title: "My second post",
    body: "This is my second post",
  },
  {
    id: 3,
    slug: "my-third-post",
    title: "My third post",
    body: "This is my third post",
  }
]

export const loader = async() => {
  return json({posts})
}