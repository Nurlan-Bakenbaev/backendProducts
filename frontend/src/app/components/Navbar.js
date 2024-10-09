"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { MdModeNight } from "react-icons/md";
import Link from "next/link";
import React from "react";
import User from "./User";
import { useSelector } from "react-redux";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { user, loading, error } = useSelector((state) => state.user);

  return (
    <Container
      maxW={"100%"}
      px={4}
      bg={useColorModeValue("gray.100", "gray.900")}>
      <Flex
        mx="auto"
        maxW={"80%"}
        h={"80px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}>
        <Text
          bgGradient="linear(to-r, #7921CA, #FF0080)"
          bgClip="text"
          fontSize={{ base: "28px", md: "36px" }}
          fontWeight="extrabold">
          <Link href={"/"}>My Blog Post</Link>
        </Text>
        <Flex alignItems={"center"} justifyContent={"space-between"} gap={3}>
          <Link href={"/create"} className="nav-Link">
            <IoMdAdd />
          </Link>
          <Button
            _hover={{ backgroundColor: "#FF0080" }}
            backgroundColor={"#7921CA"}
            color={"white"}
            onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <MdModeNight className="lightModeIcon" />
            ) : (
              <MdLightMode />
            )}
          </Button>
          <Flex>
            {user ? (
              <User user={user.user} />
            ) : (
              <Box>
                <Link href={"/signup"} className="nav-Link">
                  Sign up
                </Link>
              </Box>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
