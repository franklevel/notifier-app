import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { TextField, Button, CircularProgress } from '@mui/material';

interface FormData {
  message: string;
  category: string;
}

const Form: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const { data, isLoading } = useQuery('categories', async () => {
    const response = await fetch('/categories');
    return response.json();
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('message')}
        label="Message"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <TextField
          {...register('category')}
          label="Category"
          select
          variant="outlined"
          fullWidth
          margin="normal"
        >
          {data?.map((category: string) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </TextField>
      )}
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Form;
