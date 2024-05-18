import DiscoverUni from "@/components/DiscoverUni";
import Footer from "@/components/Footer";
import TopPicks from "@/components/TopPicks";
import Carousel from "@/components/shared/Carousel";

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <Carousel />
      <DiscoverUni />
      <TopPicks />
      <Footer/>
    </div>
  );
}
