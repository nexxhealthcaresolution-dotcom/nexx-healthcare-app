import { NextRequest, NextResponse } from "next/server";
import { getPool, ensureSubmissionsTable } from "../../lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, facility, service, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    await ensureSubmissionsTable();
    const db = getPool();

    await db.query(
      `INSERT INTO submissions (name, phone, email, facility, service, message)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [name, phone, email || null, facility || null, service || null, message || null]
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
