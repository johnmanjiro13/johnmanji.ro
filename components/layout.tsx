import { Footer } from "./footer";
import { Meta } from "./meta";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Meta />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
