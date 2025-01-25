import connectDB from "@/config/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req: NextRequest) => {
    const { email, password, username } = await req.json();

    await connectDB();

    // Check if user exists
    const user = await User.findOne({ email });
    if (user) {
        return NextResponse.json({ message: "User Already Exist" }, { status: 400 });
    }

    // Check password
    // const isValid = await bcrypt.compare(password, user.password);
    // if(!isValid) {
    //     return NextResponse.json({ message: "Invalid password" }, { status: 401 });
    // }

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword);

    await User.create({ 
        email, 
        password: hashedPassword, 
        username 
    });

    return NextResponse.json({ message: "Signup successful" });
}