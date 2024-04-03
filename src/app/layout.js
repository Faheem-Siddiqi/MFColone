import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar"; 
import NavbarGuest from "@/components/layout/NavbarGuest"; 
import ScrollTop from "../components/layout/ScrollTop";
import Chat from "../components/layout/Chat";

export const metadata = {
  title: "Mayfair",
  description: "Office Space Provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head /> {/* Add an empty head element for SEO and potential dynamic content */}
      <body>

       {typeof window !== "undefined" && window.location.pathname === "/" && (
  <NavbarGuest/>
    )}

{/*     
      {typeof window !== "undefined" && (
          <>
            {window.location.pathname === "/" ? (
              <Navbar />
            ) : (
              <NavbarGuest />
            )}
          </>
        )} */}
  {/* {typeof window !== "undefined" && window.location.pathname !== "/" && (<NavbarGuest/>)}
  {typeof window !== "undefined" && window.location.pathname === "/" && (<Nabar/>)} */}
  <Navbar/>
        {children}
        <Chat />
        <ScrollTop />
        <Footer />
      </body>
    </html>
  );
}
