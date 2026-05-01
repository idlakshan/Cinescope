import Footer from "@/components/footer";
import FeaturedMovies from "@/components/landing/featured-movies";
import HeroBanner from "@/components/landing/hero-banner";
import MainNav from "@/components/main-nav";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <HeroBanner />
        <FeaturedMovies/>
      </main>
      <Footer />
    </div>
  );
}
