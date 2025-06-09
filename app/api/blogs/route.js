import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    await dbConnect();

    const blogs = await Blog.find().sort({ createdAt: -1 });
    return Response.json(blogs);
  } catch (err) {
    return Response.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();

    const newPost = await Blog.create(body);
    return Response.json(newPost, { status: 201 });
  } catch (err) {
    return Response.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
