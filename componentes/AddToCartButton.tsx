"use client"; 

import { useState } from "react";

// Definimos qué datos 
type CartProduct = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

export default function AddToCartButton({ product }: { product: CartProduct }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    
    const existingCart = JSON.parse(localStorage.getItem('buscaMed_cart') || '[]');
    
    
    existingCart.push(product);
    
    
    localStorage.setItem('buscaMed_cart', JSON.stringify(existingCart));

    
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // Vuelve a la normalidad en 2 segundos
  };

  // Si no hay stock, mostramos el botón gris
  if (product.stock === 0) {
    return (
      <button disabled className="w-full py-4 rounded-xl font-bold text-lg bg-gray-200 text-gray-500 cursor-not-allowed">
        Agotado Temporalmente
      </button>
    );
  }

  // Si hay stock, mostramos el botón interactivo
  return (
    <button 
      onClick={handleAddToCart}
      className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform active:scale-95 ${
        added 
          ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-200' 
          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200'
      }`}
    >
      {added ? '¡Agregado al Carrito! ✅' : 'Añadir al Carrito 🛒'}
    </button>
  );
}