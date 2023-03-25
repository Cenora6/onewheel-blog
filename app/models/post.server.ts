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

export async function getPosts() {
  return posts
}