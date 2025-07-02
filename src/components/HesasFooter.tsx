const HesasFooter = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Coat_of_arms_of_Egypt_%28Official%29.svg/150px-Coat_of_arms_of_Egypt_%28Official%29.svg.png" 
              alt="شعار الجمهورية" 
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-xl font-bold">حصص مصر</h3>
              <p className="text-sm opacity-80">وزارة التربية والتعليم المصرية</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-accent transition-colors">الشروط والأحكام</a>
            <a href="#" className="hover:text-accent transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-accent transition-colors">اتصل بنا</a>
          </div>
          
          <div className="text-sm opacity-80">
            © 2024 حصص مصر. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HesasFooter;