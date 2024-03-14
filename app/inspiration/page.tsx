"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import RoomCard from "../components/RoomCard";

function Inspiration() {
  return (
    <>
      <Flex flexDir='column' align='center'>
        <Text fontSize='1.7rem' mt='3rem'>
          Inspiration & Tips
        </Text>
        <Box position='relative' width='100%'>
          <Image
            src='https://images.pexels.com/photos/6758771/pexels-photo-6758771.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt='inspiration image'
            objectFit='cover'
            width='100%'
            height='350px'
            mt='3rem'
          />
          <Text
            position='absolute'
            fontSize={{ base: "1.8rem", md: "3rem" }}
            color='white'
            mt='3rem'
            top='42%'
            left='50%'
            transform='translate(-50%, -42%)'
          >
            Explore. Dream. Create
          </Text>
        </Box>
        <Text fontSize='1.7rem' m='3rem auto' textAlign='center'>
          Inspiration Room by Room
        </Text>
      </Flex>
      <Box bg='#FAF7F7' width='100%' p='2rem'>
        <Flex
          justify='center'
          align='center'
          flexWrap='wrap'
          mt='3rem'
          gap='3rem'
        >
          <RoomCard
            src='https://files.oaiusercontent.com/file-Q9uQ4db6w9PydHmJe7r4MTfH?se=2024-03-13T21%3A59%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De6657a64-f898-487d-8029-9cab5758921f.webp&sig=h7zqyWPOhS1oQK5H9ik407nAxsf54ubB6n5Ihde1Y/I%3D'
            title='Livingroom'
          />
          <RoomCard
            src='https://files.oaiusercontent.com/file-IBf89VCRFoY1ZZ76QspThtna?se=2024-03-13T21%3A59%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9ae55067-1530-4f39-bceb-7e329a6b64d9.webp&sig=x%2BKetAISgsg9iHikutE0toa9SNixu5nKb/KAob5tiLU%3D'
            title='Kitchen'
          />
          <RoomCard
            src='https://files.oaiusercontent.com/file-s42kmGQVLtD7tvIIcC3Qi7rM?se=2024-03-13T21%3A59%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D64197174-e337-476b-ba07-09755ff53a35.webp&sig=1lzJojqQU3x4ghoYIdo5cKI8EdPFTysXeRxFWvonm0Q%3D'
            title='Bathroom'
          />
          <RoomCard
            src='https://files.oaiusercontent.com/file-xmT1oaczXsuaFyAFDgzVd8XI?se=2024-03-13T21%3A59%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D81efbf13-d827-4219-8789-b2872ae79869.webp&sig=JniFMV/3eKnSLW6P4nTdZooATytM0L4p5iT4vPOLu9Y%3D'
            title='Bedroom'
          />
        </Flex>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justify='space-evenly'
          height='150px'
          width='90%'
          m='1rem auto'
          gap={5}
        >
          <Box>
            <Text
              fontSize={{ base: "1.1rem", md: "2rem" }}
              textTransform='uppercase'
            >
              Summer Outdoor Living
            </Text>
            <Box h='3px' bg='#E4A757' width='50px' m='1rem 0' />
          </Box>
          <Box>
            <Text fontSize={{ base: "1.1rem", md: "1.3rem" }}>
              Outdoor sofas and dining sets to make the most of the summer
              season.
            </Text>
          </Box>
          <Box>
            <Button p='1.5rem 1rem' bg='#E4A757' _hover={{ bg: "#efdbc2" }}>
              Inspire Yourself{" "}
              <ArrowForwardIcon
                ml='1rem'
                fontSize='1.5rem'
                transition={"transform 0.2s ease-in-out"}
                _hover={{ transform: "translateX(5px)" }}
              />
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Inspiration;
