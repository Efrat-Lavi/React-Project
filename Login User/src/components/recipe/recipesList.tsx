
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/recipesSlice";
import { AppDispatch, StoreType } from "../../store/store";
import { useContext, useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, CardActionArea, Box, Button } from "@mui/material";
import RecipeDetails from "./recipe";
import EditIcon from '@mui/icons-material/Edit';
import "../style/style.css";
import DwonLoad from './doenload';
import { userContext } from '../start'
import { useNavigate } from "react-router-dom";
import { Recipe } from "../../store/recipesDef";

const RecipesList = () => {
  const { list: recipesList, loading, error } = useSelector((store: StoreType) => store.recipes);
  const dispatch: AppDispatch = useDispatch();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const context = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Grid container spacing={2} sx={{ mt: 2, direction: 'rtl' }}>
      <Grid item xs={4} sx={{ maxHeight: '80vh', overflowY: 'auto' }}>
        {loading && <Typography>Loading recipes...</Typography>}
        {error && <Typography color="error">Error loading recipes!</Typography>}
        <Box>
          {recipesList.map((recipe:Recipe) => (
            <Card key={recipe.title} sx={{ mb: 2 }}>
              <CardActionArea onClick={() => setSelectedRecipe(recipe)} sx={{ p: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <CardContent>
                    <Typography variant="h6">{recipe.title}</Typography>
                    <Typography variant="body2">{recipe.description}</Typography>
                  </CardContent>
                  <Box>
                    <DwonLoad recipe={recipe} />
                    {context.user.id == recipe.authorId &&
                      <Button size="small" color="secondary" sx={{ color: "#1976d2", minWidth: 0 }}
                        onClick={() => { navigate(`/update/${recipe.id}`); }}>
                        <EditIcon />
                      </Button>}

                  </Box>
                </Box>
              </CardActionArea>
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
