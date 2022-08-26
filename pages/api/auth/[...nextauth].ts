// import CredentialsProvider from "next-auth/providers/credentials";
// import type { NextAuthOptions } from "next-auth"
// import NextAuth from "next-auth"
// import { GraphQLClient } from "graphql-request";

// const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ?? "", {
//     headers: {
//         Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
//     },
// });

// export const authOptions: NextAuthOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",

//             credentials: {
//                 username: { label: "Username", type: "text", placeholder: "jsmith" },
//                 password: { label: "Password", type: "password" }
//             }, async authorize(credentials, req) {
//                 const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }

//                 if (user) {
//                     return user
//                 } else {
//                     return null

//                 }
//             }
//         )
//     ]
// }

// export default NextAuth(authOptions)

