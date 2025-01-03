import NextAuth from "next-auth"


import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  pages: {
    signIn: '/auth/signin', // Optional: Custom sign-in page URL
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
     
      if (url === baseUrl) {
        return `${baseUrl}/app`;  // Redirect to /app after sign-in
      }
      return url; 
    },
  },
})

