import { ProductCard } from "./ProductCard";
import cakekeychain from "@/assets/kue.png";
import fishkeychain from "@/assets/ikan.png";
import tongkolkeychain from "@/assets/tongkol.png";
import nilakeychain from "@/assets/nila.png";
import selarkeychain from "@/assets/selar.png";
import kembungkeychain from "@/assets/kembung.png";
import setAkey from "@/assets/setA.png";
import setBkey from "@/assets/setB.png";
import setCkey from "@/assets/setC.png";
import setDkey from "@/assets/setD.png";
import setEkey from "@/assets/setE.png";
import setFkey from "@/assets/setF.png";
import setGkey from "@/assets/setG.png";
import setHkey from "@/assets/setH.png";
import setIkey from "@/assets/setI.png";
import { set } from "date-fns";

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

  {
    title: "Set A Keychain",
    price: "Rp. 10.000",
    originalPrice: "Rp. 12.000",
    image: setAkey,
    rating: 0,
    reviews: 0,
    discount: "17%",

    shopeeUrl: "https://shopee.co.id/Sushi-Set-Keychain-Lucu-Handmade-i.142766081.41373050333", // Replace with actual Shopee URL
  },

  {
    title: "Set B Keychain",
    price: "Rp. 10.000",
    originalPrice: "Rp. 12.000",
    image: setBkey,
    rating: 0,
    reviews: 0,
    discount: "17%",

    shopeeUrl: "https://shopee.co.id/Sushi-Set-Keychain-Lucu-Handmade-i.142766081.41373050333", // Replace with actual Shopee URL
  },

  {
    title: "Set C Keychain",
    price: "Rp. 10.000",
    originalPrice: "Rp. 12.000",
    image: setCkey,
    rating: 0,
    reviews: 0,
    discount: "17%",

    shopeeUrl: "https://shopee.co.id/Sushi-Set-Keychain-Lucu-Handmade-i.142766081.41373050333", // Replace with actual Shopee URL
  },

  {
    title: "Set D Keychain",
    price: "Rp. 10.000",
    originalPrice: "Rp. 12.000",
    image: setDkey,
    rating: 0,
    reviews: 0,
    discount: "17%",

    shopeeUrl: "https://shopee.co.id/Sushi-Set-Keychain-Lucu-Handmade-i.142766081.41373050333", // Replace with actual Shopee URL
  },

  {
    title: "Set E Keychain",
    price: "Rp. 10.000",
    originalPrice: "Rp. 12.000",
    image:  setEkey,
    rating: 0,
    reviews: 0,
    discount: "17%",

    shopeeUrl: "https://shopee.co.id/Sushi-Set-Keychain-Lucu-Handmade-i.142766081.41373050333", // Replace with actual Shopee URL
  },

  {
    title: "Set F Keychain",
    price: "Rp. 10.000",
    originalPrice: "Rp. 12.000",
    image: setFkey,
    rating: 0,
    reviews: 0,
    discount: "17%",

    shopeeUrl: "https://shopee.co.id/Sushi-Set-Keychain-Lucu-Handmade-i.142766081.41373050333", // Replace with actual Shopee URL
  },

  {
    title: "Set G Keychain",
    price: "Rp. 10.000",
    originalPrice: "Rp. 12.000",
    image: setGkey,
    rating: 0,
    reviews: 0,
    discount: "17%",

    shopeeUrl: "https://shopee.co.id/Sushi-Set-Keychain-Lucu-Handmade-i.142766081.41373050333", // Replace with actual Shopee URL
  },

  {
    title: "Set H Keychain",
    price: "Rp. 10.000",
    originalPrice: "Rp. 12.000",
    image: setHkey,
    rating: 0,
    reviews: 0,
    discount: "17%",

    shopeeUrl: "https://shopee.co.id/Sushi-Set-Keychain-Lucu-Handmade-i.142766081.41373050333", // Replace with actual Shopee URL
  },

  {
    title: "Set I Keychain",
    price: "Rp. 10.000",
    originalPrice: "Rp. 12.000",
    image: setIkey,
    rating: 0,
    reviews: 0,
    discount: "17%",

    shopeeUrl: "https://shopee.co.id/Sushi-Set-Keychain-Lucu-Handmade-i.142766081.41373050333", // Replace with actual Shopee URL
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