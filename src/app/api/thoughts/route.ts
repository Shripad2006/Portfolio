import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


// Basic spam keywords blocklist
const SPAM_WORDS = [
  "spam", "bot", "crypto", "bitcoin", "ethereum", "casino", 
  "viagra", "cheap price", "make money", "free offer", 
  "sex", "porn", "hack", "buy now", "earn money"
];

function isSpam(text: string): boolean {
  const lower = text.toLowerCase();
  return SPAM_WORDS.some(word => lower.includes(word));
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("thoughts")
      .select("id, name, message, pinned, created_at, likes, dislikes, replies")
      .eq("approved", true)
      .order("pinned", { ascending: false })
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({
      success: true,
      data
    }, { status: 200 });
  } catch (error: any) {
    console.error("GET /api/thoughts error:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch thoughts from database."
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {

    // Parse payload
    const { name, message } = await request.json();
    const trimmedName = (name || "").trim();
    const trimmedMessage = (message || "").trim();

    // 2. Validation
    if (!trimmedName || !trimmedMessage) {
      return NextResponse.json({
        success: false,
        message: "Name and message are required."
      }, { status: 400 });
    }

    if (trimmedName.length > 50) {
      return NextResponse.json({
        success: false,
        message: "Name must not exceed 50 characters."
      }, { status: 400 });
    }

    if (trimmedMessage.length > 500) {
      return NextResponse.json({
        success: false,
        message: "Message must not exceed 500 characters."
      }, { status: 400 });
    }

    // 3. Spam Check
    if (isSpam(trimmedName) || isSpam(trimmedMessage)) {
      return NextResponse.json({
        success: false,
        message: "Your message was flagged as potential spam."
      }, { status: 400 });
    }


    // 5. Insert thought into Supabase as approved directly (using select() to return the row, which works because approved = true)
    const { data, error } = await supabase
      .from("thoughts")
      .insert([{
        name: trimmedName,
        message: trimmedMessage,
        approved: true,
        pinned: false
      }])
      .select();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: "Thought posted successfully!",
      data: data?.[0]
    }, { status: 201 });

  } catch (error: any) {
    console.error("POST /api/thoughts error:", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong while posting your thought."
    }, { status: 500 });
  }
}
