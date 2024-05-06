type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="flex flex-col my-10 gap-10">{children}</div>;
};

export default Container;
