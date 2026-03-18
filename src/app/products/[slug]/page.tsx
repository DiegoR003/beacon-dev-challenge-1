import connectDB from "../../../lib/db";
import Product from "../../models/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

import AddToCartButton from "../../../../componentes/AddToCartButton";

type Props = {
  params: Promise<{ slug: string }>;
};

// ---  generateMetadata para SEO ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  await connectDB();
  const product = await Product.findOne({ slug });

  if (!product) {
    return { title: "Producto no encontrado | BuscaMed" };
  }

  return {
    title: `${product.name} | Catálogo de Salud`,
    description: product.description,
  };
}

// --- PÁGINA PRINCIPAL DEL PRODUCTO ---
export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;

  await connectDB();
  const product = await Product.findOne({ slug });

  if (!product) {
    notFound();
  }

  //  los datos simplificados para el componente del cliente
  const productData = {
    id: product._id.toString(),
    name: product.name,
    price: product.price,
    stock: product.stock
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <Link href="/products" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6">
        ← Volver al catálogo
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          <div className="bg-gray-50 p-8 flex items-center justify-center relative">
            {product.requiresPrescription && (
              <span className="absolute top-4 left-4 bg-red-100 text-red-700 text-sm font-bold px-3 py-1.5 rounded-md border border-red-200 shadow-sm z-10">
                ⚠️ Requiere Receta Médica
              </span>
            )}
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full max-w-md object-contain mix-blend-multiply"
            />
          </div>

          <div className="p-8 flex flex-col justify-center">
            <div className="mb-2 flex items-center gap-2">
              <span className="bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded">
                {product.category.replace("-", " ")}
              </span>
              <span className="text-gray-500 text-sm font-medium">
                Por {product.brand}
              </span>
            </div>

            <h1 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-end gap-4 mb-6">
              <span className="text-4xl font-black text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              <span className={`text-sm font-bold px-3 py-1.5 rounded-md mb-1 ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.stock > 0 ? `${product.stock} disponibles` : 'Agotado temporalmente'}
              </span>
            </div>

            <div className="border-t border-b border-gray-100 py-6 mb-6">
              <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                Descripción del Producto
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* EL COMPONENTE CLIENTE AQUÍ */}
            <AddToCartButton product={productData} />
            
          </div>
        </div>
      </div>
    </div>
  );
}