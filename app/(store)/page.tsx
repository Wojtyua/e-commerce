import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getFeaturedProducts } from "@/utils/getFeaturedProducts";

import Brandings from "@/components/Brandings";
import Featured from "@/components/Featured";
import HeroSection from "@/components/Hero";
import Container from "@/components/Container";

const HomePage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["featuredProducts"],
    queryFn: getFeaturedProducts,
  });

  return (
    <>
      <HeroSection />
      <Container>
        <Brandings />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Featured />
        </HydrationBoundary>
      </Container>
    </>
  );
};

export default HomePage;