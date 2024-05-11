import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useSinglePost = (id) => {
  const axiosSecure = useAxiosSecure();
  const { data, isPending, refetch, error, isError } = useQuery({
    queryKey: ["single-post", id],
    queryFn: async () => {
      const response = await axiosSecure.get(`/volunteers/${id}`);

      return response.data;
    },
  });

  return { data, isPending, refetch, error, isError };
};

export default useSinglePost;
