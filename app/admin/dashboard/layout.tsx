import { Metadata } from "next";
import Navigation from "./_components/Navigation";

export const metadata: Metadata = {
  title: "SneakPeak | Admin Dashboard",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[12rem_1fr] h-screen">
      <Navigation />
      <div>{children}</div>
    </div>
  );
}
