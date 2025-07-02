import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HesasPackages = () => {
  const packages = [
    {
      title: "باقة الصف الثالث الإعدادي",
      price: "السعر 100 جنيه",
      grade: "الصف الثالث الإعدادي"
    },
    {
      title: "باقة الصف الأول الثانوي", 
      price: "السعر 100 جنيه",
      grade: "الصف الأول الثانوي"
    },
    {
      title: "باقة الصف الثاني الثانوي أدبي",
      price: "السعر 100 جنيه", 
      grade: "الصف الثاني الثانوي"
    },
    {
      title: "باقة الصف الثاني الثانوي علمي",
      price: "السعر 100 جنيه",
      grade: "الصف الثاني الثانوي"
    },
    {
      title: "باقة الصف الثالث الثانوي أدبي",
      price: "السعر 100 جنيه",
      grade: "الصف الثالث الثانوي"
    },
    {
      title: "باقة الصف الثالث الثانوي علمي رياضة",
      price: "السعر 100 جنيه", 
      grade: "الصف الثالث الثانوي"
    },
    {
      title: "باقة الصف الثالث الثانوي علمي علوم",
      price: "السعر 100 جنيه",
      grade: "الصف الثالث الثانوي"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            باقات حصص مصر التعليمية
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            تعرف على الكورسات والمواد التعليمية داخل باقات حصص مصر
          </p>
        </div>
        
        {/* Language Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
            <div className="flex gap-2">
              <Button 
                variant="purple" 
                className="bg-accent text-white rounded-full px-8 py-3"
              >
                مدارس اللغة العربية
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/20 rounded-full px-8 py-3"
              >
                مدارس اللغة الإنجليزية
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/20 rounded-full px-8 py-3"
              >
                مدارس اللغة الفرنسية
              </Button>
            </div>
          </div>
        </div>
        
        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <CardTitle className="text-white text-lg font-bold leading-tight">
                  {pkg.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/80 text-lg font-semibold mb-4">
                  {pkg.price}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30 rounded-lg group-hover:scale-105 transition-all duration-300"
                >
                  اشترك الآن
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HesasPackages;