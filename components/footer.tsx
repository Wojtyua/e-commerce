import Container from "./ui/container";

const Footer = () => {
  return (
    // wczesniej bylo black-primary i white
    <footer className="bg-black-primary text-white border-t">
      <div className="mx-auto py-10 px-14 space-y-4">
        <h2>Best Sneakers Shop</h2>
        <p>Store with the best sneakers in the world</p>
      </div>
    </footer>
  );
};

export default Footer;
