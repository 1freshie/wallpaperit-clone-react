import Header from "../header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <main className="h-full w-full">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
