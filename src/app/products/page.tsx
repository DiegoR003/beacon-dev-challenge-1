import connectDB from "../../lib/db";
import Product from "../models/products";
import Link from "next/link";

// En Next.js 15, los searchParams son una Promesa
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const params = await searchParams;
  const query = params?.q || "";
  const categoryFilter = params?.category || "";

  await connectDB();

  // Construimos la consulta para MongoDB
  const dbQuery: any = {};
  if (query) {
    dbQuery.name = { $regex: query, $options: "i" };
  }
  if (categoryFilter) {
    dbQuery.category = categoryFilter;
  }

  const products = await Product.find(dbQuery).sort({ createdAt: -1 });

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Catálogo de Salud</h1>

      {/* REQUERIMIENTOS 4 y 5: BUSCADOR Y FILTROS */}
      <form method="GET" className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          name="q"
          defaultValue={query}
          placeholder="Buscar por nombre..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 outline-none text-black"
        />
        <select 
          name="category" 
          defaultValue={categoryFilter}
          className="border border-gray-300 rounded-lg px-4 py-2.5 bg-white text-black outline-none"
        >
          <option value="">Todas las categorías</option>
          <option value="medicamentos">Medicamentos</option>
          <option value="suplementos">Suplementos</option>
          <option value="cuidado-personal">Cuidado Personal</option>
          <option value="dispositivos-medicos">Dispositivos Médicos</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 font-semibold">
          Filtrar
        </button>
        {(query || categoryFilter) && (
           <Link href="/products" className="px-4 py-2.5 text-gray-500 hover:text-gray-900 flex items-center justify-center">
             Limpiar
           </Link>
        )}
      </form>

      {/* REQUERIMIENTO 2: LISTADO RESPONSIVO */}
      {products.length === 0 ? (
        <p className="text-center py-12 text-gray-500">No se encontraron productos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link href={`/products/${product.slug}`} key={product._id.toString()}>
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                <div className="aspect-[4/3] bg-gray-50 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[10px] text-blue-600 font-black uppercase tracking-widest mb-2">
                    {product.category.replace("-", " ")}
                  </span>
                  <h2 className="font-bold text-gray-900 text-lg mb-1 line-clamp-2">
                    {product.name}
                  </h2>
                  <div className="mt-auto flex justify-between items-end pt-4">
                    <span className="text-2xl font-black text-gray-900">
                        ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}