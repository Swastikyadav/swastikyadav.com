import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import Link from "next/link";

import "@/styles/mdx.css";

async function getPostFromParams(params) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export default async function PostPage({ params }) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container max-w-3xl py-6 mx-auto prose dark:prose-invert">
      <Link href="/" className="no-underline">
        <small>&#8592; Back To Home!</small>
      </Link>
      <h1 className="my-2">{post.title}</h1>
      {post.description ? (
        <p className="mt-0 text-xl text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  );
}
