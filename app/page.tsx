import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getFeaturedProducts } from "@/utils/getFeaturedProducts";
import HeroSection from "./(store)/_components/Hero";
import Container from "./(store)/_components/Container";
import Brandings from "./(store)/_components/Brandings";
import Featured from "./(store)/_components/Featured";

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
