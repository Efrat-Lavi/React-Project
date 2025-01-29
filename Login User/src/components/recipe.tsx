import { Typography, Box, Divider } from "@mui/material";
import { Recipe } from "../store/recipesSlice";

const RecipeDetails = ( {recipe} : {recipe:Recipe}) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">{recipe.title}</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">תיאור:</Typography>
      <Typography>{recipe.description}</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">מוצרים:</Typography>
      <Typography>{recipe.products}</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">מרכיבים:</Typography>
      <Typography>{recipe.ingredients}</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">הוראות הכנה:</Typography>
      <Typography>{recipe.instructions}</Typography>
    </Box>
  );
};

export default RecipeDetails;
