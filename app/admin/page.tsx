"use client";

import { Product, products } from "@/data";
import {
  Button,
  Flex,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function AdminHomePage(product: Product) {
  return (
    <>
      <Flex justify="center" m="5">
        <Button colorScheme="teal" size="lg">
          Add Product
        </Button>
      </Flex>

      <TableContainer style={{ width: "100%", overflowX: "auto" }}>
        <Table>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>image</Th>
              <Th>id</Th>
              <Th>title</Th>
              <Th>description</Th>
              <Th>price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={product.id}>
                <Td>

                  <Image
                    src={product.image}
                    alt={product.title}
                    width="200px"
                    height="200px"
                  />
                </Td>
                <Td>{product.id}</Td>
                <Td>{product.title}</Td>
                <Td style={{ whiteSpace: "normal", width: "300px" }}>
                  {product.description}
                </Td>
                <Td>{product.price}</Td>
                <Td>
                  <Flex justify="center" alignItems="center" height="100%">
                    <Button colorScheme="teal" size="sm" mr="3px">
                      Edit
                    </Button>
                    <Button colorScheme="red" size="sm">
                      Delete
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
