import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { AiFillCrown } from "react-icons/ai";
import { DiProlog, DiYii } from "react-icons/di";

export default function HomePageBottom() {
  return (
    <div>
      <Box
        position='relative'
        width='100%'
        h='50vh'
        m='5rem 0'
        mb='10rem'
        _after={{
          content: `""`,
          position: "absolute",
          top: 0,
          left: 0,
          w: "100%",
          h: "100%",
          bg: "rgba(0,0,0,0.4)",
        }}
        clipPath={{
          base: "none",
          md: "polygon(50% 0, 100% 10%, 100% 89%, 50% 100%, 0 90%, 0 10%)",
        }}
      >
        <Image
          src='https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D'
          alt='campaign image'
          objectFit='cover'
          width='100%'
          height='100%'
        />

        <Flex
          position={"absolute"}
          top='40%'
          zIndex='4'
          color='white'
          flexDir={{ base: "column", md: "row" }}
          justify='space-evenly'
          height='150px'
          width='90%'
          m='0 2rem'
          gap={5}
        >
          <Box>
            <Text
              fontSize={{ base: "1.1rem", md: "2rem" }}
              textTransform='uppercase'
            >
              UP TO 40% OFF ON LIGHTING
            </Text>
            <Box h='3px' bg='#E4A757' width='50px' m='1rem 0' />
          </Box>
          <Box>
            <Text fontSize={{ base: "1.1rem", md: "1.3rem" }}>
              Take advantage of our limited-time offer and brighten your
              environment today!
            </Text>
          </Box>
          <Box>
            <Button p='1.5rem 1rem' bg='#E4A757' _hover={{ bg: "#efdbc2" }}>
              Explore Deals{" "}
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
      <Box
        display='flex'
        flexDir='column'
        alignItems='center'
        justifyContent='center'
        bg='#FEF0D9'
        width='100%'
        h='30vh'
        position='relative'
        mt='4rem'
        gap='1rem'
      >
        <UnorderedList
          position='absolute'
          top='-50%'
          left='50%'
          transform='translate(-50%, 125%)'
          display='flex'
          flexDir='row'
          gap='0.5rem'
          listStyleType='none'
          m='0'
        >
          <ListItem>
            <Circle size='70px' bg='#E4A757' color='white' fontSize='1rem'>
              <DiYii fontSize='2rem' />
            </Circle>
          </ListItem>
          <ListItem>
            {" "}
            <Circle size='70px' bg='#E4A757' color='white' fontSize='1rem'>
              <AiFillCrown fontSize='2.5rem' />
            </Circle>
          </ListItem>
          <ListItem>
            <Circle size='70px' bg='#E4A757' color='white' fontSize='1rem'>
              <DiProlog fontSize='2.5rem' />
            </Circle>
          </ListItem>
        </UnorderedList>
        <Text fontSize={{ base: "0.8rem", md: "1rem" }} textAlign='center'>
          Collect points on your purchases as a member of our customer club
        </Text>
        <Button p='1.5rem 2rem' bg='#E4A757' _hover={{ bg: "#efdbc2" }}>
          SIGN UP NOW
          <ArrowForwardIcon
            ml='1rem'
            fontSize='1.5rem'
            transition={"transform 0.2s ease-in-out"}
            _hover={{ transform: "translateX(7px)" }}
          />
        </Button>
      </Box>
    </div>
  );
}
