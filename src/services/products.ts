import { AllProductsMock } from "@/mockdata";

export  const fetchProducts = (category: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = AllProductsMock.filter((product) => {
          if (category === "todos") {
            return true;
          } else {
            return product.category === category;
          }
        });
        resolve(filteredProducts);
      }, 500); 
    });
  };
