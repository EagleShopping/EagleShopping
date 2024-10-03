import { Box } from "@chakra-ui/react";
import ShowCaseHome from "./components/ShowCaseHome";
import ShoppingSection from "./(shared)/ShoppingSection";

export default function Home() {
  
  return (
   <Box 
   >
    <ShowCaseHome />
    <ShoppingSection />
   </Box>
  );
}
