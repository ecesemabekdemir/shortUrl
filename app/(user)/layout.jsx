import Header from "@/component/header";

export default function UserLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
