import About from "@/components/About";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import NavigationBar from "@/components/Navbar";


export default function Home() {
  return (
    <section>
      <div className="">
      <NavigationBar/>
        <Header/>
        <Introduction/>
        <About/>
      </div>
    </section>
  );
}
