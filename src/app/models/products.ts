import mongoose, { Schema, model, models } from "mongoose";

export interface Product {
  _id?: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: "medicamentos" | "suplementos" | "cuidado-personal" | "dispositivos-medicos";
  brand: string;
  stock: number;
  image: string;
  requiresPrescription: boolean;
  createdAt: Date;
}

const ProductSchema = new Schema<Product>({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ["medicamentos", "suplementos", "cuidado-personal", "dispositivos-medicos"]
  },
  brand: { type: String, required: true },
  stock: { type: Number, required: true, default: 0 },
  image: { type: String, required: true },
  requiresPrescription: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Product = models.Product || model<Product>("Product", ProductSchema);
export default Product;