import Footer from "@/components/footer";
import MainNav from "@/components/main-nav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav/>
      <main className="grow flex items-center justify-center">
        <h1>Welcome</h1>
      </main>
      <Footer/>
    </div>
  );
}
