// app/products/[id]/page.jsx

"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    const loadProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log("Error loading product:", error);
      }
    };

    loadProduct();
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10 text-gray-600">Loading product...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <button
        onClick={() => router.back()}
        className="mb-6 text-sm text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <div className="w-full h-80 relative mb-6">
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <h1 className="text-3xl font-bold mb-3">{product.name}</h1>

      <div className="text-gray-600 mb-4">
        <p className="text-lg font-semibold text-green-600">
          Price: ${product.price}
        </p>
        <p>Added: {new Date(product.createdAt).toLocaleDateString("en-GB")}</p>
        <p>Priority: {product.priority}</p>
      </div>

      <p className="text-gray-700 leading-relaxed">{product.description}</p>
    </div>
  );
}