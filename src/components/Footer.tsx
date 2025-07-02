import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">هيساس</h3>
                <p className="text-primary-foreground/80">للخدمات الصحية</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              نحن نؤمن بأن الصحة حق لكل مواطن مصري. نقدم خدمات صحية متميزة وشاملة بأحدث التقنيات والمعايير العالمية.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                "الرئيسية",
                "عن هيساس", 
                "خدماتنا",
                "الأطباء",
                "المدونة",
                "تواصل معنا"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {[
                "الرعاية الصحية الأولية",
                "التعليم الصحي",
                "التحول الرقمي الصحي",
                "الاستشارات الطبية",
                "البرامج الوقائية",
                "الطوارئ الطبية"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">هاتف الخدمة</p>
                  <p className="text-primary-foreground/80">19982</p>
                  <p className="text-primary-foreground/80">02-12345678</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">البريد الإلكتروني</p>
                  <p className="text-primary-foreground/80">info@hesas.eg</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">العنوان</p>
                  <p className="text-primary-foreground/80">القاهرة الجديدة، التجمع الخامس</p>
                  <p className="text-primary-foreground/80">جمهورية مصر العربية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold mb-2">اشترك في نشرتنا الإخبارية</h4>
              <p className="text-primary-foreground/80">احصل على آخر الأخبار والتحديثات الصحية</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 lg:w-80 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-accent"
              />
              <Button variant="accent" size="lg">
                اشتراك
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <span>© 2024 هيساس للخدمات الصحية. جميع الحقوق محفوظة.</span>
            </div>
            
            <div className="flex items-center gap-1 text-primary-foreground/80">
              <span>صُنع بـ</span>
              <Heart className="h-4 w-4 text-accent" />
              <span>في مصر</span>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                الشروط والأحكام
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                سياسة الكوكيز
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;