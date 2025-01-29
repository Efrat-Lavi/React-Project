import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreType } from "../store/store";
import { Container, Card, CardContent, Typography, Box } from "@mui/material";

const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { list: recipesList, loading, error } = useSelector((store: StoreType) => store.recipes);


const recipe =recipesList.find(r=>r.id == id)
console.log(id);
console.log(recipe);

  if (!recipe) {
    return <Typography color="error">המתכון לא נמצא</Typography>;
  }

  return (
    <Box width="50%" marginRight="auto">
    <Container style={{ marginTop: "20px" }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {recipe.title}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {recipe.description}
          </Typography>
          <Typography variant="body1" style={{ marginTop: "10px" }}>
            <strong>מוצרים:</strong> {recipe.products}
          </Typography>
          <Typography variant="body1" style={{ marginTop: "10px" }}>
            <strong>מרכיבים:</strong> {recipe.ingredients}
          </Typography>
          <Typography variant="body1" style={{ marginTop: "10px" }}>
            <strong>הוראות הכנה:</strong> {recipe.instructions}
          </Typography>
        </CardContent>
      </Card>
    </Container></Box>
  );
};

export default RecipeDetails;
// import { Container, Card, CardContent, Typography, Box } from "@mui/material";
// import { useState } from "react";
// import RecipesList from "./recipesList";

// const RecipeViewer = () => {
//   const [selectedRecipe, setSelectedRecipe] = useState(null);

//   return (
//     <Container>
//       <Box display="flex" gap={2}>
//         {/* קומפוננטת רשימת מתכונים */}
//         <Box width="50%">
//           <RecipesList onSelectRecipe={setSelectedRecipe} />
//         </Box>
//         {/* קומפוננטת תצוגת מתכון */}
//         <Box width="50%">
//           {selectedRecipe ? (
//             <Card>
//               <CardContent>
//                 <Typography variant="h4" gutterBottom>
//                   {selectedRecipe.}
//                 </Typography>
//                 <Typography variant="h6" color="textSecondary">
//                   {selectedRecipe.description}
//                 </Typography>
//                 <Typography variant="body1" style={{ marginTop: "10px" }}>
//                   <strong>מוצרים:</strong> {selectedRecipe.products}
//                 </Typography>
//                 <Typography variant="body1" style={{ marginTop: "10px" }}>
//                   <strong>מרכיבים:</strong> {selectedRecipe.ingredients}
//                 </Typography>
//                 <Typography variant="body1" style={{ marginTop: "10px" }}>
//                   <strong>הוראות הכנה:</strong> {selectedRecipe.instructions}
//                 </Typography>
//               </CardContent>
//             </Card>
//           ) : (
//             <Typography variant="body1">בחרי מתכון כדי לצפות בפרטים</Typography>
//           )}
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default RecipeViewer;
