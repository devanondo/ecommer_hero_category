import Categories from "./_components/categories/categories";
import HeroSlider from "./_components/hero-slider";
export default function Home() {
  return (
    <div className="relative">
      <HeroSlider />
      <Categories />
    </div>
  );
}
