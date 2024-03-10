import { CartItem as CartItemType } from "@/data";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  return (
    <Card
      data-cy='cart-item'
      direction='row'
      overflow='hidden'
      variant='outline'
      justify='justify-between'
      align='center'
      p='0.5rem'
      gap={{ base: "1rem", md: "2rem" }}
      width={{ base: "100%", md: "60%" }}
    >
      <Box w='150px' h='150px'>
        <Image
          objectFit='cover'
          width='100%'
          height='100%'
          src={item.image}
          alt={item.title}
        />
      </Box>
      <Square
        position='absolute'
        top='1rem'
        right='1rem'
        size='30px'
        fontSize='1.5rem'
        _hover={{
          color: "brown",
          cursor: "pointer",
          transform: "scale(1.2)",
        }}
        onClick={() => {
          console.log("I was clicked");
        }}
      >
        <MdClose />
      </Square>

      <Stack>
        <CardBody flexDir='column' gap='3'>
          <Heading size='md'>Dining table</Heading>
          <Text py='2'>Sek {item.price}</Text>
        </CardBody>

        <CardFooter fontSize='1.3rem' data-cy='total-price'>
          <Flex
            justify='space-between'
            gap={{ base: "2rem", md: "5rem" }}
            data-cy='quantity-controls'
          >
            <Text color='blue'>Total: 200 kr</Text>

            <Flex>
              <Square
                bg='#D9D9D9'
                size='30px'
                onClick={() => {
                  console.log("I was clicked");
                }}
                data-cy='decrease-quantity-button'
              >
                <Text> -</Text>
              </Square>
              <Square bg='#f4f2f2' size='30px' data-cy='product-quantity'>
                <Text>0</Text>
              </Square>
              <Square
                bg='#D9D9D9'
                size='30px'
                onClick={() => {
                  console.log("I was clicked");
                }}
                data-cy='increase-quantity-button'
              >
                <Text>+</Text>
              </Square>
            </Flex>
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  );
}
