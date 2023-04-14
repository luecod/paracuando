import Image from 'next/image';
import { useState } from 'react';
import OptionPoints from '../../components/assets/svg/OptionPoints';
import HorizontalCard from '../../components/cards/HorizontalCard';
import { Layout } from '../../components/layout/Layout';
import SearchBarBig from '../../components/navigation/SearchBarBig';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { eventsMock } from '../../lib/data/events.mock';
import { NextPageWithLayout } from '../page';

const EventExample = {
  title: 'Concierto de Lady Gaga',
  content:
    'El concierto con la temática de Lady gaga en Las Vegas. El concierto con la temática de Lady gaga en Las Vegas. El concierto con la temática.',
  votes: 99203,
  url: 'ladygaga.com',
  image: '/mock-event-image.png',
};

const SearchPage: NextPageWithLayout = () => {
  const [activeCategory, setActiveCategory] = useState(2);
  const [activeMenu, setActiveMenu] = useState(false);

  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const handleCategory = (category: number) => {
    setActiveCategory(category);
    if (category === 3 || category === 4) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="max-w-[1920px] m-auto flex flex-col">
      <div className="min-h-[108px] relative">
        <div>
          <Image src={'/hero-banner.png'} alt="" fill objectFit="cover"></Image>
        </div>
        <div className="relative max-w-[934px] m-auto">
          <div className="absolute px-5 pt-[67px] flex flex-col">
            <p className="text-white font-medium text-[16px] leading-[18.75px]">
              Home / Búsqueda
            </p>
          </div>
        </div>
      </div>

      {/* search and filter section */}
      <div className="h-[140px] pt-[37px] shadow-[0_2px_4px_rgba(0,0,0,0.25)] mb-11 text-app-grayDark font-normal text-[16px] leading-[18.75px]">
        <div className="max-w-[934px] m-auto">
          <div className="sm:container lg:max-w-6xl flex justify-between items-center m-auto ">
            <SearchBarBig />
          </div>

          <div className="relative mt-[29px] flex gap-[30px]">
            <button
              className={`ml-[22px] border-b-4 sm:p-[5px] ${
                activeCategory === 1
                  ? 'z-20  border-app-blue'
                  : 'border-transparent'
              }`}
              onClick={() => handleCategory(1)}
            >
              Todos los resultados
            </button>

            <button
              className={`border-b-4 ${
                activeCategory === 2
                  ? 'z-20  border-app-blue'
                  : 'border-transparent'
              }`}
              onClick={() => handleCategory(2)}
            >
              Marcas y tiendas
            </button>

            <button
              className={`hidden sm:block border-b-4 ${
                activeCategory === 3
                  ? 'z-20  border-app-blue'
                  : 'border-transparent'
              }`}
              onClick={() => handleCategory(3)}
            >
              Artistas y conciertos
            </button>

            <button
              className={`hidden sm:block border-b-4 ${
                activeCategory === 4
                  ? 'z-20  border-app-blue'
                  : 'border-transparent'
              }`}
              onClick={() => handleCategory(4)}
            >
              Torneos
            </button>

            <button className="sm:hidden" onClick={handleMenu}>
              <OptionPoints />
            </button>

            {/* menu */}
            <div
              className={`absolute z-10 bg-white right-1 -bottom-[107px] h-[106px] w-[174px] shadow-[0_2px_4px_rgba(0,0,0,0.25)] m-1 ${
                activeMenu ? 'block' : 'hidden'
              }`}
            >
              <button
                className="ml-[13px] mt-[25px]"
                onClick={() => handleCategory(3)}
              >
                Artistas y conciertos
              </button>
              <button
                className="ml-[13px] mt-[18px]"
                onClick={() => handleCategory(4)}
              >
                Torneos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      {eventsMock.map((event, index) => (
        <div key={index} className="m-auto">
          <HorizontalCard
            title={event.title}
            content={event.short_description}
            url={event.url}
            image={event.image}
            votes={event.votes}
          />
        </div>
      ))}

      {/* pagination */}
      <div className="flex justify-center text-[#988989] mt-[62px]">
        <ul className="pl-0 list-none flex gap-[3.5px]">
          <li className="cursor-pointer w-[47.85px] h-[47.85px] flex justify-center items-center rounded-[2.96px] hover:bg-app-blue hover:text-white">
            1
          </li>
          <li className="cursor-pointer w-[47.85px] h-[47.85px] flex justify-center items-center rounded-[2.96px] hover:bg-app-blue hover:text-white">
            2
          </li>
          <li className="cursor-pointer w-[47.85px] h-[47.85px] flex justify-center items-center rounded-[2.96px] hover:bg-app-blue hover:text-white">
            3
          </li>
          <li className="hidden cursor-pointer w-[47.85px] h-[47.85px] sm:flex justify-center items-center rounded-[2.96px] hover:bg-app-blue hover:text-white">
            4
          </li>
          <li className="hidden cursor-pointer w-[47.85px] h-[47.85px] sm:flex justify-center items-center rounded-[2.96px] hover:bg-app-blue hover:text-white">
            5
          </li>
          <li className="cursor-pointer w-[47.85px] h-[47.85px] flex justify-center items-center rounded-[2.96px] hover:bg-app-blue hover:text-white">
            ...
          </li>
          <li className="cursor-pointer w-[47.85px] h-[47.85px] flex justify-center items-center rounded-[2.96px] hover:bg-app-blue hover:text-white">
            6
          </li>
        </ul>
      </div>

      {/* last card */}
      <div className="relative my-[84px] pt-[10px] pl-[18px] pb-[19px]">
        <EventSlider
          title="Recientes"
          subtitle="Las personas últimamente están hablando de esto"
          events={eventsMock}
        />
      </div>
    </div>
  );
};

SearchPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default SearchPage;
