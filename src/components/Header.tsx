import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-muted">
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>19982</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@hesas.eg</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm">العربية</Button>
            <span className="text-muted-foreground">|</span>
            <Button variant="ghost" size="sm">English</Button>
          </div>
        </div>
        
        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">H</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">هيساس</h1>
                <p className="text-sm text-muted-foreground">للخدمات الصحية</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">الرئيسية</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">عن هيساس</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">خدماتنا</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">تواصل معنا</a>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="hero" size="lg">
              احجز موعدك
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;