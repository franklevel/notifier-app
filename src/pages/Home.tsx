import React from "react";
import Form from "../components/Form";
import Navbar from "../components/NavBar";
import { Container, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Typography variant="h4">Send a Notification</Typography>
      <Form />
    </Container>
  );
};

export default Home;
