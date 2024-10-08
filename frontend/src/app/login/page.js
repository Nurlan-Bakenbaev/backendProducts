"use client";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../redux/features/userSlice";
const Login = () => {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
    name: "",
  });
  const { user, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (userData.email && userData.password) {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    } else {
      setError(true);
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(postUser(userData));
  };

  return (
    <Container maxW={"container.sm"}>
      <Heading as={"h2"} mb={"20px"} size={"2xl"} textAlign={"center"}>
        Login
      </Heading>
      <Box
        w={"full"}
        bg={useColorModeValue("gray.50", "gray.900")}
        p={6}
        rounded={"lg"}
        shadow={"md"}>
        <VStack padding={"10px"} spacing={4}>
          <></>
          <Input
            placeholder="User name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            placeholder="Email Address"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
          <Button onClick={handleLogin} colorScheme="purple">
            {loading ? "Loading..." : "Login"}
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;
