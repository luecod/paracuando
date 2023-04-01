import Link from 'next/link';
import Logo from '../components/assets/logo/Logo';
import { Layout } from '../components/layout/Layout';
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
    <div>
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
              <button className="bg-white px-[14px] py-[7.5px] rounded-[23px] font-medium text-[13px] leading-[15.23px] text-[#A7A6A7]">
                Marcas y tiendas
              </button>
            </Link>
            <Link href={'/category/artistas-y-conciertos'}>
              <button className="bg-white px-[14px] py-[7.5px] rounded-[23px] font-medium text-[13px] leading-[15.23px] text-[#A7A6A7]">
                Artistas y conciertos
              </button>
            </Link>
            <Link href={'/category/torneos'}>
              <button className="bg-white px-[14px] py-[7.5px] rounded-[23px] font-medium text-[13px] leading-[15.23px] text-[#A7A6A7]">
                Torneos
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* CONTENIDO */}
      <div className="mt-[73px] ">
        <EventSlider
          title="Los mas populares"
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
      <div className="min-h-[278px] pd-[42px] mt-[52px] bg-[#F8F7FA] pt-[27px] pl-[24px] text-app-grayDark">
        <h3 className="font-medium text-[24px] leading-[28.13px]">
          ¡Hagámoslo más personal!
        </h3>
        <p className="mt-[10px] font-normal text-[16px] leading-[18.75px]">
          Selecciona tus intereses para brindarte sugerencia de acuerdo a tus
          gustos
        </p>
        <div className="mt-[22px] flex flex-wrap gap-[11px] max-w-content overflow-auto">
          <button className="app-small-box">Artistas Mexicanos</button>
          <button className="app-small-box">Tiendas de ropa</button>
          <button className="app-small-box px-[34px]">Rock</button>
          <button className="app-small-box">Restaurantes</button>
        </div>
        <div>
          <button className="mt-[47px] mb-[42px] text-app-blue font-normal text-[16px] leading-[18.75px]">
            Ver todos los intereses
          </button>
        </div>
      </div>
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
