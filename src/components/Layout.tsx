import Footer from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: any) => {
  return (
    <div className="min-h-screen bg-[#ece8ed]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
