export const useShopping = () => {

     const categoryActual = (nameCategory: string,selectCategory: string): boolean => {
        const categoryThisEqual =  nameCategory.toLocaleLowerCase() === selectCategory.toLowerCase()
        return categoryThisEqual
    }

    const ratingShopping = (rating: number) => {
        const ratingShopp = [...Array(5)].map((_, index) => (
           {        
            rating: index + 1 <= rating ? 'yellow.500' : 'gray.400',
            svg: '★'
           }
        ))
        return ratingShopp
    }
    
    return   {
        categoryActual,
        ratingShopping
    }
}
