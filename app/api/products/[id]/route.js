// nextcart/app/api/products/[id]/route.js
import connectDB from "@/lib/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// GET SINGLE PRODUCT
export async function GET(_, { params }) {
  try {
    await connectDB();
    const product = await Product.findById(params.id);

    if (!product)
      return NextResponse.json({ error: "Product not found" }, { status: 404 });

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE PRODUCT
export async function DELETE(_, { params }) {
  try {
    await connectDB();

    // ADD THESE LOGS ↓↓↓
    console.log("Connected DB:", mongoose.connection.name);
    console.log("Deleting ID:", params.id);

    const found = await Product.findById(params.id);
    console.log("Found before delete:", found);
    // END OF DEBUG LOGS ↑↑↑

    const deleted = await Product.findByIdAndDelete(params.id);

    if (!deleted) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, id: params.id });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
