import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useTestimonials = () => {
  const axiosSecure = useAxiosSecure();
  const { data, isPending, refetch, isError, error } = useQuery({
    queryKey: ["all-testimonials"],
    queryFn: async () => {
      const response = await axiosSecure.get("/testimonials");

      return response.data;
    },
  });

  return { data, isPending, refetch, isError, error };
};

export default useTestimonials;
