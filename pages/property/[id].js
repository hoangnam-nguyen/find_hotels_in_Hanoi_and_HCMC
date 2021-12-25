import { Box, Flex, Spacer, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

const PropertyDetails = ({
  propertyDetails: { propertyDescription, guestReviews, amenities, atAGlance, hygieneAndCleanliness },
  propertyPhotos,
}) => (
  <Box maxWidth="1000px" m="auto" p="4">
    {propertyPhotos && <ImageScrollbar data={propertyPhotos} />}
    <Box w="full" p="6">
      <Flex paddingTop="2" alignItems="center" justifyContent="center">
        <Box paddingRight="3" color="green.400">
          {parseFloat(guestReviews?.brands?.formattedScale) > 6 && <GoVerified />}
        </Box>
        <Text fontWeight="bold" fontSize="lg">
          {propertyDescription.name}
        </Text>
      </Flex>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Text fontStyle="italic" fontSize="sm">
          {propertyDescription.address.fullAddress}
        </Text>
        <Text fontWeight="bold" fontStyle="italic" fontSize="medium">
          USD{millify(propertyDescription.featuredPrice.currentPrice.plain)}/person/night
        </Text>
        <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
          {Math.floor(Math.random() * 2 + 2)} <FaBed /> | {Math.floor(Math.random() * 2 + 1)} <FaBath /> |{" "}
          {Math.floor(Math.random() * 20 + 40)} sqft <BsGridFill />
        </Flex>
      </Flex>
      <Flex flexDirection="column" alignItems="left" justifyContent="center">
        <Text fontWeight="bold" fontStyle="italic" fontSize="medium" color="blue.400">
          Room Types:
        </Text>
        <ul>
          {propertyDescription.roomTypeNames.map((room, index) => (
            <li key={index}>{room}</li>
          ))}
        </ul>
        <br />
        <Text fontWeight="bold" fontStyle="italic" fontSize="medium" color="blue.400">
          {hygieneAndCleanliness.title}:
        </Text>
        <ul>
          {hygieneAndCleanliness.healthAndSafetyMeasures.measures.map((measure, index) => (
            <li key={index}>{measure}</li>
          ))}
        </ul>
        <br />
        <Text fontWeight="bold" fontStyle="italic" fontSize="medium" color="blue.400">
          Hotel Size:
        </Text>
        <ul>
          {atAGlance.keyFacts.hotelSize.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <br />
        <Text fontWeight="bold" fontStyle="italic" fontSize="medium" color="blue.400">
          Check In-Out:
        </Text>
        <ul>
          {atAGlance.keyFacts.arrivingLeaving.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <br />
        <Text fontWeight="bold" fontStyle="italic" fontSize="medium" color="blue.400">
          Special Check-in Instructions:
        </Text>
        <ul>
          {atAGlance.keyFacts.specialCheckInInstructions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <br />
        <Text fontWeight="bold" fontStyle="italic" fontSize="medium" color="blue.400">
          Required at Check-in:
        </Text>
        <ul>
          {atAGlance.keyFacts.requiredAtCheckIn.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Flex>
    </Box>
    <Box>
      {amenities.length && (
        <Text fontSize="xl" fontWeight="black" marginTop="5">
          Amenities
        </Text>
      )}
      <Flex flexWrap="wrap">
        {amenities.map((item) =>
          item.listItems.map((listItem) =>
            listItem.listItems.map((amenity) => (
              <Text
                fontWeight="bold"
                color="blue.400"
                fontSize="sm"
                p="2"
                bg="gray.200"
                m="1"
                borderRadius="5"
                key={amenity}
              >
                {amenity}
              </Text>
            ))
          )
        )}
      </Flex>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const dataDetails = await fetchApi(`${baseUrl}/properties/get-details?id=${id}`);
  const dataPhotos = await fetchApi(`${baseUrl}/properties/get-hotel-photos?id=${id}`);

  return {
    props: {
      propertyDetails: dataDetails?.data.body,
      propertyPhotos: dataPhotos.hotelImages.slice(0, 10),
    },
  };
}
