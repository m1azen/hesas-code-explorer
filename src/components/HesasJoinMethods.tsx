import { Mail, Smartphone, GraduationCap } from "lucide-react";

const HesasJoinMethods = () => {
  const joinMethods = [
    {
      icon: Mail,
      title: "الإيميل",
      description: "قم بالتسجيل باستخدام البريد الإلكتروني"
    },
    {
      icon: Smartphone, 
      title: "رقم الموبايل",
      description: "سجل دخولك برقم الهاتف المحمول"
    },
    {
      icon: GraduationCap,
      title: "الحساب المدرسي الموحد", 
      description: "استخدم حسابك المدرسي للدخول المباشر"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ازاي نضم لحصص مصر
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نقدر نسجل دخول بثلاث طرق مختلفة
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {joinMethods.map((method, index) => (
            <div 
              key={index}
              className="text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-hero rounded-3xl flex items-center justify-center group-hover:shadow-2xl transition-all duration-300">
                <method.icon className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {method.title}
              </h3>
              
              <p className="text-muted-foreground text-lg">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HesasJoinMethods;