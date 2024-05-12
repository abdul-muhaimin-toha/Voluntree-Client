import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useAllPosts = (currentPage, postPerPage, search) => {
  const axiosSecure = useAxiosSecure();
  const { data, isPending, refetch, isError, error } = useQuery({
    queryKey: ["all-post", currentPage, postPerPage, search],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/volunteers?page=${currentPage}&limit=${postPerPage}&searchQuery=${search}`,
      );

      return response.data;
    },
  });

  return { data, isPending, refetch, isError, error };
};

export default useAllPosts;
