// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

const slider = [
  {
    heading: "Find Your Perfect Match",
    description:
      "Join our community and discover meaningful connections with singles who share your values and aspirations.",
    image_url: "https://i.ibb.co/th8XfxF/matri1-1.jpg",
  },
  {
    heading: "Love Knows No Boundaries",
    description:
      "Our platform brings together individuals from diverse backgrounds, helping you find love that transcends borders.",
    image_url: "https://i.ibb.co/pXhv7qk/pottery-slider-1.webp",
  },
  {
    heading: "Celebrate Togetherness",
    description:
      "Begin your journey to a lifetime of happiness with someone special, and create memories that last forever.",
    image_url: "https://i.ibb.co/nfjNsgz/pottery-slider-2.webp",
  },
  {
    heading: "A New Chapter of Love",
    description:
      "Start your love story with us and find your soulmate who completes you in every way.",
    image_url: "https://i.ibb.co/nfjNsgz/pottery-slider-2.webp",
  },
];

function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={{ nextEl: ".btn-next-slide", prevEl: ".btn-prev-slide" }}
      modules={[Pagination, Navigation, EffectFade]}
      effect="fade"
      speed={1000}
      className="mySwiper relative group"
    >
      {slider.map((slide, i) => (
        <SwiperSlide key={i} className="text-black/80">
          <img
            src={slide.image_url}
            alt=""
            className="object-cover object-center h-[420px] w-full "
          />
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-once="true"
            className={`absolute  max-w-2xl lg:left-1/4 top-24 p-4 text-center`}
          >
            <h3 className="text-6xl mb-4 font-bold text-yellow-900 tracking-widest">
              {slide.heading}
            </h3>
            <p className="mb-8 text-xl text-yellow-800 font-semibold mt-8 max-w-6xl">
              {slide.description}
            </p>
            <Link
              to={"/bio-datas"}
              className="bg-yellow-950 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Find Now
            </Link>
          </div>
        </SwiperSlide>
      ))}

      <div className="btn-next-slide absolute z-10 text-3xl top-1/2 -right-12 group-hover:right-4 duration-300 cursor-pointer">
        <IoIosArrowForward />
      </div>
      <div className="btn-prev-slide absolute z-10 text-3xl top-1/2 -left-12 group-hover:left-4 duration-300 cursor-pointer">
        <IoIosArrowBack />
      </div>
    </Swiper>
  );
}

export default Slider;
