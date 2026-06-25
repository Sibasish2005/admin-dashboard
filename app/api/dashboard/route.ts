import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import users from "@/models/users";

export async function GET() {
    try {
        await connectDB();
        const user = await users.find()
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json(
            { error: "failed to fetch data" },
            { status: 500 },
        )
    }
}
export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();
        const user = await users.create({
            id: body.id,
            name: body.name,
            email: body.email,
            role: body.role
        })
        return NextResponse.json(
             {
                "message": "post successful",
                 "body":body
            },
            { status: 200 },
           )
    } catch (error) {
        return NextResponse.json(
            { error: "failed to fetch data" },
            { status: 500 },
        )
    }
}