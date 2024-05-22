import Footer from "@/app/(store)/_components/Footer";
import Navbar from "@/app/(store)/_components/navbar/Navbar";
import ReactQueryProvider from "@/providers/reactQueryProvider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <ReactQueryProvider>{children}</ReactQueryProvider>
      <Footer />
    </>
  );
}
