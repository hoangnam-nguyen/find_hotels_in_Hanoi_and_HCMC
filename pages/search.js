import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import noresult from "../images/noresult.jpg";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const Search = ({ properties }) => {
  const [showFilters, setShowFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setShowFilters((showFilters) => !showFilters)}
      >
        <Text>Search Hotel by Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter}></Icon>
      </Flex>
      {showFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Hotels{" "}
        {router.query.destinationId === "1781360"
          ? "in Hanoi"
          : router.query.destinationId === "1633619"
          ? "in Ho Chi Minh City"
          : ""}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
          <Image alt="no result" src={noresult} />
          <Text fontSize="2xl" marginTop="3">
            No Results Found
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  const destinationId = query.destinationId || "1781360";
  const pageNumber = query.pageNumber || "1";
  const pageSize = query.pageSize || "30";
  const checkIn = query.checkIn || "2020-01-08";
  const checkOut = query.checkOut || "2020-01-15";
  const adults1 = query.adults1 || "1";

  const queryData = await fetchApi(
    `${baseUrl}/properties/list?destinationId=${destinationId}&pageNumber=${pageNumber}&pageSize=${pageSize}&checkIn=${checkIn}&checkOut=${checkOut}&adults1=${adults1}`
  );

  return {
    props: {
      properties: queryData?.data.body.searchResults.results,
    },
  };
}