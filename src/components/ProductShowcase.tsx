import { ProductCard } from "./ProductCard";
import cakekeychain from "@/assets/kue.png";
import fishkeychain from "@/assets/ikan.png";
import tongkolkeychain from "@/assets/tongkol.png";
import nilakeychain from "@/assets/nila.png";
import selarkeychain from "@/assets/selar.png";
import kembungkeychain from "@/assets/kembung.png";

const products = [
  {
    title: "Cake Keychain",
    price: "Rp. 18.000",
    originalPrice: "Rp. 20.000",
    image: cakekeychain,
    rating: 0,
    reviews: 0,
    discount: "10%",
    shopeeUrl: "https://shopee.co.id/Keychain-aesthetic-lucu-handmade-i.142766081.40522654150", // Replace with actual Shopee URL
  },
  {
    title: "Fish Keychain",
    price: "Rp. 18.000",
    originalPrice: "Rp. 20.000",
    image: fishkeychain,
    rating: 0,
    reviews: 0,
    discount: "10%",

    shopeeUrl: "https://shopee.co.id/Keychain-aesthetic-lucu-handmade-i.142766081.40522654150", // Replace with actual Shopee URL
  },
  
  {
    title: "Tongkol Keychain",
    price: "Rp. 21.000",
    originalPrice: "Rp. 25.000",
    image: tongkolkeychain,
    rating: 0,
    reviews: 0,
    discount: "16%",

    shopeeUrl: "https://shopee.co.id/Keychain-Fish-Ikan-Lucu-Handmade-i.142766081.44222649044", // Replace with actual Shopee URL
  },

  {
    title: "Nila Keychain",
    price: "Rp. 21.000",
    originalPrice: "Rp. 25.000",
    image: nilakeychain,
    rating: 0,
    reviews: 0,
    discount: "10%",

    shopeeUrl: "https://shopee.co.id/Keychain-Fish-Ikan-Lucu-Handmade-i.142766081.44222649044", // Replace with actual Shopee URL
  },

  {
    title: "Selar Keychain",
    price: "Rp. 18.000",
    originalPrice: "Rp. 20.000",
    image: selarkeychain,
    rating: 0,
    reviews: 0,
    discount: "16%",

    shopeeUrl: "https://shopee.co.id/Keychain-Fish-Ikan-Lucu-Handmade-i.142766081.44222649044", // Replace with actual Shopee URL
  },

  {
    title: "Kembung Keychain",
    price: "Rp. 21.000",
    originalPrice: "Rp. 25.000",
    image: kembungkeychain,
    rating: 0,
    reviews: 0,
    discount: "16%",

    shopeeUrl: "https://shopee.co.id/Keychain-Fish-Ikan-Lucu-Handmade-i.142766081.44222649044", // Replace with actual Shopee URL
  },
];

export const ProductShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our best-selling items available on Shopee with great discounts and fast shipping
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
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