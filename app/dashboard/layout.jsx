import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Footer from "../ui/dashboard/footer/footer";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-left">
      <div className="flex-1 bg-techko-second position-sticky sh-[100vh] overflow-y-clip p-[20px]">
        <Sidebar />
      </div>
      <div className="flex-[4] p-[20px]">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
