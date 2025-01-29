

import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { addRecipe, Recipe } from "../store/recipesSlice";
import { useDispatch, } from "react-redux";
import { AppDispatch, } from "../store/store";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";


const schema = Yup.object().shape({
  title: Yup.string().required("יש להזין כותרת"),
  description: Yup.string().required("יש להזין תיאור"),
  products: Yup.string().required("יש להזין רשימת מוצרים"),
  ingredients: Yup.string().required("יש להזין רשימת מרכיבים"),
  instructions: Yup.string().required("יש להזין הוראות הכנה"),
});

const AddRecipe: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<Recipe, "id">>({
    resolver: yupResolver(schema),
  });
  const context = useContext(userContext);


//   const { list: recipesList, loading, error } = useSelector((store: StoreType) => store.recipes);
    const dispatch:AppDispatch = useDispatch();
    const navigate = useNavigate();
  const onSubmit: SubmitHandler<Omit<Recipe, "id">> = (data) => {

    const newRecipe = { ...data };
    dispatch(addRecipe({recipe:newRecipe,userId:context.user.id}));
    console.log("נתוני הטופס שנשלחו:", data);


    navigate("/recipes");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        הוספת מתכון חדש
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="כותרת"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
            fullWidth
          />
          <TextField
            label="תיאור"
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
            fullWidth
          />
          <TextField
            label="מוצרים"
            {...register("products")}
            error={!!errors.products}
            helperText={errors.products?.message}
            fullWidth
          />
          <TextField
            label="מרכיבים"
            {...register("ingredients")}
            error={!!errors.ingredients}
            helperText={errors.ingredients?.message}
            multiline
            rows={4}
            fullWidth
          />
          <TextField
            label="הוראות הכנה"
            {...register("instructions")}
            error={!!errors.instructions}
            helperText={errors.instructions?.message}
            multiline
            rows={4}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            הוסף מתכון
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default AddRecipe
