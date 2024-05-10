import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative z-30">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-hero-slider-1 bg-cover bg-center bg-no-repeat">
            <div className="min-h-[calc(100vh-72px)] w-full bg-gradient-to-b from-[#130e0ecb] to-[#130e0ecb] opacity-70"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-hero-slider-2 bg-cover bg-center bg-no-repeat">
            <div className="min-h-[calc(100vh-72px)] w-full bg-gradient-to-b from-[#130e0ecb] to-[#130e0ecb]  opacity-70"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-hero-slider-3 bg-cover bg-center bg-no-repeat">
            <div className="min-h-[calc(100vh-72px)] w-full bg-gradient-to-b from-[#130e0ecb] to-[#130e0ecb]  opacity-70"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-hero-slider-4 bg-cover bg-center bg-no-repeat">
            <div className="min-h-[calc(100vh-72px)] w-full bg-gradient-to-b from-[#130e0ecb] to-[#130e0eb0]  opacity-70"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-hero-slider-5 bg-cover bg-center bg-no-repeat">
            <div className="min-h-[calc(100vh-72px)] w-full bg-gradient-to-b from-[#130e0ecb] to-[#130e0ecb]  opacity-70"></div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute left-1/2 top-1/2 z-50 flex  w-full -translate-x-1/2  -translate-y-1/2 items-center justify-center  p-10">
        <div className="flex max-w-full flex-col  text-center md:max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold uppercase text-white md:text-6xl">
            Connect with Volunteers or Serve Your Community, Join Today!
          </h1>
          <p className="font-semibolod mb-8 text-sm text-white md:text-base">
            Make a difference or find support. Connect with volunteers or offer
            your time to causes you care about. Join us now!
          </p>
          <Link
            to="/add-art"
            className=" self-center rounded-md bg-white px-5 py-3 font-semibold uppercase text-black transition duration-150 hover:text-primary"
          >
            Post Your Art
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
