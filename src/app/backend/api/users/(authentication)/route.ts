export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { middleware } from "@/middleware";

import {
  deleteToken,
  generateToken,
  hashPassword,
  matchedPassword,
  verifyToken,
} from "@/app/backend/utils/globalFunctions";

const db = new PrismaClient();

interface CustomNextRequest extends NextRequest {
  loggedInUserId?: string;
}

export async function POST(req: CustomNextRequest, res: NextResponse) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");
  const body = await req.json();

  if (query === "register") {
    const { name, email, organisation, password, phoneNumber } = body;
    const dataToInsert = await db.user.create({
      data: {
        name,
        email,
        organisation,
        password: await hashPassword(password),
        phoneNumber,
      },
    });
    console.log("data to insert : ", dataToInsert);
    return new Response(
      JSON.stringify({ message: "user created", user: dataToInsert })
    );
  }

  if (query === "login") {
    const { email, password } = body;
    const userWithEmail = await db.user.findUnique({ where: { email } });
    if (
      userWithEmail &&
      (await matchedPassword(password, userWithEmail.password))
    ) {
      const jwtToken = await generateToken(res, userWithEmail.id);
      return new Response(
        JSON.stringify({
          message: "login successfull",
          userWithEmail,
        })
      );
    } else {
      return new Response(JSON.stringify({ message: "login unsuccessfull" }));
    }
  }

  if (query === "logout") {
    await deleteToken();
    return new Response(
      JSON.stringify({ message: "you are successfully logged OUT.." })
    );
  }
}

export async function GET(req: CustomNextRequest, res: NextResponse) {
  // await middleware(req, res); // Invoking the middleware function here
  return new Response(JSON.stringify({ user: req.loggedInUserId }));
}
