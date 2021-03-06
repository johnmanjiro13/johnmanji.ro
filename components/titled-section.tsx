type Props = {
  title: string;
};

export const TitledSecton: React.FC<Props> = ({ children, title }) => {
  return (
    <section className="mb-20 mx-auto max-w-4xl">
      <h2 className="text-4xl mb-2 ">{title}</h2>
      <hr className="mb-4 w-80" />
      {children}
    </section>
  );
};
