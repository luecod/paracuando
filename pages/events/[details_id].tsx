import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import VotePerson from '../../components/assets/svg/VotePerson';
import { Layout } from '../../components/layout/Layout';
import NotFound from '../../components/navigation/NotFound';
import CategoryAndSearch from '../../components/navigation/categoryAndSearch/CategoryAndSearch';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { usePublications } from '../../lib/services/publications.services';
import { NextPageWithLayout } from '../page';

interface iEventExample {
  id: string;
  user_id: string;
  publication_type_id: number;
  city_id: string;
  title: string;
  description: string;
  content: string;
  reference_link: string;
  votes_count: number;
  publication_type: {
    id: string;
    name: string;
    description: string;
  };
  images: [
    {
      publication_id: string;
      image_url: string;
    }
  ];
}
export const DetailsPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { details_id } = router.query;

  const {
    data: publicationResponse,
    error: publicationError,
    isLoading: publicationLoading,
  } = usePublications();
  const publications = publicationResponse?.results;

  const eventDetails = publications?.find((detail) => detail.id === details_id);
  console.log('eventDetails', eventDetails);

  if (publicationLoading) return <div>Loading...</div>;

  if (eventDetails === undefined) {
    return <NotFound />;
  }

  const latest = publications
    ?.slice()
    .sort(
      (a, b) =>
        new Date(b?.created_at).getTime() - new Date(a?.created_at).getTime()
    );

  const eventExample: iEventExample = {
    id: '1ab23d06-3298-4e8b-b034-4fc64711273b',
    user_id: '52143c3e-154e-4c4b-bf39-bc3c3503e99f',
    publication_type_id: 1,
    city_id: '52143c3e-154e-4c4b-bf39-bc3c3503e99f',
    title: 'Concierto de Lady Gaga',
    description: 'Artista / Pop / Rock',
    content:
      'El concierto con la temática de Lady gaga en Las Vegas. El concierto con la temática de Lady gaga en Las Vegas.El concierto con la temática.',
    reference_link: 'ladygaga.com',
    votes_count: 2,
    publication_type: {
      id: '1ab23d06-3298-4e8b-b034-4fc64711273b',
      name: 'Concierto',
      description: 'Concierto de música',
    },
    images: [
      {
        publication_id: '1ab23d06-3298-4e8b-b034-4fc64711273b',
        image_url: '/mock-event-image.png',
      },
    ],
  };
  return (
    <div className="max-w-[1920px] m-auto mb-[94px] md:mb-[103px] flex flex-col">
      <CategoryAndSearch></CategoryAndSearch>
      <div className="container lg:max-w-6xl m-auto mt-[54px] lg:mt-[101px]">
        {/* detalles */}
        <div className="flex flex-col items-center md:grid md:grid-cols-[379px_451px] lg:grid-cols-[379px_539px] md:grid-rows-[309.25px_71.75px] md:justify-center md:gap-x-[22px]">
          <div className="max-w-[374px] md:max-w-[379px] sm:max-w-[600px] sm:px-6 md:px-0">
            <p className="font-medium text-[16px] leading-[18.75px]">
              {eventDetails.description}
            </p>
            <h2 className="font-black text-[36px] leading-[42.19px] md:text-[48px] md:leading-[56.25px]">
              {eventDetails.title}
            </h2>
            <p className="mt-[22px] font-normal text-[15px] leading-[17.58px] text-app-grayDark">
              {eventDetails.content}
            </p>
            <p className="mt-[33px] text-app-blue max-w-[374px] font-medium text-[14px] leading-4">
              <Link href={eventDetails.reference_link}>
                {eventDetails.reference_link}
              </Link>
            </p>
            <div className="mt-[16px] flex gap-2 items-center">
              <VotePerson className="text-left" />
              <p className="text-sm font-medium text-[14px] leading-4">
                {eventDetails.votes_count} votos
              </p>
            </div>
          </div>
          <div className="mt-[25px] w-[374px] md:hidden">
            <Image
              src={eventDetails.images[0].image_url}
              alt=""
              sizes="(max-width: 600px) 100vw, 600px"
              height={252}
              width={374}
            ></Image>
          </div>
          <div className="hidden w-[451px] lg:hidden md:block md:col-start-2 md:row-start-1 md:row-end-3">
            <Image
              src={eventDetails.images[0].image_url}
              alt=""
              sizes="(max-width: 600px) 100vw, 600px"
              height={381}
              width={451}
            ></Image>
          </div>
          <div className="hidden w-[539px] md:hidden lg:block lg:col-start-2 lg:row-start-1 lg:row-end-3">
            <Image
              src={eventDetails.images[0].image_url}
              alt=""
              sizes="(max-width: 600px) 100vw, 600px"
              height={381}
              width={539}
            ></Image>
          </div>
          <div className="mt-[31px] md:mt-[26px]">
            <button className="bg-app-blue rounded-[23px] py-[13.5px] px-[167.65px] text-white font-medium text-[16px] leading-[18.75px]">
              Votar
            </button>
          </div>
        </div>

        {/* personal */}
        <div className="min-h-[278px] pd-[42px] mt-[82px] md:[72px] bg-[#F8F7FA] pt-[27px] pl-[24px] text-app-grayDark">
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
        {/* reciente */}
        <div className="mt-[23px] md:mt-[71px]">
          {latest && (
            <EventSlider
              title="Recientes"
              subtitle="Las personas últimamente están hablando de esto"
              events={latest}
            />
          )}
        </div>
      </div>

      {/* <h1 className="text-2xl">
        {' '}
        this page is <span className="text-app-red text-6xl">{details_id}</span>
      </h1> */}
    </div>
  );
};

DetailsPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default DetailsPage;
