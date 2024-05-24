import Logo from "@/components/Logo";

const Navigation = () => {
  return (
    <div className="flex flex-col p-2 space-y-4">
      <Logo />
      <nav className="flex-1">
        <ul>
          <li>Dashboard</li>
          <li>Products</li>
          <li>Orders</li>
          <li>Users</li>
        </ul>
      </nav>
      <span className="bg-black-primary text-white-primary text-2xl">
        Logout
      </span>
    </div>
  );
};

export default Navigation;
