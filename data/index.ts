/**
 * Beskriver en produkt som ska säljas på sidan.
 * OBS: Kan utökas men inte ändras pga cypress.
 **/
export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
}

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
    id:"6",
    image:
      "https://files.oaiusercontent.com/file-sVjoXNwz08G6MgMNEHQt6YB1?se=2024-03-13T19%3A07%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D32ec7bed-d841-46b1-90ea-1d86879a33d4.webp&sig=JYcL0%2BErX4BzszYyevCcma9/3IX2Xb%2BjtPetEJh3K3Q%3D",
    title: "dining table",
    description:
      "Irure irure incididunt ullamco dolor consectetur reprehenderit sit magna ex. Anim sint aliqua dolor eu. Labore et non pariatur ex eu. Ut duis eu anim et consectetur amet velit non.",
    price: "15000",
  },
  {
    id: "7",
    image:
      "https://files.oaiusercontent.com/file-X1d7QpZ2iq00kuzb4ch5QQMy?se=2024-03-13T19%3A07%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De6a92d10-8db5-4dc2-a03f-ca0321e24bdd.webp&sig=ZHdWtlZasAgAMI/PtftV31jwbZoU21mPBg%2BoBz1DYII%3D",
    title: "dining table",
    description:
      "Irure irure incididunt ullamco dolor consectetur reprehenderit sit magna ex. Anim sint aliqua dolor eu. Labore et non pariatur ex eu. Ut duis eu anim et consectetur amet velit non.",
    price: "15000",
  },
  {
    id: "8",
    image:
      "https://files.oaiusercontent.com/file-3ii94cEZh3EvvVZakibzB3Vp?se=2024-03-14T07%3A52%3A28Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De0de1ba9-b1fd-46e1-8bcc-33bb79fe18d1.webp&sig=7KtwOVVgozX5vjx2ANck0pKZvD2Ae0SqaZ4C14SpBQM%3D",
    title: "dining table",
    description:
      "Irure irure incididunt ullamco dolor consectetur reprehenderit sit magna ex. Anim sint aliqua dolor eu. Labore et non pariatur ex eu. Ut duis eu anim et consectetur amet velit non.",
    price: "15000",
  },
];
