import { CREATE_POST } from "@/graphql/mutation/post";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";

const AddPosts = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createPost, { data }] = useMutation(CREATE_POST);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await createPost({
        variables: {
          input: {
            title,
            body,
          },
        },
      });
      console.log(response?.data, "post added successfully");
    } catch (error) {
      console.log(error , "error while data addition");
    }
  };

  return (
    <div>
      <h2> Add Post </h2>
      <form action="">
        <input
          type="text"
          placeholder="Enter Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Description"
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>    
    <table>
      <tbody>
        <tr>
            <th>Title</th>
            <th>Body</th>
        </tr>
        <tr>
            <td>{data?.createPost.title}</td>
            <td>{data?.createPost.body}</td>
        </tr>
        </tbody>
    </table>
    </div>
  );
};

export default AddPosts;