import { KoreanHeroSection } from "@/components/HeroSection";
import { KoreanProductShowcase } from "@/components/KoreanProductShowcase";
import { ProductShowcase } from "@/components/ProductShowcase"; // ✅ tambahkan ini

const featuredKoreanProduct = {
  title: "Mystery Fish Blind Bag Phonechain",
  price: "Rp.10.000",
  originalPrice: "Rp.12.000",
  rating: 0,
  reviews: 0,
  discount: "17%",
  shopeeUrl: "https://shopee.co.id/Mystery-Fish-Blind-bag-Phonechain-i.142766081.42372663897",
  description:
    "Kamu suka kejutan? Coba deh Mystery Fish Blind Bag Phonechain ini! Gantungan kunci lucu berbentuk ikan yang datang dalam kemasan misterius. Setiap blind bag berisi satu dari berbagai macam desain ikan yang menggemaskan, jadi kamu nggak pernah tahu ikan apa yang akan kamu dapatkan! Cocok banget buat koleksi atau dijadikan hadiah spesial untuk teman-temanmu. Yuk, buruan beli dan rasakan keseruan membuka blind bag-nya!",
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <KoreanHeroSection featuredProduct={featuredKoreanProduct} />
      <KoreanProductShowcase />
      <ProductShowcase /> {/* ✅ tampilkan produk keychain */}
    </div>
  );
};

export default Index;
