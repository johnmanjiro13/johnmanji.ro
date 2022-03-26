type Props = {
  title: string;
};

const IntroductorySecton: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="mb-12 mx-auto max-w-5xl">
      <h2 className="text-4xl mb-2 text-center">{title}</h2>
      <hr className="mb-4" />
      {children}
    </div>
  );
};

export default IntroductorySecton;
