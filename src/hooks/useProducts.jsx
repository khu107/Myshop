import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getProducts as fetchProducts, AddNewProduct } from "../api/firebase";
export default function useProducts() {
  const queryClient = useQueryClient();

  const getProducts = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation({
    mutationFn: ({ product, url }) => AddNewProduct(product, url),
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });
  return { getProducts, addProduct };
}
