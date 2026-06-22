import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, amount, status } = body;

  const { data, error } = await supabase
    .from("leads")
    .insert([{ name, amount, status }])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ success: true, lead: data });
}
