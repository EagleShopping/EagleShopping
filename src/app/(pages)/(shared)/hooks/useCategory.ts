
export const useCategory = () => {

     const categoryActual = (nameCategory: string,selectCategory: string): boolean => {
        const categoryThisEqual =  nameCategory.toLocaleLowerCase() === selectCategory.toLowerCase()
        return categoryThisEqual
    }
    
    return   {
        categoryActual
    }
}