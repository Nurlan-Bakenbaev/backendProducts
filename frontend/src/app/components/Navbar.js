"use client";
import {
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

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
          ANZEIGEN
        </Text>
        <Flex alignItems={"center"} justifyContent={"space-between"} gap={2}>
          <Link href={"/create"} className="nav-Link">
            <IoMdAdd />
          </Link>
          <Button
            _hover={{ backgroundColor: "#FF0080" }}
            backgroundColor={"#7921CA"}
            color={"white"}
            onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <MdLightMode className="lightModeIcon" />
            ) : (
              <MdModeNight />
            )}
          </Button>
          <User />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
