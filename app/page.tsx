import DiscoverUni from "@/components/DiscoverUni";
import Carousel from "@/components/shared/Carousel";

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <Carousel />
      <DiscoverUni />
    </div>
  );
}
