import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";

// CORS middleware
function setCorsHeaders(res) {
  res.headers.set(
    "Access-Control-Allow-Origin",
    "https://clifforddonk.vercel.app"
  ); // Use specific origin in production
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
}

export async function OPTIONS() {
  const res = new Response(null, { status: 204 });
  setCorsHeaders(res);
  return res;
}

export async function GET() {
  try {
    await dbConnect();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    const res = new Response(JSON.stringify(blogs), { status: 200 });
    setCorsHeaders(res);
    return res;
  } catch (err) {
    const res = new Response(
      JSON.stringify({ error: "Failed to fetch blogs" }),
      { status: 500 }
    );
    setCorsHeaders(res);
    return res;
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const newPost = await Blog.create(body);
    const res = new Response(JSON.stringify(newPost), { status: 201 });
    setCorsHeaders(res);
    return res;
  } catch (err) {
    const res = new Response(
      JSON.stringify({ error: "Failed to create blog" }),
      { status: 500 }
    );
    setCorsHeaders(res);
    return res;
  }
}
