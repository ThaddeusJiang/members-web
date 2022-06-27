import NavBar from "../NavBar/NavBar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main className="mt-10 mb-10">{children}</main>
    </div>
  );
};

export default MainLayout;
