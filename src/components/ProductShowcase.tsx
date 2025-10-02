import { ProductCard } from "./ProductCard";
import cakekeychain from "@/assets/kue.png";
import fishkeychain from "@/assets/ikan.png";

const products = [
  {
    title: "cake Keychain",
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