import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Users, Award, ArrowLeft } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "الأمان والجودة",
      description: "نلتزم بأعلى معايير الأمان والجودة في جميع خدماتنا الصحية"
    },
    {
      icon: Heart,
      title: "الرعاية المتخصصة", 
      description: "فريق طبي متخصص ومؤهل لتقديم أفضل رعاية صحية ممكنة"
    },
    {
      icon: Users,
      title: "خدمة العملاء",
      description: "فريق خدمة عملاء متميز لضمان راحتكم ورضاكم التام"
    },
    {
      icon: Award,
      title: "التميز والإبداع",
      description: "نسعى دائماً للتميز والإبداع في تقديم الخدمات الصحية"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              عن
              <span className="text-primary"> هيساس</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              هيساس هي مؤسسة رائدة في مجال الخدمات الصحية في مصر، تأسست بهدف توفير رعاية صحية شاملة 
              ومتميزة لجميع أفراد المجتمع. نحن نؤمن بأن الصحة أساس الحياة الكريمة، ولذلك نسعى جاهدين 
              لتقديم أفضل الخدمات الطبية والصحية بأحدث التقنيات والمعايير العالمية.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              منذ تأسيسنا، حققنا إنجازات كبيرة في مجال الرعاية الصحية، وأصبحنا محل ثقة الآلاف من المرضى 
              والعائلات في جميع أنحاء الجمهورية. نفخر بفريقنا الطبي المتخصص وخدماتنا المتنوعة التي تلبي 
              احتياجات جميع الفئات العمرية.
            </p>
            
            <Button variant="hero" size="lg" className="animate-slide-up">
              اعرف المزيد عنا
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { number: "15+", label: "سنة خبرة" },
            { number: "50K+", label: "مريض راضٍ" },
            { number: "100+", label: "طبيب متخصص" },
            { number: "24/7", label: "خدمة متواصلة" }
          ].map((stat, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;