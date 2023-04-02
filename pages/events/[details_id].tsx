import Link from 'next/link';
import { useRouter } from 'next/router';
import EventButton from '../../components/assets/svg/EventButton';
import Loupe from '../../components/assets/svg/Loupe';
import { Layout } from '../../components/layout/Layout';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { eventsMock } from '../../lib/data/events.mock';
import { NextPageWithLayout } from '../page';

export const DetailsPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { details_id } = router.query;
  return (
    <div className="max-w-[1920px] m-auto mb-[94px] md:mb-[103px] flex flex-col">
      <div className="h-[114px] pt-[38px] shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
        <div className="container lg:max-w-6xl flex justify-between items-center m-auto">
          <div className="ml-[21px] self-start md:hidden p-[10.11px] rounded-full border border-app-gray">
            <EventButton></EventButton>
          </div>
          <div className="hidden text-app-gray self-start md:flex gap-[9px]">
            <button className="border bg-white border-app-gray px-[18.43px] rounded-[26px] py-[14.5px] font-medium text-[13px] leading-[15.23px]">
              <Link className="" href={'category/marcas-y-tiendas'}>
                Marcas y tiendas
              </Link>
            </button>
            <button className="border bg-white border-app-gray px-[18.42px] rounded-[26px] py-[14.5px] font-medium text-[13px] leading-[15.23px]">
              <Link href={'/category/artistas-y-conciertos'}>
                Artistas y conciertos
              </Link>
            </button>
            <button className="border bg-white border-app-gray px-[19px] rounded-[26px] py-[14.5px] font-medium text-[13px] leading-[15.23px]">
              <Link href={'/category/torneos'}>Torneos</Link>
            </button>
          </div>
          <div className="self-end relative mr-[20px] md:mr-[0px]">
            <input
              className="rounded-[23px] pt-[15px] pb-[14px] px-6 w-[305px] sm:w-[373px] bg-white font-normal text-[13px] leading-[15.23px] text-app-gray border border-app-gray"
              type="text"
              placeholder="¿Qué quieres ver en tu ciudad?"
            />
            <button className="btn btn-success absolute right-[21px] top-[14px]">
              <Loupe />
            </button>
          </div>
        </div>
      </div>
      <div className="container lg:max-w-6xl m-auto md:mt-[101px]">
        {/* detalles */}
        <div></div>
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
          <EventSlider
            title="Recientes"
            subtitle="Las personas últimamente están hablando de esto"
            events={eventsMock}
          />
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
