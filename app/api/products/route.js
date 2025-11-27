// nextcart/app/api/products/route.js

import connectDB from "@/lib/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // REQUIRED to disable route caching

// GET ALL PRODUCTS
export async function GET() {
  try {
    await connectDB();
    const products = await Product.find().sort({ createdAt: -1 });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// CREATE NEW PRODUCT
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const newProduct = await Product.create(body);

    return NextResponse.json({ success: true, product: newProduct });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}