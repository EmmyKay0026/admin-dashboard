export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedin = auth?.user || true;

      const isOnDashboard = request.nextUrl.pathname.startsWith("/");

      if (isOnDashboard) {
        if (isLoggedin) return true;
        return false;
      } else if (isLoggedin) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
