import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useSixPost = () => {
  const axiosSecure = useAxiosSecure();
  const { data, isPending, refetch, isError, error } = useQuery({
    queryKey: ["six-post"],
    queryFn: async () => {
      const response = await axiosSecure.get("/volunteers-upcoming");

      return response.data;
    },
  });

  return { data, isPending, refetch, isError, error };
};

export default useSixPost;
