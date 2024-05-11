import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useMyAppliedPost = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data, isPending, refetch, isError, error } = useQuery({
    queryKey: ["my-applied-posts"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/my-applied-posts/${user.email}`);

      return response.data;
    },
  });

  return { data, isPending, refetch, isError, error };
};

export default useMyAppliedPost;
