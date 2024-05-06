type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="flex flex-col my-8 gap-8">{children}</div>;
};

export default Container;
