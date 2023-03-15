import { InferType, object, string } from "yup";

export const blogSchema = object({
  title: string().required(),
  blogbody: string().required(),
});

export type blogInterface = InferType<typeof blogSchema>;
