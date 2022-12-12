type Props = {
  children: React.ReactNode;
};

export const Flex: React.FC<Props> = ({ children }) => {
  return <div className="flex">{children}</div>;
};

export const FlexInitial: React.FC<Props> = ({ children }) => {
  return <div className="flex-initial">{children}</div>;
};
