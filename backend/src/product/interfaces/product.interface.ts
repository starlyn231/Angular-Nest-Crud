// This will define what I will be handling in my code unlike product.dto which is what I will handle in mongodb
import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly description: string;
  readonly imageURL: string;
  readonly price: number;
  readonly createdAt: Date;
}
