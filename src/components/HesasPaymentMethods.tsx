const HesasPaymentMethods = () => {
  const paymentMethods = [
    {
      category: "فوري",
      logo: "https://fawry.com/assets/images/fawry-logo.png",
      alt: "فوري"
    },
    {
      category: "المحفظة الإلكترونية", 
      items: [
        { logo: "https://we.etisalat.eg/static/img/etisalat-cash-logo.svg", alt: "اتصالات كاش" },
        { logo: "https://vodafone.com.eg/vodafone-cash/images/vodafone-cash-logo.svg", alt: "فودافون كاش" },
        { logo: "https://orange.eg/orange-money/images/orange-money-logo.svg", alt: "أورانج موني" }
      ]
    },
    {
      category: "الكارت البنكي",
      items: [
        { logo: "https://brand.visa.com/content/dam/VCOM/Brand/logo-visa.svg", alt: "فيزا" },
        { logo: "https://brand.mastercard.com/content/dam/mastercard/global/logos/mc-logo.svg", alt: "ماستركارد" },
        { logo: "https://aman.com.eg/images/aman-logo.svg", alt: "أمان" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            تقدر تشترك بكل طرق الدفع الممكنة
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {paymentMethods.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">{category.category}</h3>
              
              {category.logo ? (
                // Single logo for Fawry
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <img 
                    src="/api/placeholder/150/60" 
                    alt={category.alt}
                    className="w-full h-16 object-contain mx-auto"
                  />
                </div>
              ) : (
                // Multiple logos for other categories
                <div className="grid grid-cols-1 gap-4">
                  {category.items?.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                      <img 
                        src="/api/placeholder/120/50" 
                        alt={item.alt}
                        className="w-full h-12 object-contain mx-auto"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HesasPaymentMethods;