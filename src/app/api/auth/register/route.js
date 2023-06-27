import connect from "@/utils/db";
import { NextResponse } from "next/server";
import User from "@/model/User";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { userFullName, userEmail, userPass } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(userPass, 10);

  const newUser = new User({
    userFullName,
    userEmail,
    userPass: hashedPassword,
  });

  console.log(newUser);

  try {
    console.log(userFullName);
    console.log(userEmail);
    console.log(userPass);

    return new NextResponse("User has been created", {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
