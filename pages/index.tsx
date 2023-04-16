import Link from 'next/link';
import Logo from '../components/assets/logo/Logo';
import { Layout } from '../components/layout/Layout';
import Interests from '../components/navigation/Interests';
import SearchBar from '../components/navigation/SearchBar';
import { EventSlider } from '../components/sliders/EventSlider/EventSlider';
import { usePublications } from '../lib/services/publications.services';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const {
    data: publicationResponse,
    error: publicationError,
    isLoading: publicationLoading,
  } = usePublications();

  const publications = publicationResponse?.results;
  console.log(publications);

  const mostPopular = publications
    ?.slice()
    .sort((a, b) => b?.votes_count - a.votes_count);

  const latest = publications
    ?.slice()
    .sort(
      (a, b) =>
        new Date(b?.created_at).getTime() - new Date(a?.created_at).getTime()
    );
  return (
    <div className="container lg:max-w-6xl m-auto">
      {/* HERO SECTION */}
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/hero-banner.png")] bg-cover bg-center app-banner gap-5'>
        <div>
          <Logo />
        </div>
        <SearchBar />
        <div className="flex flex-col gap-4">
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
        {mostPopular && (
          <EventSlider
            title="Los más populares"
            subtitle="Lo que las personas piden más"
            events={mostPopular}
          />
        )}
      </div>
      <div className="mt-[43px]">
        {publications && (
          <EventSlider
            title="Sugerencias para ti"
            subtitle="Publicaciones que podrías colaborar"
            events={publications}
          />
        )}
      </div>
      <Interests></Interests>
      <div className="mt-[13px] mb-[94px]">
        {latest && (
          <EventSlider
            title="Recientes"
            subtitle="Las personas últimamente están hablando de esto"
            events={latest}
          />
        )}
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
