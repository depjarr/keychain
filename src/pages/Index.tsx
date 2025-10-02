import { KoreanHeroSection } from "@/components/HeroSection";
import { KoreanProductShowcase } from "@/components/KoreanProductShowcase";

const featuredKoreanProduct = {
  title: "Fresh Fish Keychain",
  price: "Rp.21.000",
  originalPrice: "Rp.25.000",
  rating: 5.0,
  reviews: 0,
  discount: "16%",
  shopeeUrl: "https://shopee.co.id/Keychain-Fish-Ikan-Lucu-Handmade-i.142766081.44222649044", // Replace with your actual Shopee URL
  description: "Kalian mau punya gantungan kunci lucu yang bisa nemenin kalian kemana-mana? Gantungan kunci Fresh Fish ini cocok banget buat kalian! Dengan desain yang imut dan warna-warna cerah, gantungan kunci ini bakal bikin hari-hari kalian lebih berwarna. Cocok untuk dipasang di tas, kunci rumah, atau bahkan sebagai aksesori tambahan di tempat favorit kalian. Yuk, tambahkan Fresh Fish Keychain ke koleksi kalian sekarang juga dan bawa keceriaan kemanapun kalian pergi!",
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <KoreanHeroSection featuredProduct={featuredKoreanProduct} />
      <KoreanProductShowcase />
    </div>
  );
};

export default Index;