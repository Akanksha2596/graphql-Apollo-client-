import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_POST } from "@/graphql/mutation/post";

const UpdatePosts = () => {
  const [postId, setPostId] = useState("");
  const [body, setBody] = useState("");
  const [updatePostMutation] = useMutation(UPDATE_POST);

  const handleUpdatePost = async () => {
    try {
      const { data } = await updatePostMutation({
        variables: {
          id: postId,
          input: { body },
        },
      });
      console.log(`Post updated successfully:`, data?.updatePost);
    } catch (error: any) {
      console.error("Error updating post:", error.message);
    }
  };

  return (
    <div>
      <h2> Update Post</h2>
      <label htmlFor="postId">Post ID:</label>
      <input
        type="text"
        id="postId"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />

      <label htmlFor="body">Post Body:</label>
      <input
        type="text"
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleUpdatePost}>Update Post</button>
    </div>
  );
};

export default UpdatePosts;
