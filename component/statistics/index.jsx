import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import CopyToClipboard from "./buton";
import "./result.css";

export default async function Result() {
  const supabase = createClient();
  const { data: userData, error: userError } = await supabase.auth.getUser(); // userları çağırdık
  const { data, error } = await supabase
    .from("urls")
    .select("*")
    .eq("user_id", userData.user?.id); // urlsin içindeki bütün kullanıcılara bak userid ile datanın içerisinde user  varsa id si karışılaştır.

  console.log(data);

  return (
    <>
      <div className="resultContainer">
        {data?.map((x, i) => (
          <div className="result" key={i}>
            <Link href={x.long_url} target="blank">
              http://short-url-taupe.vercel.app{x.short_url}
            </Link>
            <CopyToClipboard long_url={x.long_url} />
          </div>
        ))}
      </div>
    </>
  );
}
