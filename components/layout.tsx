import { Footer } from "./footer";
import { Meta } from "./meta";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Meta />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
