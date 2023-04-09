import Image from 'next/image';
import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import Interests from '../../components/navigation/Interests';
import CategoryAndSearch from '../../components/navigation/categoryAndSearch/CategoryAndSearch';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { eventsMock } from '../../lib/data/events.mock';
import { NextPageWithLayout } from '../page';

export const CategoryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { category_id } = router.query;
  let content,
    title,
    description,
    banner = '';
  if (category_id === 'marcas-y-tiendas') {
    title = 'Marcas y tiendas';
    content = 'Home / Marcas';
    description = 'Descubre las marcas y tiendas que la gente quiere cerca';
    banner = '/mock-category.png';
  } else if (category_id === 'artistas-y-conciertos') {
    title = 'Artistas y Conciertos';
    content = 'Home / Artista';
    description =
      'Descubre los artistas y conciertos que la gente quiere cerca';
    banner = '/mock-category-artist.png';
  } else if (category_id === 'torneos') {
    title = 'Torneos y eventos';
    content = 'Home / Torneo';
    description = 'Descubre los torneos y eventos que la gente quiere cerca';
    banner = '/mock-category-event.png';
  }
  return (
    <div className="max-w-[1920px] m-auto flex flex-col">
      <div className="min-h-[204px] relative">
        <div>
          <Image src={banner} alt="" fill objectFit="cover"></Image>
        </div>
        <div className="relative lg:max-w-6xl m-auto">
          <div className="absolute px-5 pt-[23px] flex flex-col">
            <p className="text-white font-medium text-[16px] leading-[18.75px]">
              {/* Home / Marcas */}
              {content}
            </p>
            <h2 className="mt-[23px] text-app-yellow font-black text-[48px] leading-[56.25px]">
              {/* Marcas y tiendas */}
              {title}
            </h2>
            <p className="mt-[6px] text-white font-medium text-[16px] leading-[18.75px]">
              {/* Descubre las marcas y tiendas que la gente quiere cerca */}
              {description}
            </p>
          </div>
        </div>
      </div>

      <CategoryAndSearch></CategoryAndSearch>

      <div className="container m-auto">
        <div className="mt-[60px] ">
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

        <Interests></Interests>

        <div className="mt-[13px] mb-[94px]">
          <EventSlider
            title="Recientes"
            subtitle="Las personas últimamente están hablando de esto"
            events={eventsMock}
          />
        </div>
      </div>

      {/* antiguo */}
      {/* <h1 className="text-2xl">
        {' '}
        this page is{' '}
        <span className="text-app-red text-6xl">{category_id}</span>
      </h1> */}
    </div>
  );
};

CategoryPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
