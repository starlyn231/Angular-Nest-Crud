import { Schema } from 'mongoose';
// this schema defined that i going sav. it need a model for it can save data.
export const ProductSchema = new Schema({
  name: String,
  description: String,
  imageURL: String,
  price: Number,
  createAt: {
    type: Date,
    default: Date.now,
  },
});
