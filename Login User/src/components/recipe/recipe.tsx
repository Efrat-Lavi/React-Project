import { Typography, Box, Divider, ListItem, ListItemText, Paper, Chip, Avatar, List, Button } from '@mui/material';
import { RestaurantMenu, Kitchen } from '@mui/icons-material';
import SignalCellularAlt1BarIcon from '@mui/icons-material/SignalCellularAlt1Bar';
import SignalCellularAlt2BarIcon from '@mui/icons-material/SignalCellularAlt2Bar';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import { Recipe } from '../../store/recipesSlice';
import DwonLoad from './doenload';
import { useContext } from 'react';
import { userContext } from '../../App';
import { useNavigate } from 'react-router-dom';
const RecipeDetails = ({ recipe }: { recipe: Recipe }) => {
  const context = useContext(userContext);
  const navigate = useNavigate();
  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return <Avatar sx={{ color: 'green', mr: 2 }}><SignalCellularAlt1BarIcon /></Avatar>;
      case 'Medium':
        return <Avatar sx={{ color: 'orange', mr: 2 }}><SignalCellularAlt2BarIcon /></Avatar>;
      case 'Hard':
        return <Avatar sx={{ color: 'red', mr: 2 }}><SignalCellularAltIcon /></Avatar>;
      default:
        return null;
    }
  };
  return (
    <Paper sx={{ p: 3, m: 2, boxShadow: 5, backgroundColor: '#f9f9f9', borderRadius: '16px', maxWidth: '50%', margin: '0 auto', }}>
      <Box sx={{ display: 'flex', float: 'left' }}> <DwonLoad recipe={recipe} /></Box>
      {context.user.id == recipe.authorId &&
        <Button variant="outlined" color="primary" sx={{ mt: 1 }}
          onClick={() => {navigate(`/update/${recipe.id}`);}}>
          Edit
        </Button>}
      <Typography variant="h4" sx={{ color: '#3f51b5' }} gutterBottom>
        {recipe.title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {getDifficultyIcon(recipe.difficulty)}
        <Chip label={recipe.difficulty} color="primary" variant="outlined" sx={{ fontWeight: 'bold', ml: 2 }} />
      </Box>
      <Divider sx={{ my: 2 }} />
      <List>
        <ListItem disableGutters>
          <Avatar sx={{ bgcolor: '#ff7043', mr: 2 }}>
            <RestaurantMenu />
          </Avatar>
          <ListItemText primary={<Typography variant="body1">{recipe.description}</Typography>} />
        </ListItem>
        <Divider sx={{ my: 1 }} />
        <ListItem disableGutters>
          <Avatar sx={{ bgcolor: '#29b6f6', mr: 2 }}>
            <Kitchen />
          </Avatar>
          <ListItemText primary={
            <>
              <Typography variant="h6" sx={{ color: '#29b6f6' }}>
                Products
              </Typography>
              <Typography variant="body1">{recipe.products}</Typography>
            </>
          } />
        </ListItem>
        <Divider sx={{ my: 1 }} />
        <ListItem disableGutters>
          <Avatar sx={{ bgcolor: '#8e24aa', mr: 2 }}>
            <DehazeRoundedIcon />
          </Avatar>
          <ListItemText primary={
            <>
              <Typography variant="h6" sx={{ color: '#8e24aa' }}>
                Ingredients
              </Typography>
              <List sx={{ direction: 'ltr', textAlign: 'left' }}>
                {recipe.ingredients.map((ingredient, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemText primary={`• ${ingredient}`} />
                  </ListItem>
                ))}
              </List>
            </>
          } />
        </ListItem>
        <Divider sx={{ my: 1 }} />
        <ListItem disableGutters>
          <Avatar sx={{ bgcolor: '#66bb6a', mr: 2 }}>
            <BorderColorRoundedIcon />
          </Avatar>
          <ListItemText primary={
            <>
              <Typography variant="h6" sx={{ color: '#66bb6a' }}>
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
        </ListItem>
      </List>
    </Paper>
  );
};
export default RecipeDetails;
