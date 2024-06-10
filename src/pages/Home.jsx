import Banner from "../shared/Banner";
import HowItWorks from "../shared/HowItWorks";
import Premium from "../shared/Premium";
import SuccessCounter from "../shared/SuccessCounter";
import SuccessStory from "../shared/SuccessStory";

function Home() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <Premium />
      <HowItWorks />
      <SuccessCounter />
      <SuccessStory />
    </div>
  );
}

export default Home;
