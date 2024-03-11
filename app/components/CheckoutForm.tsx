"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  Heading,
  Input,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { useToast } from "@chakra-ui/react";

const Form = () => {
  return (
    <>
      <Heading w='100%' textAlign={"center"} fontWeight='normal' mb='10%'>
        Contact Information
      </Heading>

      <FormControl mt='2%'>
        <FormLabel htmlFor='email' fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input
          id='email'
          type='email'
          data-cy='customer-email'
          autoComplete='email'
        />
        <FormHelperText>Email is required.</FormHelperText>
      </FormControl>
      <Flex mt='2%'>
        <FormControl mr='5%'>
          <FormLabel htmlFor='first-name' fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input
            id='first-name'
            placeholder='First name'
            data-cy='customer-name'
            autoComplete='name'
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='last-name' fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input id='last-name' placeholder='Last name' autoComplete='name' />
        </FormControl>
      </Flex>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor='city'
          fontSize='sm'
          fontWeight='md'
          color='gray.700'
          _dark={{
            color: "gray.50",
          }}
          mt='2%'
        >
          City
        </FormLabel>
        <Input
          type='text'
          name='city'
          id='city'
          autoComplete='address-level2'
          focusBorderColor='brand.400'
          shadow='sm'
          size='sm'
          w='full'
          rounded='md'
          data-cy='customer-city'
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor='street_address'
          fontSize='sm'
          fontWeight='md'
          color='gray.700'
          _dark={{
            color: "gray.50",
          }}
          mt='2%'
        >
          Street address
        </FormLabel>
        <Input
          type='text'
          name='street_address'
          id='street_address'
          autoComplete='street-address'
          focusBorderColor='brand.400'
          shadow='sm'
          size='sm'
          w='full'
          rounded='md'
          data-cy='customer-address'
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor='phone'
          fontSize='sm'
          fontWeight='md'
          color='gray.700'
          _dark={{
            color: "gray.50",
          }}
          mt='2%'
        >
          Phone Number
        </FormLabel>
        <Input
          type='number'
          name='phone'
          id='phone'
          autoComplete='tel'
          focusBorderColor='brand.400'
          shadow='sm'
          size='sm'
          w='full'
          rounded='md'
          data-cy='customer-phone'
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor='postal_code'
          fontSize='sm'
          fontWeight='md'
          color='gray.700'
          _dark={{
            color: "gray.50",
          }}
          mt='2%'
        >
          ZIP / Postal
        </FormLabel>
        <Input
          type='text'
          name='postal_code'
          id='postal_code'
          autoComplete='postal-code'
          focusBorderColor='brand.400'
          shadow='sm'
          size='sm'
          w='full'
          rounded='md'
          data-cy='customer-zipcode'
        />
      </FormControl>
    </>
  );
};

export default function CheckoutForm() {
  const toast = useToast();

  return (
    <>
      <Box
        borderWidth='1px'
        rounded='lg'
        shadow='1px 1px 2px rgba(0,0,0,0.1)'
        width={{ base: "90%", md: "42%" }}
        p='5%'
        m='2rem auto'
        as='form'
        data-cy='customer-form'
      >
        {<Form />}
        <ButtonGroup mt='5%' w='100%'>
          <Flex w='100%' justifyContent='space-between'>
            <NextLink href='/confirmationPage'>
              <Button
                type='submit'
                w='7rem'
                colorScheme='red'
                variant='solid'
                onClick={() => {
                  toast({
                    title: "Order submitted.",
                    description: "Your order has been submitted.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Submit
              </Button>
            </NextLink>
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
