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
        {loading && <Typography>טוען מתכונים...</Typography>}
        {error && <Typography color="error">שגיאה בטעינת מתכונים!</Typography>}
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
                  צפייה במתכון מלא
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
            אנא בחרי מתכון לצפייה במידע מלא
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default RecipesList;



// import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../store/recipesSlice";
// import { AppDispatch, StoreType } from "../store/store";
// import { useEffect } from "react";
// import { Container, Card, CardContent, Typography, Button, Grid, Box, Paper, List, ListItem, ListItemText } from "@mui/material";
// import {  useNavigate } from "react-router-dom";
// import RecipeDetails from "./recipe";

// const RecipesList = () => {
//   const { list: recipesList, loading, error } = useSelector((store: StoreType) => store.recipes);
//   const dispatch: AppDispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);

//   return (<Box width="50%" marginLeft="auto">
    
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         רשימת מתכונים
//       </Typography>
//       {loading ? (
//         <Typography>Loading...</Typography>
//       ) : error ? (
//         <Typography color="error">{error}</Typography>
//       ) : (
//         <Grid container spacing={2}>
//           {recipesList.map((recipe) => (
//             <Grid item xs={12} sm={6} md={4} key={recipe.id}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">{recipe.title}</Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {recipe.description.substring(0, 50)}...
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     style={{ marginTop: "10px" }}
//                     // onClick={() =>}
//                     onClick={() => navigate(`/recipe/${recipe.id}`)}
//                   >
//                     לצפייה במתכון המלא
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Container>
//     </Box>
//          ) ;     

  
// };

// export default RecipesList;
