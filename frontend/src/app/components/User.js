import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

const User = () => {
  return (
    <Wrap>
      <WrapItem>
        <Avatar
          size="md"
          name="Segun Adebayo"
          src="https://bit.ly/sage-adebayo"
        />
      </WrapItem>
    </Wrap>
  );
};

export default User;
