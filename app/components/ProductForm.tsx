"use client";
import { Product, ProductSchema } from "@/data";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

interface Props {
  product?: Product;
}

export default function ProductForm(props: Props) {
  const isEdit = Boolean(props.product);

  const handleSubmit = (values: any) => {
    console.log(values);
    localStorage.setItem("product", JSON.stringify(values));
  };

  return (
    <Container>
      <Formik
        initialValues={
          props.product || {
            id: "",
            image: "",
            title: "",
            description: "",
            price: "",
          }
        }
        validationSchema={ProductSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          return (
            <Form data-cy='product-form'>
              <Field name='title'>
                {({ field, form }: any) => (
                  <FormControl
                    mt='2%'
                    isInvalid={form.errors.title && form.touched.title}
                  >
                    <FormLabel>Title</FormLabel>
                    <Input
                      {...field}
                      data-cy='product-title'
                      autoComplete='title'
                      focusBorderColor='brand.400'
                    />
                    <FormErrorMessage data-cy='product-title-error'>
                      {form.errors.title}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='id'>
                {({ field, form }: any) => (
                  <FormControl
                    mt='2%'
                    isInvalid={form.errors.id && form.touched.id}
                  >
                    <FormLabel>Product Id</FormLabel>
                    <Input
                      {...field}
                      data-cy='product-id'
                      autoComplete='id'
                      focusBorderColor='brand.400'
                    />
                    <FormErrorMessage data-cy='product-title-error'>
                      {form.errors.id}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='description'>
                {({ field, form }: any) => (
                  <FormControl
                    mt='2%'
                    isInvalid={
                      form.errors.description && form.touched.description
                    }
                  >
                    <FormLabel>Description</FormLabel>
                    <Input
                      {...field}
                      data-cy='product-description'
                      autoComplete='description'
                      focusBorderColor='brand.400'
                    />
                    <FormErrorMessage data-cy='product-description-error'>
                      {form.errors.description}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='image'>
                {({ field, form }: any) => (
                  <FormControl
                    mt='2%'
                    isInvalid={form.errors.image && form.touched.image}
                  >
                    <FormLabel>Image</FormLabel>
                    <Input
                      {...field}
                      data-cy='product-image-error'
                      autoComplete='description'
                      focusBorderColor='brand.400'
                    />
                    <FormErrorMessage data-cy='product-image-error'>
                      {form.errors.image}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='price'>
                {({ field, form }: any) => (
                  <FormControl
                    mt='2%'
                    isInvalid={form.errors.price && form.touched.price}
                  >
                    <FormLabel>Price</FormLabel>
                    <Input
                      {...field}
                      data-cy='product-price'
                      autoComplete='price'
                      focusBorderColor='brand.400'
                    />
                    <FormErrorMessage data-cy='product-price-error'>
                      {form.errors.price}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                data-cy='admin-add-product'
                mt='2rem'
                type='submit'
                bg='#E4A757'
                _hover={{ bg: "#efdbc2" }}
                variant='solid'
                isLoading={formikProps.isSubmitting}
              >
                {isEdit ? "ADD PRODUCT" : "UPDATE PRODUCT"}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}
