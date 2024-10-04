"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Content from "@/component/content";
import AdvancedStatistics from "@/component/statistics";

export default function ShortUrl() {
  const [data, setData] = useState(null);
  const [products, setProducts] = useState([]);
  const [longUrl, setLongUrl] = useState(null);
  const router = useRouter();

  const findShortUrl = () => {
    insertData(longUrl, makeid(7));
  };

  const copyToClipboard = () => {
    if (data?.short_url) {
      navigator.clipboard.writeText(data.short_url).then(() => {
        alert("Short url copied");
      });
    }
  };

  // const goToLink = () => {
  //   console.log("data?.long_url :>> ", data?.long_url);
  //   router.push(`/${data?.long_url}`);
  // };

  const fetchData = async () => {
    const apiKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtYmtrZWF6bWJrY3Z6aWFxZGRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2MDk4MzMsImV4cCI6MjA0MzE4NTgzM30.WQsPcIHb5vvjGPKGRLPvIKwa38jJii9DyY0_ZaDilIQ";
    const url = "https://lmbkkeazmbkcvziaqdde.supabase.co/rest/v1/url?select=*";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        apiKey: apiKey,
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const responseData = await response.json();

    if (responseData) {
      const newData = responseData.find((x) => x.long_url === longUrl);
      setData(newData);
    }
    return setProducts(responseData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function makeid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const insertData = async (long, short) => {
    const url = "https://lmbkkeazmbkcvziaqdde.supabase.co/rest/v1/url";
    const apiKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtYmtrZWF6bWJrY3Z6aWFxZGRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2MDk4MzMsImV4cCI6MjA0MzE4NTgzM30.WQsPcIHb5vvjGPKGRLPvIKwa38jJii9DyY0_ZaDilIQ";

    const payload = {
      long_url: long,
      short_url: short,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("response :>> ", response);

    if (response?.ok) {
      await fetchData();

      console.log("long :>> ", long);
    }

    return alert(
      JSON.stringify(response?.ok)
        ? `${payload.long_url} başarıyla ${payload.short_url} kısaltıma döndürüldü ve database e eklendi.`
        : "Bir hata oluştu"
    );
  };

  return (
    <>
      <Content />
      <div className="formContainer">
        <div className="form">
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <button onClick={() => findShortUrl()}>Shorten It!</button>
        </div>
        <div className="shortUrl">
          <p>{data?.short_url}</p>
          <div className="buttons">
            <button onClick={copyToClipboard}>Copied</button>
            <button onClick={() => goToLink()}>Go To Url</button>
          </div>
        </div>
        <AdvancedStatistics />
      </div>
    </>
  );
}
