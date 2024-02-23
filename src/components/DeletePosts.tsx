import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_POST } from "@/graphql/mutation/post";

const DeletePosts = () => {
  const [postId, setPostId] = useState("");
  const [deletePost] = useMutation(DELETE_POST);

  const handleDeletePost = async (e: any) => {
    try {
      const { data } = await deletePost({
        variables: { id: postId },
      });
      console.log(`Post deleted successfully:`, data?.deletePost);
      console.log("data after deletion", data);
    } catch (error: any) {
      console.error("Error deleting post:", error.message);
    }
  };

  return (
    <div>
      <h2>Delete Posts</h2>
      <label htmlFor="postId">Post ID:</label>
      <input
        type="text"
        placeholder="Enter Post ID"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={handleDeletePost}>Delete Post</button>
    </div>
  );
};

export default DeletePosts;
