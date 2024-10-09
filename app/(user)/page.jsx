import AdvancedStatistics from "@/component/statistics";
import ShortUrlForm from "./form";
import Content from "@/component/content";

export default function Home() {
  return (
    <div>
      <Content />
      <h1>Linkini kısalt hayatı uzat</h1>
      <ShortUrlForm />
      <AdvancedStatistics />
    </div>
  );
}
