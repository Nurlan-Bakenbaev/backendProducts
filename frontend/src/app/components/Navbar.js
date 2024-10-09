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
import React, { useEffect, useState } from "react";
import User from "./User";
import cookie from "cookie";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const cookies = cookie.parse(document.cookie);
    const userEmail = cookies.userEmail || null;
    const userName = cookies.userName || null;

    if (userEmail) {
      setUser({ email: userEmail, name: userName });
    }
  }, []);
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
          <Link href={"/"}> ANZEIGEN</Link>
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
