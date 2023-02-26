import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<PostType>({
    userId: 1,
    id: 1,
    title: "",
    body: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const data = await res.json();
      setPost(data);
    };
    fetchPost();
  }, [postId]);
  return (
    <>
      <h2>Single Post</h2>
      <div>
        <p>ID:{post.id}</p>
        <p>タイトル:{post.title}</p>
        <p>内容:{post.body}</p>
      </div>
    </>
  );
};

export default Post;
