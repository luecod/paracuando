import { FC } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IEventSlider {
  title?: string;
  subtitle?: string;
  events: IEvents[];
}

export const EventSlider: FC<IEventSlider> = ({ title, subtitle, events }) => {
  return (
    <div>
      <div className="mt-[10px]">
        <h2 className="app-title-2">{title}</h2>
        <p className="mt-[9px] mb-[35px] app-subtitle-2">{subtitle}</p>
      </div>
      <div className="relative">
        <Swiper
          style={{ position: 'unset' }}
          slidesPerView={'auto'}
          loop
          breakpoints={{
            375: { slidesPerView: 1.17 },
            600: { slidesPerView: 1.86 },
            900: { slidesPerView: 2.801 },
            1200: { slidesPerView: 3.6 },
          }}
          // breakpoints={{
          //   0: {
          //     slidesPerView: 1,
          //     spaceBetween: 10,
          //   },
          //   330: {
          //     slidesPerView: 1,
          //     spaceBetween: 10,
          //   },
          //   600: {
          //     slidesPerView: 2,
          //     spaceBetween: 1,
          //   },
          //   900: {
          //     slidesPerView: 1.8,
          //     spaceBetween: 10,
          //   },
          //   1200: {
          //     slidesPerView: 3,
          //     spaceBetween: 10,
          //   },
          // }}
        >
          {events?.map((event, index) => (
            <SwiperSlide key={index}>
              <Card
                image={event.image}
                title={event.title}
                content={event.short_description}
                url={event.url}
                votes={event.votes}
              />
            </SwiperSlide>
          ))}
          <div className="hidden sm:flex items-center absolute top-0 bottom-0 -right-20 left-auto cursor-pointer">
            <SlideNextButton />
          </div>
          <div className="hidden sm:flex items-center absolute top-0 bottom-0 -left-20 right-auto cursor-pointer">
            <SlidePrevButton />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

// some-inner-component.jsx
import { useSwiper } from 'swiper/react';
import { IEvents } from '../../../pages';
import Card from '../../cards/Card';

interface ISlideNextButton {
  className?: string;
}
const SlideNextButton = ({ className }: ISlideNextButton) => {
  const swiper = useSwiper();

  return (
    <button className={className} onClick={() => swiper.slideNext()}>
      <BsArrowRightCircle
        className="text-app-blue bg-white rounded-full"
        size={50}
      />
    </button>
  );
};

interface ISlidePrevButton {
  className?: string;
}
const SlidePrevButton = ({ className }: ISlidePrevButton) => {
  const swiper = useSwiper();

  return (
    <button className={className} onClick={() => swiper.slidePrev()}>
      <BsArrowLeftCircle
        className="text-app-blue bg-white rounded-full"
        size={50}
      />
    </button>
  );
};
