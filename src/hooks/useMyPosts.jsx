import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const useMyPosts = () => {
  const { user } = useAuth();
  const { data, isPending, refetch, isError, error } = useQuery({
    queryKey: ["my-posts"],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3000/my-volunteer-posts/${user.email}`,
      );

      return response.data;
    },
  });

  return { data, isPending, refetch, isError, error };
};

export default useMyPosts;
