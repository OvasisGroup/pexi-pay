import About from "@/components/About";
import Choose from "@/components/Choose";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import MainFooter from "@/components/MainFooter";
import NavigationBar from "@/components/Navbar";
import Subscription from "@/components/Subscription";
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
        <Subscription/>
        <MainFooter/>
        <Footer/>
      </div>
    </section>
  );
}
