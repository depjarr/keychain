import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingBag, Truck, Shield, Heart } from "lucide-react";
import kpopAlbumsHero from "@/assets/selar.png";

interface KoreanHeroSectionProps {
  featuredProduct: {
    title: string;
    price: string;
    originalPrice?: string;
    rating: number;
    reviews: number;
    discount?: string;
    shopeeUrl: string;
    description: string;
  };
}

export const KoreanHeroSection = ({ featuredProduct }: KoreanHeroSectionProps) => {
  const handleShopeeClick = () => {
    window.open(featuredProduct.shopeeUrl, '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                💜 Keychain
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                {featuredProduct.title}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {featuredProduct.description}
              </p>
            </div>
            
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(featuredProduct.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-white/30"
                  }`}
                />
              ))}
              <span className="text-white/90 ml-2 text-lg">
                ({featuredProduct.reviews} reviews)
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-white">
                {featuredProduct.price}
              </span>
              {featuredProduct.originalPrice && (
                <>
                  <span className="text-2xl text-white/60 line-through">
                    {featuredProduct.originalPrice}
                  </span>
                  {featuredProduct.discount && (
                    <Badge className="bg-red-500 text-white">
                      Save {featuredProduct.discount}
                    </Badge>
                  )}
                </>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={handleShopeeClick}
                className="flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Shop on Shopee
              </Button>
              <Button 
                variant="kpop" 
                size="xl" 
                className="flex items-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Add to Wishlist
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Truck className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white/90 text-sm">Fast Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white/90 text-sm">Authentic Items</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white/90 text-sm">Fan Favorites</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src={kpopAlbumsHero}
                alt={featuredProduct.title}
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-3xl scale-110 animate-pulse-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};