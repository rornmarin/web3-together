import { api } from "@/utils/api";

export const Products = async () => {
  try {
    const response = await api.get("/products");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
