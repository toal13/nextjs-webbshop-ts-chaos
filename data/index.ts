/**
 * Beskriver en produkt som ska säljas på sidan.
 * OBS: Kan utökas men inte ändras pga cypress.
 **/
import * as Yup from "yup";
export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
}

export const ProductSchema = Yup.object().shape<
  Record<keyof Product, Yup.AnySchema>
>({
  id: Yup.string().required(),
  image: Yup.string().required(),
  title: Yup.string().required(),
  description: Yup.string().required(),
  price: Yup.string().required(),
});

export interface CartItem extends Product {
  quantity: number;
}

/* Lägg till era produkter här */
export const products: Product[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "dining table",
    description:
      "Irure irure incididunt ullamco dolor consectetur reprehenderit sit magna ex. Anim sint aliqua dolor eu. Labore et non pariatur ex eu. Ut duis eu anim et consectetur amet velit non.",
    price: "15000",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "table",
    description:
      "Laborum excepteur amet velit ex ipsum cillum culpa dolor magna commodo proident duis occaecat est. Eiusmod reprehenderit exercitation eiusmod velit et do velit. Enim anim est irure nisi proident. Aliquip consectetur cillum non labore minim sit eu ad officia cillum excepteur esse dolore cillum. Mollit do aliqua cupidatat velit id commodo laboris.",
    price: "18000",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "plant",
    description:
      "Culpa incididunt laborum quis elit magna nulla Lorem do laboris excepteur dolore pariatur. Commodo aute et id proident Lorem elit nostrud fugiat commodo ea nisi. Veniam elit magna reprehenderit cillum mollit ullamco deserunt aliqua dolor consequat ex. Irure Lorem exercitation et ut dolor cupidatat deserunt qui quis laborum proident do. Lorem ea pariatur ipsum esse elit cillum duis nulla pariatur aute tempor aliqua eiusmod. Ullamco minim incididunt excepteur exercitation nisi deserunt et amet minim est veniam proident veniam. Veniam labore magna voluptate occaecat.",
    price: "600",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1567459045800-4d77c81fc3f5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "lamp",
    description:
      "In magna sunt nulla excepteur aliquip. Excepteur eu esse in officia non eiusmod esse ullamco deserunt dolore. Nostrud ipsum ipsum velit nostrud exercitation aliqua ea cillum tempor cillum sit proident ut. Incididunt do incididunt do adipisicing eu qui cupidatat ipsum anim. Pariatur cillum ipsum ullamco id sint ex proident magna et. Occaecat quis do minim labore sint cillum. Irure quis nostrud voluptate ad commodo non adipisicing aliqua velit.",
    price: "1200",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1567016520496-0cb37d8467a7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "cabinet",
    description:
      "Consectetur aliquip sunt adipisicing aliqua officia magna consectetur. Do nisi nisi in nostrud anim enim nostrud tempor sunt ut laboris laboris pariatur. Nisi eu velit dolor nostrud. Id exercitation magna dolor voluptate laboris id. Tempor fugiat occaecat sunt ullamco ullamco ea sint ex eiusmod ea est dolore. Do sint aliquip id excepteur ipsum aute velit.",
    price: "2500",
  },
  {
    id: "6",
    image:
      "https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "dining table",
    description:
      "Irure irure incididunt ullamco dolor consectetur reprehenderit sit magna ex. Anim sint aliqua dolor eu. Labore et non pariatur ex eu. Ut duis eu anim et consectetur amet velit non.",
    price: "15000",
  },
  {
    id: "7",
    image:
      "https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "dining table",
    description:
      "Irure irure incididunt ullamco dolor consectetur reprehenderit sit magna ex. Anim sint aliqua dolor eu. Labore et non pariatur ex eu. Ut duis eu anim et consectetur amet velit non.",
    price: "15000",
  },
  {
    id: "8",
    image:
      "https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "dining table",
    description:
      "Irure irure incididunt ullamco dolor consectetur reprehenderit sit magna ex. Anim sint aliqua dolor eu. Labore et non pariatur ex eu. Ut duis eu anim et consectetur amet velit non.",
    price: "15000",
  },
];
