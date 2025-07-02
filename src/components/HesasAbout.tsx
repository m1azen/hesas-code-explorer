import aboutBg from "@/assets/about-bg.jpg";

const HesasAbout = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              اعرف أكثر عن محتوى حصص مصر
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                منصة تعليم إلكتروني مقدمة من وزارة التربية والتعليم المصرية. توفر 
                المناهج الموارد للطلاب من الصف الثالث الإعدادي حتى الصف الثالث 
                الثانوي. فيها يلي ملخص سريع لما تقدمه هيئة مصر:
              </p>
              
              <div className="space-y-3">
                <p>• <strong>المواد الدراسية:</strong> اللغة العربية واللغة الإنجليزية واللغة الفرنسية</p>
                <p className="mr-4">ومختلف المواد العلمية والإنسانية وفقاً <span className="text-primary underline font-medium">للمناهج المصرية</span></p>
                
                <p>• <strong>المحتوى:</strong> دروس تفاعلية، ومراجعات المواد الدراسية، وامتحانات</p>
                <p className="mr-4">تجريبية من إعداد <span className="text-destructive font-medium">معلمين معتمدين</span> من الوزارة.</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <img 
                src={aboutBg} 
                alt="طالب يدرس" 
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-hero/20 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HesasAbout;