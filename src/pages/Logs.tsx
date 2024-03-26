import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Navbar from "../components/NavBar";

const Logs: React.FC = () => {
  // Mocked data
  const logs = [
    {
      id: 1,
      message: "Log message 1",
      category: "Category A",
      channel: "Channel X",
      timestamp: "2022-04-01 10:00:00",
    },
    {
      id: 2,
      message: "Log message 2",
      category: "Category B",
      channel: "Channel Y",
      timestamp: "2022-04-01 11:00:00",
    },
    {
      id: 3,
      message: "Log message 3",
      category: "Category C",
      channel: "Channel Z",
      timestamp: "2022-04-01 12:00:00",
    },
  ];

  return (
    <Container maxWidth="xl">
      <Navbar />
      <h1>Log History</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Channel</TableCell>
            <TableCell>Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((log) => (
            <TableRow key={log.id}>
              <TableCell>{log.id}</TableCell>
              <TableCell>{log.message}</TableCell>
              <TableCell>{log.category}</TableCell>
              <TableCell>{log.channel}</TableCell>
              <TableCell>{log.timestamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Logs;
