import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-primary-glow/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
              هيساس
              <span className="block text-3xl lg:text-4xl text-accent mt-2">
                للخدمات الصحية المتقدمة
              </span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-slide-up">
              نحن نؤمن بأن الصحة حق لكل مواطن مصري. نقدم خدمات صحية متميزة 
              وشاملة بأحدث التقنيات والمعايير العالمية لضمان حياة صحية أفضل للجميع.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                استكشف خدماتنا
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <Play className="ml-2 h-5 w-5" />
                شاهد الفيديو
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <h3 className="text-3xl font-bold text-accent">+50,000</h3>
                <p className="text-primary-foreground/80">مريض راضٍ</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-accent">+100</h3>
                <p className="text-primary-foreground/80">طبيب متخصص</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-accent">15</h3>
                <p className="text-primary-foreground/80">سنة خبرة</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-primary rounded-3xl shadow-elegant transform rotate-3 absolute -inset-4"></div>
              <div className="w-full h-96 lg:h-[500px] bg-primary-foreground rounded-3xl shadow-glow relative z-10 flex items-center justify-center">
                <div className="text-center text-primary p-8">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-foreground">H</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">خدمة على مدار 24/7</h3>
                  <p className="text-muted-foreground">
                    فريق طبي متخصص في خدمتكم على مدار الساعة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;