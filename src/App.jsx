import { Outlet } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 font-roboto m-0 p-0 box-border antialiased min-h-screen flex flex-col relative overflow-x-hidden">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <a
        href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-green-50 p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-30"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}

export default App;
