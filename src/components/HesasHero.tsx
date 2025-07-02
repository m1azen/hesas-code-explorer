import { Button } from "@/components/ui/button";
import heroStudent from "@/assets/hero-student.jpg";

const HesasHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroStudent})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-overlay-purple"></div>
      </div>
      
      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full animate-float blur-3xl"></div>
      <div className="absolute bottom-32 right-20 w-24 h-24 bg-primary/30 rounded-full animate-float blur-2xl" style={{ animationDelay: '1s' }}></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            منصة تعليمية معتمدة من وزارة
            <br />
            <span className="text-accent">التربية و التعليم</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            تقدم المناهج الدراسية بدءاً من الصف الثالث الإعدادي وحتى
            <br />
            الثالث الثانوي
          </p>
          
          <Button 
            variant="purple" 
            size="lg"
            className="text-xl px-12 py-6 rounded-full bg-accent hover:bg-accent/90 transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            تسجيل دخول
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HesasHero;