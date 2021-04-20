import { Box, Flex, HStack, Image, SimpleGrid } from "@chakra-ui/react";
import {
  PrimaryHeading,
  SecondaryHeading,
  TitleFlag,
  SubText,
  DescriptiveText,
} from "./CoreElements";

export default function ImageCard({
  imagePath,
  openSeats,
  destination,
  travelDate,
  travelDescription,
  isInternational,
}) {
  const lowSeating = openSeats < 5;
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={0}>
      <Box position="relative">
        <Image
          width="100%"
          minHeight={["auto", "auto", "100%"]}
          src={imagePath}
        />
        <TitleFlag
          flagColor={isInternational ? "yellow.400" : "blue.400"}
          children={isInternational ? "International" : "Domestic"}
        />
      </Box>
      <Flex
        flexDirection="column"
        justifyContent="center"
        backgroundColor="white"
        alignSelf="stretch"
        marginLeft="0px"
        p={10}
      >
        <SecondaryHeading
          children={lowSeating ? `${openSeats} spots left!` : `Register Now`}
        />
        <PrimaryHeading children={destination} />
        <SubText children={travelDate} />
        <DescriptiveText children={travelDescription} />
      </Flex>
    </SimpleGrid>
  );
}
