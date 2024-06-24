const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-10">
      <aside className="col-span-1 border-r">filter</aside>
      <main className="col-span-9 ">{children}</main>
    </div>
  );
};

export default Layout;
