
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/recipesSlice";
import { AppDispatch, StoreType } from "../store/store";
import { useEffect } from "react";
import { Container, Card, CardContent, Typography, Button, Grid, Box, Paper, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RecipeDetails from "./recipe";

const RecipesList = () => {
  const { list: recipesList, loading, error } = useSelector((store: StoreType) => store.recipes);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (<Box width="50%" marginLeft="auto">
    
    <Container>
      <Typography variant="h4" gutterBottom>
        רשימת מתכונים
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Grid container spacing={2}>
          {recipesList.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{recipe.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {recipe.description.substring(0, 50)}...
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}
                    // onClick={() =>}
                    onClick={() => navigate(`/recipe/${recipe.id}`)}
                  >
                    לצפייה במתכון המלא
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
    </Box>
         ) ;     

  
};

export default RecipesList;
/*
import React, { useState } from 'react';
// import { Container, Grid, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const { list: recipesList, loading, error } = useSelector((store: StoreType) => store.recipes);
const dispatch: AppDispatch = useDispatch();
const navigate = useNavigate();

const RecipeApp = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (r) => {
    setSelectedRecipe(r);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper>
            <Typography variant="h6" component="div" style={{ padding: '16px' }}>
              רשימת מתכונים
            </Typography>
            <List>
              {recipesList.map((r) => (
                <ListItem button key={r.id} onClick={() => handleRecipeClick(r)}>
                  <ListItemText primary={r.title} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper style={{ padding: '16px' }}>
            {selectedRecipe ? (
              <>
                <Typography variant="h6">{selectedRecipe.title}</Typography>
                <Typography>{selectedRecipe.content}</Typography>
              </>
            ) : (
              <Typography>בחר מתכון כדי לראות את הפרטים</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecipeApp;
*/