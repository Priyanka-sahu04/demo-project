// // src/components/CategoryProducts.jsx
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const CategoryProducts = () => {
//   const { categoryName } = useParams();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchCategoryProducts = async () => {
//       try {
//         const response = await fetch(
//           `https://fakestoreapi.com/products/category/${encodeURIComponent(categoryName)}`
//         );
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching category products:", error);
//       }
//     };

//     fetchCategoryProducts();
//   }, [categoryName]);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-6 capitalize text-center">
//         {categoryName.replace("-", " ")}
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-48 object-contain mb-4"
//             />
//             <h3 className="font-semibold mb-2">{product.title}</h3>
//             <p className="text-sm text-gray-600 mb-2">${product.price}</p>
//             <p className="text-xs text-gray-500">{product.category}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryProducts;










// CategoryProduct.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function CategoryProduct() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-6 capitalize">
          Showing products for: {categoryName.replace("-", " ")}
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading products...</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map(product => (
              <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{product.description.slice(0, 60)}...</p>
                <p className="mt-2 font-bold text-indigo-600">₹{Math.round(product.price*10)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
