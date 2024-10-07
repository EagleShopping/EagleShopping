import { Iproducts } from "@/interface/Iproducts"


export const selectProductsCount = (rootReducer: any) => {
    return rootReducer.products.products.reduce((acc: number, curr: Iproducts) => acc + curr.quantity, 0)
}

export const selectProductsTotalPrice = (rootReducer: any) => {
    return rootReducer.products.products.reduce((acc: number, curr: Iproducts) => acc + curr.quantity * curr.preco, 0)
}