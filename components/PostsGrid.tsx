import { Post } from "@/service/posts";
import React from "react";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

export default function PostsGrid({ posts }: Props) {
  console.log("posts ::: ", posts);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
