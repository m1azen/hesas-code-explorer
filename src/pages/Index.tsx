import HesasHeader from "@/components/HesasHeader";
import HesasHero from "@/components/HesasHero";
import HesasAbout from "@/components/HesasAbout";
import HesasPaymentMethods from "@/components/HesasPaymentMethods";
import HesasPackages from "@/components/HesasPackages";
import HesasJoinMethods from "@/components/HesasJoinMethods";
import HesasFooter from "@/components/HesasFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HesasHeader />
      <HesasHero />
      <HesasAbout />
      <HesasPaymentMethods />
      <HesasPackages />
      <HesasJoinMethods />
      <HesasFooter />
    </div>
  );
};

export default Index;
