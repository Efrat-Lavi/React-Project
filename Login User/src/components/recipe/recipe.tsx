import { Typography, Box, Divider, ListItem, ListItemText, Paper, Chip, Avatar, List, Button } from '@mui/material';
import { RestaurantMenu, Kitchen } from '@mui/icons-material';

import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import { Recipe } from "../../store/recipesDef";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import Download from './doenload';
import { getDifficultyIcon } from './addRecipeDef';
const RecipeDetails = ({ recipe }: { recipe: Recipe }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <Paper sx={{direction:"ltr", p: 3, m: 2, boxShadow: 5, backgroundColor: '#f9f9f9', borderRadius: '16px', maxWidth: '50%', margin: '0 auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Download recipe={recipe} />
        <Typography variant="h4" sx={{ backgroundColor: '#FFB74D', padding: '8px 16px', borderRadius: '8px', fontFamily: 'serif', fontWeight: 'bold', textAlign: 'center', width: '100%' }} gutterBottom>
          {recipe.title}
        </Typography>
        <Button onClick={toggleLike} sx={{ minWidth: 'auto', mr: 2 }}>
          {liked ? (
            <FavoriteIcon sx={{ color: '#1976d2' }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: '#1976d2' }} />
          )}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {getDifficultyIcon(recipe.difficulty)}
        <Chip label={recipe.difficulty} color="primary" variant="outlined" sx={{ fontWeight: 'bold', ml: 2 }} />
      </Box>
      <Divider sx={{ my: 2 }} />
      <List>
        <ListItem disableGutters>
          <Box sx={{ display: 'flex'}}>
            <Avatar sx={{ bgcolor: '#FFB74D', mr: 1 }}><RestaurantMenu /></Avatar>
            <ListItemText primary={<Typography variant="body1">{recipe.description}</Typography>} />
          </Box>
        </ListItem>
        <Divider sx={{ my: 1 }} />
        <ListItem disableGutters>
          <Box sx={{ display: 'flex'}}>
            <Avatar sx={{ bgcolor: '#FFB74D', mr: 1 }}>
              <Kitchen />
            </Avatar>
            <ListItemText primary={
              <>
                <Typography variant="h6" sx={{ color: '#1976d2' }}>Products</Typography>
                <Typography variant="body1">{recipe.products}</Typography></>} />
          </Box>
        </ListItem>
        <Divider sx={{ my: 1 }} />
        <ListItem disableGutters>
          <Box sx={{ display: 'flex' }}>
            <Avatar sx={{ bgcolor: '#FFB74D', mr: 1 }}>
              <DehazeRoundedIcon />
            </Avatar>
            <ListItemText primary={
              <>
                <Typography variant="h6" sx={{ color: '#1976d2' }}> Ingredients</Typography>
                <List sx={{ direction: 'ltr', textAlign: 'left' }}>
                  {recipe.ingredients.map((ingredient, index) => (
                    <ListItem key={index} disableGutters>
                      <ListItemText primary={`• ${ingredient}`} />
                    </ListItem>
                  ))}</List> </> } /></Box>
        </ListItem>
        <Divider sx={{ my: 1 }} />
        <ListItem disableGutters>
          <Box sx={{ display: 'flex' }}>
            <Avatar sx={{ bgcolor: '#FFB74D', mr: 1 }}>
              <BorderColorRoundedIcon />
            </Avatar>
            <ListItemText primary={
              <>
                <Typography variant="h6" sx={{ color: '#1976d2' }}>
                  Instructions
                </Typography>
                <List sx={{ direction: 'ltr', textAlign: 'left' }}>
                  {recipe.instructions.map((instruction, index) => (
                    <ListItem key={index} disableGutters>
                      <ListItemText primary={`• ${instruction}`} />
                    </ListItem>
                  ))}
                </List>
              </>
            } />
          </Box>
        </ListItem>
      </List>
    </Paper>
  );
};
export default RecipeDetails;
