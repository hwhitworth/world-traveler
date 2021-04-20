import { Box, Grid, GridItem } from "@chakra-ui/layout";
import { SectionHeading, LargeContainer } from "../components/CoreElements";
import ImageCard from "../components/ImageCard";
import { locations } from "../data.json";

export default function WorldTraveler() {
  return (
    <Box bgColor="#EEEFF2" minHeight="100vh" p={6}>
      <LargeContainer>
        <SectionHeading>World Traveler</SectionHeading>
        <Grid gap={4}>
          {locations.map((location, i) => {
            return (
              <GridItem colSpan={i == "0" ? 2 : [2, 2, 2, 1]} key={i}>
                <ImageCard
                  imagePath={location.imagePath}
                  openSeats={location.openSeats}
                  destination={location.destination}
                  travelDate={location.travelDate}
                  travelDescription={location.travelDescription}
                  isInternational={location.isInternational}
                />
              </GridItem>
            );
          })}
        </Grid>
      </LargeContainer>
    </Box>
  );
}
