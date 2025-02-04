import React, { useContext } from 'react';
import {  useFieldArray, Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../../store/recipesSlice';
import { AppDispatch } from '../../store/store';
import { UserContext } from '../start'
import { Container,Typography,Box,TextField,Button,IconButton,ToggleButtonGroup,ToggleButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { defaultValues, FormData, schema } from './addRecipeDef';
import { yupResolver } from '@hookform/resolvers/yup';
const AddRecipeForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const context = useContext(UserContext);
  const navigate = useNavigate();
  const { register, control, handleSubmit, formState: { errors },
} = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues
});
  const { fields: ingrFields, append: ingrAppend, remove: ingrRemove } = useFieldArray({ control, name: 'ingredients' });
  const { fields: instrFields, append: instrAppend, remove: instrRemove } = useFieldArray({ control, name: 'instructions' });
  const onSubmit = (data: FormData) => {
    const newRecipe = {
      title: data.title,
      description: data.description,
      products: data.products,
      ingredients: data.ingredients.map((item) => item.name),
      instructions: data.instructions.map((item) => item.step),
      difficulty: data.difficulty
    };
    dispatch(addRecipe({ recipe: newRecipe, userId: context.user.id }));
    navigate('/recipes');
  };
  return (
    <Container maxWidth="sm" sx={{ mt: 4, p: 3, backgroundColor: '#f9f9f9', borderRadius: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Add New Recipe
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField label="Title"
            {...register('title')} error={!!errors.title}
            helperText={errors.title?.message} fullWidth/>
          <TextField
            label="Description"
            {...register('description')}
            error={!!errors.description}
            helperText={errors.description?.message}
            fullWidth multiline rows={3}/>
          <Typography variant="h6">Difficulty Level</Typography>
          <Controller name="difficulty" control={control} render={({ field }) => (
              <ToggleButtonGroup value={field.value} exclusive
              onChange={(e, value) => field.onChange(value)} sx={{ justifyContent: 'center' }}>
                <ToggleButton value="Easy" sx={{ px: 4 }}>Easy</ToggleButton>
                <ToggleButton value="Medium" sx={{ px: 4 }}>Medium</ToggleButton>
                <ToggleButton value="Hard" sx={{ px: 4 }}>Hard</ToggleButton>
              </ToggleButtonGroup> )}/>
          {errors.difficulty && (
            <Typography color="error" variant="body2">{errors.difficulty.message}</Typography>)}
          <TextField label="Products" {...register('products')} error={!!errors.products} 
          helperText={errors.products?.message} fullWidth />
          <Typography variant="h6">Ingredients</Typography>
          {ingrFields.map((field, index) => (
            <Box key={field.id} display="flex" alignItems="center" gap={1}>
              <TextField label={`Ingredient ${index + 1}`}
                {...register(`ingredients.${index}.name` as const)}
                error={!!errors.ingredients?.[index]?.name}
                helperText={errors.ingredients?.[index]?.name?.message} fullWidth/>
              <IconButton onClick={() => ingrRemove(index)} color="error"><DeleteIcon /></IconButton>
            </Box>))}<IconButton
            onClick={() => ingrAppend({ name: '' })} color="primary" sx={{ alignSelf: 'flex-start' }}>
            <AddIcon /></IconButton>
          <Typography variant="h6">Instructions</Typography>
          {instrFields.map((field, index) => (
            <Box key={field.id} display="flex" alignItems="center" gap={1}>
              <TextField
                label={`Instruction ${index + 1}`}
                {...register(`instructions.${index}.step` as const)}
                error={!!errors.instructions?.[index]?.step}
                helperText={errors.instructions?.[index]?.step?.message}fullWidth/>
              <IconButton onClick={() => instrRemove(index)} color="error"><DeleteIcon /></IconButton>
            </Box>))}<IconButton
            onClick={() => instrAppend({ step: '' })}color="primary"
            sx={{ alignSelf: 'flex-start' }}><AddIcon /></IconButton>
          <Box display="flex" gap={2} mt={2}>
            <Button type="submit" variant="contained" sx={{ backgroundColor: 'green', color: 'white' }}>
              Add Recipe</Button>
            <Button type="button" variant="outlined" onClick={() => navigate('/recipes')}>
              Cancel</Button>
          </Box></Box></form></Container>);};
export default AddRecipeForm;
