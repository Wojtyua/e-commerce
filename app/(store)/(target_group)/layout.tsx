const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12">
      <aside className="hidden md:block col-span-2 border-r">filter</aside>
      <main className="col-span-10 md:col-span-10 mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
