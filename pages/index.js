import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import imageHCM from "../images/hcm_city.jpg";
import imageHanoi from "../images/hanoi.jpg";

import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/Property";

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" color="gray.700" paddingTop="3" paddingBottom="3">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({propertiesInHCM, propertiesInHanoi}) {
  return (
    <Box>
      <Banner
        purpose="Find the best hotel to stay in Hanoi"
        title1="Detailed Information on the Best Hotel in"
        title2="HANOI"
        desc1="Explore hotels, villas, studios"
        desc2="and MORE"
        buttonText="Explore"
        linkName="/search?destinationId=1781360"
        imageUrl={imageHanoi}
      />
      <Flex flexWrap="wrap">
        {propertiesInHanoi.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
      <Banner
        purpose="Find the best hotel to stay in Ho Chi Minh City"
        title1="Detailed Information on the Best Hotel in"
        title2="HO CHI MINH CITY"
        desc1="Explore hotels, villas, studios"
        desc2="and MORE"
        buttonText="Explore"
        linkName="/search?destinationId=1633619"
        imageUrl={imageHCM}
      />
      <Flex flexWrap="wrap">
        {propertiesInHCM.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyInHanoi = await fetchApi(
    `${baseUrl}/properties/list?destinationId=1781360&pageNumber=1&pageSize=6&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1`
  );
  const propertyInHCM = await fetchApi(
    `${baseUrl}/properties/list?destinationId=1633619&pageNumber=1&pageSize=6&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1`
  );

  return {
    props: {
      propertiesInHanoi: propertyInHanoi?.data.body.searchResults.results,
      propertiesInHCM: propertyInHCM?.data.body.searchResults.results,
    },
  };
}
