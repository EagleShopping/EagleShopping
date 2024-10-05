import { useEffect, useState } from "react";
import { AllProductsMock } from "@/mockdata";
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from "@/services/products";
import { Iproducts } from "@/interface/Iproducts";

export const useShopping = () => {
  const [selectCategory, SetselectCategory] = useState<string>("todos");

  const categoryActual = (
    nameCategory: string,
    selectCategory: string
  ): boolean => {
    const categoryThisEqual =
      nameCategory.toLocaleLowerCase() === selectCategory.toLowerCase();
    return categoryThisEqual;
  };

  const ratingShopping = (rating: number) => {
    const ratingShopp = [...Array(5)].map((_, index) => ({
      rating: index + 1 <= rating ? "yellow.500" : "gray.400",
      svg: "★",
    }));
    return ratingShopp;
  };

  
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products', selectCategory],
    queryFn: () => fetchProducts(selectCategory)
  });


  return {
    categoryActual,
    ratingShopping,
    selectCategory,
    SetselectCategory,
    products,
    isLoading,
    error
  };
};