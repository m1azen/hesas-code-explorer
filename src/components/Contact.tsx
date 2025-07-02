import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "هاتف الخدمة",
      details: ["19982", "02-12345678"],
      description: "متاح 24/7"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["info@hesas.eg", "support@hesas.eg"],
      description: "سنرد خلال 24 ساعة"
    },
    {
      icon: MapPin,
      title: "العنوان",
      details: ["القاهرة الجديدة", "التجمع الخامس"],
      description: "مصر"
    },
    {
      icon: Clock,
      title: "أوقات العمل",
      details: ["السبت - الخميس", "8:00 ص - 8:00 م"],
      description: "الجمعة: 2:00 م - 8:00 م"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            تواصل
            <span className="text-primary"> معنا</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نحن هنا لخدمتكم ومساعدتكم. تواصلوا معنا في أي وقت ونحن سعداء للإجابة على جميع استفساراتكم
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">معلومات التواصل</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-2">{info.title}</h4>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground mb-1">{detail}</p>
                          ))}
                          <p className="text-sm text-primary font-medium">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Social Media */}
            <Card className="bg-gradient-primary">
              <CardHeader>
                <CardTitle className="text-primary-foreground">تابعنا على وسائل التواصل</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Linkedin, label: "LinkedIn" }
                  ].map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="animate-slide-up bg-card/80 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">أرسل لنا رسالة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">الاسم الأول</label>
                  <Input placeholder="أدخل اسمك الأول" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">الاسم الأخير</label>
                  <Input placeholder="أدخل اسمك الأخير" className="bg-background/50" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">البريد الإلكتروني</label>
                <Input type="email" placeholder="أدخل بريدك الإلكتروني" className="bg-background/50" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">رقم الهاتف</label>
                <Input type="tel" placeholder="أدخل رقم هاتفك" className="bg-background/50" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">نوع الخدمة</label>
                <select className="w-full p-3 border border-input rounded-md bg-background/50 text-foreground">
                  <option>اختر نوع الخدمة</option>
                  <option>الرعاية الصحية الأولية</option>
                  <option>التعليم الصحي</option>
                  <option>التحول الرقمي الصحي</option>
                  <option>خدمة أخرى</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">رسالتك</label>
                <Textarea 
                  placeholder="اكتب رسالتك هنا..." 
                  rows={5}
                  className="bg-background/50"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                <Send className="ml-2 h-5 w-5" />
                إرسال الرسالة
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                نحترم خصوصيتكم ولن نشارك معلوماتكم مع أي طرف ثالث
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;