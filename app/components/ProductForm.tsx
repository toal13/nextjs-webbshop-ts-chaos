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
import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { useAdmin } from "../contexts/AdminContext";

interface Props {
  product?: Product;
  setImagePreview: (imageUrl: string) => void;
}

export default function ProductForm(props: Props) {
  const { addProduct } = useAdmin();
  const isEdit = Boolean(props.product);

  const handleSubmit = (
    values: Product,
    formikHelpers: FormikHelpers<Product>
  ) => {
    console.log(values);
    if (isEdit) {
      console.log("Product updated!");
    } else {
      addProduct(values);
      formikHelpers.resetForm({
        values: {
          id: "",
          image: "",
          title: "",
          description: "",
          price: "",
        },
      });
    }
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
          const handleImageChange = (
            event: React.ChangeEvent<HTMLInputElement>
          ) => {
            const imageUrl = event.target.value;
            formikProps.setFieldValue("image", imageUrl);
            props.setImagePreview(imageUrl);
          };
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
                      autoComplete='image'
                      focusBorderColor='brand.400'
                      onChange={handleImageChange}
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
                {isEdit ? "UPDATE PRODUCT" : "ADD PRODUCT"}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}
