import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const Services = () => {
  const services = [
    {
      title: "الرعاية الصحية الأولية",
      description: "خدمات طبية شاملة تشمل الكشف الطبي، التشخيص، والعلاج للأمراض الشائعة والوقاية منها",
      image: service1,
      features: ["كشف طبي شامل", "تحاليل مخبرية", "استشارات طبية", "برامج وقائية"]
    },
    {
      title: "التعليم الصحي",
      description: "برامج تثقيفية وتوعوية لنشر الوعي الصحي في المجتمع وتعزيز السلوكيات الصحية السليمة",
      image: service2,
      features: ["ورش تثقيفية", "محاضرات طبية", "مواد تعليمية", "حملات توعوية"]
    },
    {
      title: "التحول الرقمي الصحي",
      description: "حلول تقنية متطورة لتطوير الخدمات الصحية وتحسين تجربة المرضى من خلال التكنولوجيا",
      image: service3,
      features: ["منصات إلكترونية", "تطبيقات ذكية", "نظم إدارة طبية", "خدمات رقمية"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            خدماتنا
            <span className="text-primary"> المتميزة</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات الصحية المتطورة التي تلبي احتياجات جميع أفراد المجتمع 
            بأعلى مستويات الجودة والمهنية
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-4 bg-card border-border/50 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary/20 group-hover:bg-gradient-primary/40 transition-all duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  اعرف المزيد
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-3xl p-8 lg:p-12 text-center animate-fade-in">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            هل تحتاج لخدمة صحية متخصصة؟
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            فريقنا الطبي المتخصص جاهز لخدمتكم على مدار الساعة. احجز موعدك الآن واحصل على أفضل رعاية صحية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="accent" size="lg" className="text-lg px-8 py-4">
              <Calendar className="ml-2 h-5 w-5" />
              احجز موعد
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              <Clock className="ml-2 h-5 w-5" />
              خدمة الطوارئ
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-6 text-primary-foreground/80">
            <MapPin className="h-4 w-4" />
            <span>متاح في جميع أنحاء الجمهورية</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;