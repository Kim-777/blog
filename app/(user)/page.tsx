import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import PreviewSuspense from "@/components/PreviewSuspense";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export const revalidate = 0;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<div>loading</div>}>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  // console.log(posts);
  return <BlogList posts={posts} />;
}
