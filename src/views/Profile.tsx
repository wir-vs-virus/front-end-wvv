//@ts-nocheck
import React from "react";

import { Spinner, Box, Heading } from "@chakra-ui/core";
import { Row } from "../components/Elements";
import { useGetCurrentUser, User } from "../client/fetcher";

const isUser = (user: User | null | void): user is User => {
  return (user as User).id !== undefined;
};

const Profile = () => {
  let { data, loading, error } = useGetCurrentUser({});

  return (
    <Row>
      {!data && loading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      {data && isUser(data) && (
        <Box>
          <Heading>{data.name}</Heading>
        </Box>
      )}
    </Row>
  );
};

export default Profile;
