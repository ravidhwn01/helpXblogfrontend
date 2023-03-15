import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { blogInterface, blogSchema } from "../schemas/blog.schema";
import { isError, useMutation, useQueryClient } from "react-query";
import { addblog } from "../axiosStep/blog.api";
import { useNavigate } from "react-router-dom";

function AddBlog() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<blogInterface>({
    mode: "onChange",
    resolver: yupResolver(blogSchema),
  });
  const onSubmitHandle = (data: blogInterface) => {
    console.log("data", data);
    mutation.mutate(data);
  };
  const mutation = useMutation(addblog, {
    onSuccess: () => {
      queryClient.refetchQueries("getblog");
      navigate("/blogs");
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmitHandle)}>
      <FormControl isInvalid={!!errors["title"]?.message}>
        <FormLabel>Title</FormLabel>
        <Input
          marginTop={2}
          placeholder="Enter Blog Title..."
          {...register("title")}
        />
        {!!errors["title"]?.message && (
          <FormErrorMessage>{errors["title"]?.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={!!errors["blogbody"]?.message}>
        <Textarea
          marginTop={2}
          placeholder="Here is a sample placeholder"
          size="sm"
          {...register("blogbody")}
        />

        {!!errors["blogbody"]?.message && (
          <FormErrorMessage>{errors["blogbody"]?.message}</FormErrorMessage>
        )}
      </FormControl>
      <Button type="submit" marginTop={2}>
        {" "}
        Post blog{" "}
      </Button>
    </form>
  );
}

export default AddBlog;
