import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, address, userId } = body;

    if (!name || !email || !phone || !address) {
      return Response.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Upsert by email so ek hi user ke multiple profile rows na banen
    const profile = await prisma.profile.upsert({
      where: { email },
      update: {
        name,
        phone,
        address,
        userId: userId ?? undefined,
      },
      create: {
        name,
        email,
        phone,
        address,
        userId: userId ?? undefined,
      },
    });

    return Response.json({ success: true, profile });
  } catch (error) {
    console.error("Profile save error:", error);
    return Response.json(
      { success: false, error: "Failed to save profile" },
      { status: 500 }
    );
  }
}
