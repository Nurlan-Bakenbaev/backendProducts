import { Avatar, Box, Button, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

const User = ({ user }) => {
  const { name, email, img } = user;
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <Flex alignItems={"center"} gap={3}>
      <Wrap>
        <WrapItem>
          <Avatar
            title={name}
            size="md"
            name={name}
            src={img || <MdAccountCircle />}
          />
        </WrapItem>
      </Wrap>
      <Button onClick={handleLogout}>
        <IoIosLogOut />
      </Button>
    </Flex>
  );
};

export default User;
