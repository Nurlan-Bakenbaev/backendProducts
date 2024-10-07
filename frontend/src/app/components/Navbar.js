"use client";
import { Button, Container, Flex, Text } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { MdModeNight } from "react-icons/md";
import Link from "next/link";
import React from "react";
import User from "./User";

const Navbar = () => {
  const [dark, setDark] = React.useState(false);
  const toggleTheme = () => {
    setDark(!dark);
    alert("dark theme is enabled");
  };

  return (
    <Container px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}>
        <Text
          bgGradient="linear(to-r, #7921CA, #FF0080)"
          bgClip="text"
          fontSize={{ base: "22px", sm: "32" }}
          fontWeight="extrabold">
          ANZEIGEN
        </Text>
        <Flex justifyContent={"space-between"} gap={2}>
          <Link href={"/create"} className="nav-Link">
            <IoMdAdd />
          </Link>
          <Button
            _hover={{ backgroundColor: "#FF0080" }}
            backgroundColor={"#7921CA"}
            color={"white"}
            onClick={toggleTheme}>
            {dark ? <MdLightMode /> : <MdModeNight />}
          </Button>
        </Flex>
        <User />
      </Flex>
    </Container>
  );
};

export default Navbar;
