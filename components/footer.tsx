import Container from "./ui/container";

const Footer = () => {
  return (
    // wczesniej bylo black-primary i white
    <footer className="bg-black-primary text-white border-t">
      <Container>
        <div className="p-10">
          <h2>Best Sneakers Shop</h2>
          <p>Store with the best sneakers in the world</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
