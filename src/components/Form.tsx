import {
  Button,
  CircularProgress,
  MenuItem,
  Snackbar,
  TextField,
} from "@mui/material";
import { Category } from "../interfaces/Category";
import { FormData } from "../interfaces/FormData";
import { useFormHandler } from "../hooks/useFormHandler";

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = () => {
  const onSubmit = (data: FormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        setSnackbarMessage("Notification sent successfully");
        setSnackbarOpen(true);
      },
      onError: () => {
        setSnackbarMessage("Failed to send notification");
        setSnackbarOpen(true);
      },
    });
  };

  const {
    message,
    category,
    snackbarOpen,
    snackbarMessage,
    handleMessageChange,
    handleCategoriesChange,
    register,
    handleSubmit,
    isLoading,
    categories,
    mutation,
    setSnackbarOpen,
    setSnackbarMessage,
  } = useFormHandler({ onSubmit });

  const isButtonDisabled = !category || !message;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          {...register("message")}
          multiline
          rows={4}
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          value={message}
          onChange={handleMessageChange}
        />
        {isLoading ? (
          <CircularProgress />
        ) : (
          <TextField
            {...register("categoryId")}
            label="Category"
            select
            variant="outlined"
            fullWidth
            margin="normal"
            value={category}
            onChange={handleCategoriesChange}
          >
            {categories?.map((category: Category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </TextField>
        )}
        <Button type="submit" variant="contained" color="primary" disabled={isButtonDisabled}>
          Submit
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </>
  );
};

export default Form;
