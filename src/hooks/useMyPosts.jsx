import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useMyPosts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data, isPending, refetch, isError, error } = useQuery({
    queryKey: ["my-posts"],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/my-volunteer-posts/${user.email}`,
      );

      return response.data;
    },
  });

  return { data, isPending, refetch, isError, error };
};

export default useMyPosts;
