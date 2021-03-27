import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { NavigationBar } from "./navbar/navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};
