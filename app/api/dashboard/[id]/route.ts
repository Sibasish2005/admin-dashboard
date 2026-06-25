import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import users from "@/models/users";

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    await connectDB();

    const { id } = await params;
    await users.findOneAndDelete({ id });

    return NextResponse.json({ message: "User Deleted Successfully" }, { status: 200 })
}

export async function PUT(req: Request,{params}:{params:Promise<{id:string}>}) {
    try {
        await connectDB();

        const {id} = await params;
        const body = await req.json();
        const user = await users.findOneAndUpdate({ id }, body, { new: true });
        return NextResponse.json(
             {
                "message": "Update successful",
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