import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
};

const IntroductorySecton: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="mb-12 mx-auto max-w-4xl">
      <h2 className="text-4xl mb-2">{title}</h2>
      <hr className="mb-2" />
      {children}
    </div>
  );
};

export default IntroductorySecton;
