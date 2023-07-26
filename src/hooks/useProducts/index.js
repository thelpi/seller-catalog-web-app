import { useQuery } from "@tanstack/react-query";
import api from "../../api";

export default function useProducts({ search }) {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => await api.get(`products?q=${search}`).json(),
    refetchOnWindowFocus: false,
  });
}
