import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getFeaturedProducts } from "@/utils/getFeaturedProducts";
import HeroSection from "./_components/Hero";
import Container from "./_components/Container";
import Brandings from "./_components/Brandings";
import Featured from "./_components/Featured";

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
