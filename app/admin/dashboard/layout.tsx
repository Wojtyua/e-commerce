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

      <div className=" py-2 px-1 bg-primary">
        <div className="bg-white-primary h-full w-full rounded-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
