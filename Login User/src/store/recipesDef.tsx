export type Recipe = {
    id:string,
    title: string,
    description: string,
    difficulty:string
    products: string,
    ingredients: string[]
    instructions: string[],
    authorId:string
  }
  export interface RecipesState {
  list: Recipe[];
  loading: boolean;
  error: string | null;
}
export const initialState: RecipesState = {
  list: [],
  loading: false,
  error: null,
};