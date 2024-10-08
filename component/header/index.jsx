import { signOut } from "@/actions/auth";
import Nav from "../nav";

import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Header() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="./img/Shortly.svg" alt="" />
          <Nav />
        </div>
        {user ? (
          <>
            <span>Hello {user.email}</span>
            <form action={signOut}>
              <button>Sign Up</button>
            </form>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </>
  );
}
