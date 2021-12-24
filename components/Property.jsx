import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import defaultImage from "../images/defaultHotelImage.jpg";
import { fetchApi } from "../utils/fetchApi";

const Property = ({
  property: {
    id,
    name,
    starRating,
    address,
    guestReviews,
    landmarks,
    ratePlan,
    neighbourhood,
    coordinate,
    optimizedThumbUrls,
  },
}) => (
  <Link href={`/property/${id}`} passHref>
    <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
      <Box>
        <Image
          src={optimizedThumbUrls ? optimizedThumbUrls.srpDesktop : defaultImage}
          width={400}
          height={260}
          alt="hotel"
        />
      </Box>
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight={guestReviews?.rating > 6 ? "3" : "0"} color="green.400">
              {parseFloat(guestReviews?.rating) > 6 && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              USD{millify(ratePlan.price.exactCurrent)}/person/night
            </Text>
          </Flex>
          <Text fontWeight="bold" fontStyle="italic" fontSize="sm">Rating: {guestReviews?.rating}/10</Text>
        </Flex>
        <Box p="1" w="full" color="blue.400">
          <Text fontWeight="bold">{name}</Text>
          <Text>
            {address.streetAddress}, {address.locality} {address.postalCode}, {address.countryName}
          </Text>
        </Box>
        <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
          {Math.floor(Math.random() * 2 + 2)} <FaBed /> | {Math.floor(Math.random() * 2 + 1)} <FaBath /> |{" "}
          {Math.floor(Math.random() * 20 + 40)} sqft <BsGridFill />
        </Flex>
      </Box>
    </Flex>
  </Link>
);

export default Property;
