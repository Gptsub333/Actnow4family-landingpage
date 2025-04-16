import Sidebar from './sidebar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8] text-[#374151]">
      <Sidebar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
