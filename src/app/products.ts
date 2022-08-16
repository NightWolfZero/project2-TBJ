// export interface product{
//     id:number;
//     p_category:string;
//     p_description:string;
//     p_image:string;
//     manufacturer:string;
//     p_name:string;
//     price:string;
//     stock:string;


// }

// export interface Product {
//     id: number;
//     title: string;
//     price: number;
//     rating:number
//     image: string;
//   }
  
//   export const products = [
//     {
//       id: "12321341",
//      title: "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
//      price: 11.96,
//      rating: 5,
//      image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
//     },
//     {
//        id: 49538094,
//       title: "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
//        price: 239.0,
//        rating: 4,
//        image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
      
       
//     },
//     {
//       id: 4903850,
//       title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
//       price: 199.99,
//       rating: 4,
//       image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
//     }
//   ];
  
  
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  }

];


