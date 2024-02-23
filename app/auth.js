import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/util";
import { User } from "./lib/model";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("err");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.username,
      user.username
    );
    if (credentials.password === !user.password) {
      console.log("Incorrect password");
    }
    console.log("Correct password");
    // if (isPasswordCorrect) console.log("The password is correct");
    // if (!isPasswordCorrect) throw new Error("error occured");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);

          if (user) {
            console.log("user found");
          } else {
            console.log("No user found");
          }
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});

// const authResponse = await fetch("/users/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(credentials),
// });

// if (!authResponse.ok) {
//   return null;
// }

// const user = await authResponse.json();

// return user;
