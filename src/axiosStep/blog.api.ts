import axios from "axios";
import { blogInterface } from "../schemas/blog.schema";
import { axiosInstance } from "./axiosInstance";

export const addblog = async (data: blogInterface) => {
  const response = await axiosInstance.post("blog/createblog", data);
  return response.data;
};

export const getBlog = async () => {
  const blogResponse = await axiosInstance.get("blog/blogs");
  return blogResponse.data;
};
