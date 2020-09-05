export interface Product {
  _id?: string; // ?specifies than is optional
  name: string;
  description: string;
  price: number;
  imageURL: string;
  createAt?: Date;
}
