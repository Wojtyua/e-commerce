import Footer from "@/app/(store)/_components/Footer";
import Navbar from "@/app/(store)/_components/navbar/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col flex-1 min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
