import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github"; // or Google, or Email

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // You can optionally limit by email
      if (session?.user?.email === "youremail@example.com") {
        session.user.role = "admin";
      } else {
        session.user.role = "guest";
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
