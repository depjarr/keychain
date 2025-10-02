import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  discount?: string;
  shopeeUrl: string;
}

export const ProductCard = ({
  title,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  discount,
  shopeeUrl,
}: ProductCardProps) => {
  const handleProductClick = () => {
    window.open(shopeeUrl, '_blank');
  };

  return (
    <Card 
      className="group overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer transform hover:scale-105"
      onClick={handleProductClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {discount && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            -{discount}
          </Badge>
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <ExternalLink className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">
            ({reviews})
          </span>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-primary">{price}</span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>
        
        <Button 
          variant="shopee" 
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            handleProductClick();
          }}
        >
          View on Shopee
        </Button>
      </div>
    </Card>
  );
};