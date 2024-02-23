import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_POST } from "@/graphql/queries/post";
import AddPosts from './AddPosts';
import DeletePosts from './DeletePosts';
import UpdatePosts from './UpdatePosts';

const GetPosts = () => {
const { loading, error, data } = useQuery(GET_POST);
console.log("post data", data);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;
const postdata: any[] = [];
postdata.push(data?.post);
console.log("postdataaaa", postdata);
  return (
    <div>
      <h1>Get Post Data</h1>
      <ul>
        {postdata.map((p: any) => (
          <li key={p.id}>
            {" "}
            {p.id} {p.title} {p.body}
          </li>
        ))}
      </ul>
      <AddPosts />
      <DeletePosts />
      <UpdatePosts />
    </div>
  )
}

export default GetPosts