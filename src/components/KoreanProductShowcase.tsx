import { ProductCard } from "./ProductCard";
import jepitrambut from "@/assets/jepit.png";
import keychainaesthetic from "@/assets/keychain.png";
import fishkeychain from "@/assets/fish.png";// Import the image for Sharing Seaason Greatings Newjeans 2025 Minji

const koreanProducts = [
  {
    title: "Jepitan rambut handmade lucu custom",
    price: "Rp. 5.000",
    originalPrice: "Rp. 7.000",
    image: jepitrambut,
    rating: 0,
    reviews: 0,
    discount: "29%",
    shopeeUrl: "https://shopee.co.id/Jepitan-rambut-handmade-lucu-custom-i.142766081.29692513879", // Replace with your actual Shopee URL
  },
  {
    title: "Keychain aesthetic lucu handmade",
    price: "Rp. 18.000",
    originalPrice: "Rp. 20.000",
    image: keychainaesthetic,
    rating: 0,
    reviews: 0,
    discount: "10%",
    shopeeUrl: "https://shopee.co.id/Keychain-aesthetic-lucu-handmade-i.142766081.40522654150", // Replace with your actual Shopee URL
  },
  {
    title: "Keychain Fish Ikan Lucu Handmade",
    price: "Rp. 21.000",
    originalPrice: "Rp. 25.000",
    image: fishkeychain,
    rating: 0,
    reviews: 0,
    discount: "16%",
    shopeeUrl: "https://shopee.co.id/Keychain-Fish-Ikan-Lucu-Handmade-i.142766081.44222649044", // Replace with your actual Shopee URL
  },
];

export const KoreanProductShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Cute Things
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kamu lagi cari barang-barang lucu dan unik? Yuk, cek koleksi produk kami yang keren-keren banget! Mulai dari gantungan kunci, jepitan rambut, sampai aksesoris lainnya, semua ada di sini dengan harga terjangkau dan kualitas terbaik. Jangan sampai ketinggalan, buruan pilih produk favoritmu dan tambahkan ke keranjang belanja sekarang juga!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {koreanProducts.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};