import Link from 'next/link';
import Logo from '../components/assets/logo/Logo';
import { Layout } from '../components/layout/Layout';
import SearchBar from '../components/navigation/SearchBar';
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
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/hero-banner.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
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
          <div className="flex items-center justify-center gap-2">
            <Link href={'/category/marcas-y-tiendas'}>
              <button>Marcas y tiendas</button>
            </Link>
            <Link href={'/category/artistas-y-conciertos'}>
              <button>Artistas y conciertos</button>
            </Link>
            <Link href={'/category/torneos'}>
              <button>Torneos</button>
            </Link>
          </div>
        </div>
      </div>
      {/* CONTENIDO */}
      <div className="app-card ">
        {/* <EventSlider title='Los mas populares' subtitle='Lo que las personas piden más' events={eventsMock} /> */}
      </div>
      <div className=" app-card ">
        {/* <EventSlider title='Sugerencias para ti' subtitle='Publicaciones que te podrian interesar' events={eventsMock} /> */}
      </div>
      <div className="h-[278px]  bg-[#F8F7FA]">
        <p>¡Hagámoslo más personal!</p>
        <p>
          Selecciona tus intereses para brindarte sugerencia de acuerdo a tus
          gustos
        </p>
        <div className="px-[23px] flex gap-[11px] max-w-content overflow-auto">
          <button className="app-small-box">Artistas Mexicanos</button>
          <button className="app-small-box">Artistas Mexicanos</button>
          <button className="app-small-box">Artistas Mexicanos</button>
          <button className="app-small-box">Artistas Mexicanos</button>
        </div>
      </div>
      <div className="app-card">
        {/* <EventSlider title='Recientes' subtitle='Las personas últimamente están hablando de esto' events={eventsMock} /> */}
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
