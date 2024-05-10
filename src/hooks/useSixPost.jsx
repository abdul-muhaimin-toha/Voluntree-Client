import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSixPost = () => {
  const { data, isPending, refetch, isError, error } = useQuery({
    queryKey: ["six-post"],
    queryFn: async () => {
      const response = await axios.get(
        "http://localhost:3000/volunteers-upcoming",
      );

      return response.data;
    },
  });

  return { data, isPending, refetch, isError, error };
};

export default useSixPost;
