import Footer from "@/components/footer";
import HeroBanner from "@/components/landing/hero-banner";
import MainNav from "@/components/main-nav";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <HeroBanner />
      </main>
      <Footer />
    </div>
  );
}
