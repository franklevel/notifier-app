import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery, useMutation } from "react-query";
import { FormData } from "../interfaces/FormData";
import { API_URL } from "../constants";

interface UseFormProps {
  onSubmit: (data: FormData) => void;
}

export const useFormHandler = ({ onSubmit }: UseFormProps) => {
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleCategoriesChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const { register, handleSubmit } = useForm<FormData>();
  const { data, isLoading } = useQuery("categories", async () => {
    const response = await fetch(`${API_URL}/categories`);
    return response.json();
  });

  const mutation = useMutation((formData: FormData) =>
    fetch(`${API_URL}/notifications/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
  );

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
  };

  return {
    message,
    category,
    snackbarOpen,
    snackbarMessage,
    handleMessageChange,
    handleCategoriesChange,
    register,
    handleSubmit: handleSubmit(handleFormSubmit),
    isLoading,
    categories: data?.categories,
    mutation,
    setSnackbarOpen,
    setSnackbarMessage,
  };
};
