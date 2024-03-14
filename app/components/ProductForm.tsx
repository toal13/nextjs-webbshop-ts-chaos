import { Product, ProductSchema } from "@/data";
import { Formik } from "formik";

interface Props {
  product?: Product;
}

export default function ProductForm(props: Props) {
  const isEdit = Boolean(props.product);

  const handleSubmit = () => {
    //....
  };

  return (
    <Formik
      initialValues={props.product || {}}
      validationSchema={ProductSchema}
      onSubmit={handleSubmit}
    >
      ....
    </Formik>
  );
}
