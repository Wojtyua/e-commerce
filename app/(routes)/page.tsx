import { dehydrate } from "@tanstack/react-query";
import { HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { getProducts } from "@/utils/getProducts";

import Brandings from "@/components/Brandings";
import Featured from "@/components/Featured";
import HeroSection from "@/components/Hero";
import { getFeaturedProducts } from "@/utils/getFeaturedProducts";

const HomePage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getFeaturedProducts,
  });

  return (
    <>
      <HeroSection />
      <Brandings />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Featured />
      </HydrationBoundary>
    </>
  );
};

export default HomePage;
