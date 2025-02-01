import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export type Recipe = {
    id:string,
    title: string,
    description: string,
    difficulty:string
    products: string,
    ingredients: string[]
    instructions: string[],
  }
  
interface RecipesState {
  list: Recipe[];
  loading: boolean;
  error: string | null;
}

const initialState: RecipesState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk("recipes/fetch", async (_, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:3000/api/recipes");
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addRecipe = createAsyncThunk(
  "recipes/add",
  async ({ recipe, userId }: { recipe: Omit<Recipe, "id">; userId: string }, thunkAPI) => {
    
    try {
      const response = (await axios.post("http://localhost:3000/api/recipes", recipe,
        { headers: { 'user-id': '' + userId} }
      ))
      console.log(response.data.recipe);
      
      return response.data.recipe;
    } catch (error: any) {
        console.log(error);
        
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  
  extraReducers: (builder) => {
    builder
    .addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    })
    .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" 
          ? action.payload 
          : action.error.message || "Error fetching recipes";
      })
      .addCase(addRecipe.rejected, (state, action) => {
        state.error = typeof action.payload === "string" 
          ? action.payload 
          : action.error.message || "Error adding recipe";
      })
    .addCase(addRecipe.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
  
  },
});

export default recipesSlice;
