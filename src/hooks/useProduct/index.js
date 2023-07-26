import { useQuery } from "@tanstack/react-query";
import api from "../../api";

export default function useProduct({ id }) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => await api.get(`products/${id}`).json(),
  });
}
