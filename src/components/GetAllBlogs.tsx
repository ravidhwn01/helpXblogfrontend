import { Heading } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getBlog } from "../axiosStep/blog.api";
import { blogInterface } from "../schemas/blog.schema";

function GetAllBlogs() {
  const { data } = useQuery("getblog", () => getBlog());
  // console.log(data);
  return (
    <>
      <Heading>
        {data?.map((blogs: blogInterface, index: number) => {
          return (
            <div key={index}>
              <h2> {blogs.title} </h2>
              <p> {blogs.blogbody} </p>
            </div>
          );
        })}
      </Heading>
    </>
  );
}

export default GetAllBlogs;
