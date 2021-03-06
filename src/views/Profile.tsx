//@ts-nocheck
import React from "react";

import { Spinner, Box, Heading } from "@chakra-ui/core";
import { Row } from "../components/Elements";
import { useGetCurrentUser } from "../client/fetcher";

const Profile = () => {
  let { data, loading } = useGetCurrentUser({});

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
      {data && (
        <Box>
          <Heading>{data?.name}</Heading>
        </Box>
      )}
    </Row>
  );
};

export default Profile;
