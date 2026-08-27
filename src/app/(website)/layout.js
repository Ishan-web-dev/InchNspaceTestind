import Footer from "@/components/Footer";
import TopNavBar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";


export default function RootLayout({ children }) {
  return (
    <div className="min-h-full flex flex-col">
      <TopNavBar />
      <main>
        <PageLoader>
          {children}
        </PageLoader>
        <FloatingWhatsApp />
        </main>
      <Footer />
    </div>
  );
}
