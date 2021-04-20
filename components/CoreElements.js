const { Box, Text } = require("@chakra-ui/react");

// Containers

function LargeContainer({ children }) {
  return (
    <Box maxW="1200px" margin="0 auto">
      {children}
    </Box>
  );
}

function MediumContainer({ children }) {
  return (
    <Box maxW="900px" margin="0 auto">
      {children}
    </Box>
  );
}

function SmallContainer({ children }) {
  return (
    <Box maxW="600px" margin="0 auto">
      {children}
    </Box>
  );
}

// Text Elements (Headings, Subheadings etc.)
function SectionHeading({ children }) {
  return (
    <Text fontSize="5xl" color="gray.800" mb=".5em" fontWeight="light">
      {children}
    </Text>
  );
}

function PrimaryHeading({ children }) {
  return (
    <Text fontSize="3xl" fontWeight="bold" color="gray.800" m=".15em 0">
      {children}
    </Text>
  );
}

function SecondaryHeading({ children }) {
  return (
    <Text
      fontSize="sm"
      fontWeight="bold"
      color="gray.500"
      textTransform="uppercase"
      letterSpacing=".15em"
    >
      {children}
    </Text>
  );
}

function SubText({ children }) {
  return (
    <Text
      fontSize="lg"
      color="gray.800"
      textTransform="uppercase"
      fontWeight="bold"
    >
      {children}
    </Text>
  );
}

function DescriptiveText({ children }) {
  return (
    <Text fontSize="lg" color="gray.700" lineHeight="1.35em" pt={2}>
      {children}
    </Text>
  );
}

function TitleFlag({ children, flagColor }) {
  return (
    <Box
      borderLeftWidth="5px"
      borderLeftColor={flagColor}
      p=".25em .5em"
      backgroundColor="white"
      color="black"
      position="absolute"
      top="1.2em"
      left="-.3em"
      textTransform="uppercase"
      fontSize="small"
      letterSpacing=".1em"
      fontWeight="600"
    >
      {children}
    </Box>
  );
}

export {
  SectionHeading,
  PrimaryHeading,
  SecondaryHeading,
  SubText,
  TitleFlag,
  DescriptiveText,
  LargeContainer,
  MediumContainer,
  SmallContainer,
};
