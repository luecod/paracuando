import Link from 'next/link';
import Logo from '../components/assets/logo/Logo';
import { Layout } from '../components/layout/Layout';
import Interests from '../components/navigation/Interests';
import SearchBar from '../components/navigation/SearchBar';
import { EventSlider } from '../components/sliders/EventSlider/EventSlider';
import { eventsMock } from '../lib/data/events.mock';
import { useCategories } from '../lib/services/categories.services';
import { NextPageWithLayout } from './page';

export interface IEvents {
  title: string;
  short_description: string;
  url: string;
  image: string;
  votes: number;
}

const Home: NextPageWithLayout = () => {
  const { data, error, isLoading } = useCategories();

  console.log({ data, error, isLoading });

  return (
    <div className="container lg:max-w-6xl m-auto">
      {/* HERO SECTION */}
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/hero-banner.png")] bg-cover bg-center app-banner gap-5'>
        <div>
          <Logo />
        </div>
        <SearchBar />
        <div className="flex flex-col gap-4">
          {/* <input
            className="px-6 py-4 rounded-3xl w-full sm:w-[465px]"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad?"
          /> */}
          <div className="flex items-center justify-center gap-[9px] sm:gap-[10px]">
            <Link href={'/category/marcas-y-tiendas'}>
              <button className="bg-white px-[14px] py-[7.5px] rounded-[23px] font-medium text-[13px] leading-[15.23px] text-[#A7A6A7] hover:bg-app-blue hover:text-white">
                Marcas y tiendas
              </button>
            </Link>
            <Link href={'/category/artistas-y-conciertos'}>
              <button className="bg-white px-[14px] py-[7.5px] rounded-[23px] font-medium text-[13px] leading-[15.23px] text-[#A7A6A7] hover:bg-app-blue hover:text-white">
                Artistas y conciertos
              </button>
            </Link>
            <Link href={'/category/torneos'}>
              <button className="bg-white px-[14px] py-[7.5px] rounded-[23px] font-medium text-[13px] leading-[15.23px] text-[#A7A6A7] hover:bg-app-blue hover:text-white">
                Torneos
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* CONTENIDO */}
      <div className="mt-[73px]">
        <EventSlider
          title="Los más populares"
          subtitle="Lo que las personas piden más"
          events={eventsMock}
        />
      </div>
      <div className="mt-[40px]">
        <EventSlider
          title="Sugerencias para ti"
          subtitle="Publicaciones que te podrían interesar"
          events={eventsMock}
        />
      </div>
      <Interests></Interests>
      <div className="mt-[13px] mb-[94px]">
        <EventSlider
          title="Recientes"
          subtitle="Las personas últimamente están hablando de esto"
          events={eventsMock}
        />
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
