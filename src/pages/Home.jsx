import Artists from "../components/Artist";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import VideoContact from "../components/VideoContact";
import Work from "../components/Work";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Work />
      <Artists />
      <Testimonial />
      <VideoContact />
    </div>
  );
};

export default Home;
