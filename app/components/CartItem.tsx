import { CartItem as CartItemType } from "@/data";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
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
import { useCart } from "../contexts/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeFromCart, addToCart } = useCart();

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
        onClick={() => removeFromCart(item)}
      >
        <MdClose />
      </Square>

      <Stack>
        <CardBody flexDir='column' gap='3'>
          <Heading size='md'>{item.title}</Heading>
          <Text py='2' data-cy='product-price'>
            {" "}
            {item.price} kr
          </Text>
        </CardBody>

        <CardFooter fontSize='1.3rem' data-cy='total-price'>
          <Flex
            justify='space-between'
            gap={{ base: "2rem", md: "10rem" }}
            data-cy='quantity-controls'
          >
            <Text color='blue'>Total: 200 kr</Text>

            <Flex>
              <Square
                bg='#D9D9D9'
                size='30px'
                onClick={() => removeFromCart(item)}
                data-cy='decrease-quantity-button'
              >
                <MinusIcon />
              </Square>
              <Square bg='#f4f2f2' size='30px' data-cy='product-quantity'>
                <Text>{item.quantity}</Text>
              </Square>
              <Square
                bg='#D9D9D9'
                size='30px'
                onClick={() => addToCart(item)}
                _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
                data-cy='increase-quantity-button'
              >
                <AddIcon />
              </Square>
            </Flex>
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  );
}
