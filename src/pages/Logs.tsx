import React from "react";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
} from "@mui/material";
import { useFetchNotifications } from "../hooks/useFecthNotifications";
import { Notification } from "../interfaces/Notification";
import Navbar from "../components/NavBar";

const Logs: React.FC = () => {
  const { data: notifications, isLoading, isError } = useFetchNotifications();

  if (isLoading) return <CircularProgress />;
  if (isError) return <div>Error fetching notifications</div>;

  return (
    <Container maxWidth="xl">
      <Navbar />
      <Typography variant="h4">Logs History</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Channel</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(notifications as unknown as Notification[])?.map(
              (notification: Notification) => (
                <TableRow key={notification.id}>
                  <TableCell>{notification.id}</TableCell>
                  <TableCell>{notification.message}</TableCell>
                  <TableCell>{notification.category?.name}</TableCell>
                  <TableCell>{notification.channel?.name}</TableCell>
                  <TableCell>{notification.createdAt}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Logs;
