import { Box } from "@chakra-ui/react";
import ShowCaseHome from "./components/ShowCaseHome";
import CategoryShop from "./(shared)/CategoryShop";

export default function Home() {
  
  return (
   <Box 
   >
    <ShowCaseHome />
    <Box
    mb="20px"
    >
      <CategoryShop />
    </Box>
   </Box>
  );
}
