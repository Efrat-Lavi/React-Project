// import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../../store/recipesSlice";
// import { AppDispatch, StoreType } from "../../store/store";
// import { useEffect, useState } from "react";
// import { Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";
// import RecipeDetails from "./recipe";
// import { Recipe } from "../../store/recipesSlice";
// import '../style/style.css';

// const RecipesList = () => {
//   const { list: recipesList, loading, error } = useSelector((store: StoreType) => store.recipes);
//   const dispatch: AppDispatch = useDispatch();
//   const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);

//   return (
//     <Grid container spacing={2} sx={{ mt: 2, direction: 'rtl' }}>
       
//       <Grid item xs={4} sx={{ maxHeight: '80vh', overflowY: 'auto' }}>
//         {loading && <Typography>טוען מתכונים...</Typography>}
//         {error && <Typography color="error">שגיאה בטעינת מתכונים!</Typography>}
//         <Box>
//           {recipesList.map((recipe) => (
//             <Card key={recipe.title} sx={{ mb: 2 }}>
//               <CardContent>
//                 <Typography variant="h6">{recipe.title}</Typography>
//                 <Typography variant="body2">{recipe.description}</Typography>
//                 <Button 
//                   variant="outlined" 
//                   color="primary" 
//                   sx={{ mt: 1 }}
//                   onClick={() => setSelectedRecipe(recipe)}
//                 >
//                   צפייה במתכון מלא
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>
//       </Grid>

//       <Grid item xs={8} sx={{ maxHeight: '80vh', overflowY: 'auto' }}>
//         {selectedRecipe ? (
//           <RecipeDetails recipe={selectedRecipe} />
//         ) : (
//           <Typography variant="h6" color="text.secondary">
//             אנא בחרי מתכון לצפייה במידע מלא
//           </Typography>
//         )}
//       </Grid>
//     </Grid>
//   );
// };

// export default RecipesList;

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/recipesSlice";
import { AppDispatch, StoreType } from "../../store/store";
import { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";
import RecipeDetails from "./recipe";
import { Recipe } from "../../store/recipesSlice";
import '../style/style.css';

const RecipesList = () => {
  const { list: recipesList, loading, error } = useSelector((store: StoreType) => store.recipes);
  const dispatch: AppDispatch = useDispatch();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Grid container spacing={2} sx={{ mt: 2, direction: 'rtl' }}>

      <Grid item xs={4} sx={{ maxHeight: '80vh', overflowY: 'auto' }}>
        {loading && <Typography>Loading recipes...</Typography>}
        {error && <Typography color="error">Error loading recipes!</Typography>}
        <Box>
          {recipesList.map((recipe) => (
            <Card key={recipe.title} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">{recipe.title}</Typography>
                <Typography variant="body2">{recipe.description}</Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 1 }}
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  View Full Recipe
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Grid>

      <Grid item xs={8} sx={{ maxHeight: '80vh', overflowY: 'auto' }}>
        {selectedRecipe ? (
          <RecipeDetails recipe={selectedRecipe} />
        ) : (
          <Typography variant="h6" color="text.secondary">
            Please select a recipe to view full details
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default RecipesList;
