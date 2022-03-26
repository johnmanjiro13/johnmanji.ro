type Props = {
  title: string;
};

const IntroductorySecton: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="mb-20 mx-auto max-w-4xl">
      <h2 className="text-4xl mb-2 ">{title}</h2>
      <hr className="mb-4 w-80" />
      {children}
    </div>
  );
};

export default IntroductorySecton;
