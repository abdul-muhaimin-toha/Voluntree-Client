import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSinglePost = (id) => {
  const { data, isPending, refetch, error, isError } = useQuery({
    queryKey: ["single-post", id],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3000/volunteers/${id}`,
      );

      return response.data;
    },
  });

  return { data, isPending, refetch, error, isError };
};

export default useSinglePost;
