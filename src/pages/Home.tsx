import React from "react";
import Form from "../components/Form";
import Navbar from "../components/NavBar";
import { Container } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <h1>Notification Form</h1>
      <Form />
    </Container>
  );
};

export default Home;
