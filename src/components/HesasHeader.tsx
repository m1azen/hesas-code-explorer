import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HesasHeader = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ح</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">حصص مصر</h1>
              <div className="flex items-center gap-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Coat_of_arms_of_Egypt_%28Official%29.svg/150px-Coat_of_arms_of_Egypt_%28Official%29.svg.png" 
                  alt="شعار الجمهورية" 
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">الرئيسية</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">عن حصص مصر</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">باقات حصص مصر</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">طرق الدفع</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">طرق الانضمام</a>
          </div>
          
          {/* Login Button */}
          <Button 
            variant="purple" 
            size="lg"
            className="rounded-full border-2 border-accent/50"
          >
            تسجيل دخول
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default HesasHeader;