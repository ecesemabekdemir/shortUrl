import Result from "@/component/statistics";
import ShortUrlForm from "./form";
import Content from "@/component/content";

export default function Home() {
  return (
    <div>
      <Content />
      <ShortUrlForm />
      <Result />
    </div>
  );
}
