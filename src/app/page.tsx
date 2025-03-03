import About from "@/components/About";
import Choose from "@/components/Choose";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import NavigationBar from "@/components/Navbar";
import WhyChoose from "@/components/WhyChoose";


export default function Home() {
  return (
    <section>
      <div className="">
      <NavigationBar/>
        <Header/>
        <Introduction/>
        <About/>
        <WhyChoose/>
        <Choose/>
      </div>
    </section>
  );
}
