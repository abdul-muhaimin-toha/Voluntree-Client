import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useApplicationToMe = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data, isPending, refetch, isError, error } = useQuery({
    queryKey: ["application-to-my-post"],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/application-for-my-posts/${user.email}`,
      );

      return response.data;
    },
  });

  return { data, isPending, refetch, isError, error };
};

export default useApplicationToMe;
