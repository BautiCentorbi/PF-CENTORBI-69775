import { NextResponse } from "next/server";
import { collection } from "firebase/firestore";
import { db } from "@/app/config/firebaseConfig";

export async function GET(request) {
    const productsRef = collection(db, 'productos')
    return NextResponse.json(productsRef)
}