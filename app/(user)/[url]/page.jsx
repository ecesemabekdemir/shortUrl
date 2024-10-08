import { defaultHeader } from "@/utils/header";

export default async function DynamicUrlPage({ params }) {
  console.log(params);

  const response = await fetch(
    `https://sdtdtloxbyxpcjdnelqq.supabase.co/rest/v1/urls?short_url=eq.${params.url}&select=*`,
    {
      method: "GET",
      headers: defaultHeader,
    }
  );
  const data = await response.json();
  console.log(data);

  return (
    <>
      <h1>Dynamic URL page </h1>
    </>
  );
}
