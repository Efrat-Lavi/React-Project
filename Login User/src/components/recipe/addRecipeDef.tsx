import * as yup from 'yup';
export type FormData = {
    title: string; description: string; products: string;
    ingredients: { name: string }[]; instructions: { step: string }[]; difficulty: string;
};

export const schema: yup.ObjectSchema<FormData> = yup.object({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    products: yup.string().required('Products are required'),
    ingredients: yup
        .array(
            yup.object({ name: yup.string().required('Ingredient is required') })
        )
        .min(1, 'At least one ingredient is required')
        .required(),
    instructions: yup
        .array(
            yup.object({ step: yup.string().required('Instruction is required') })
        )
        .min(1, 'At least one instruction is required')
        .required(),
    difficulty: yup.string().required('Difficulty is required'),
});
export const defaultValues:FormData= {
    title: '', description: '', products: '', ingredients: [{ name: '' }],
    instructions: [{ step: '' }], difficulty: ''
}
