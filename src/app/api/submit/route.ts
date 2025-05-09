import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    console.log("Received assessment data:", formData)

    return NextResponse.json({
      success: true,
      message: "Assessment data received successfully",
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error processing assessment:", error)
    return NextResponse.json({ success: false, message: "Failed to process assessment" }, { status: 500 })
  }
}
