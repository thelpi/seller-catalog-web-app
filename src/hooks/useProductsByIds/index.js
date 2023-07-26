import { useQuery } from "@tanstack/react-query";
import api from "../../api";

export default function useProductsByIds({ ids }) {
  const uniqueIds = new Set(ids);

  const searchParams = new URLSearchParams();
  uniqueIds.forEach((id) => searchParams.append("id", id));

  return useQuery({
    queryKey: ["products", { ids: uniqueIds }],
    queryFn: async () =>
      uniqueIds.length == 0
        ? []
        : await api.get("products", { searchParams }).json(),
  });
}
