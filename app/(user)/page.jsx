import AdvancedStatistics from "@/component/statistics";
import ShortUrlForm from "./form";

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
