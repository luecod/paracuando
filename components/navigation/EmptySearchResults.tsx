import Image from 'next/image';

const EmptySearchResults = () => {
  return (
    <div className="flex flex-col items-center justify-center my-4">
      <h2 className="app-title-2">No se encontró Resultados</h2>
      <Image
        className="mt-4"
        src={'/no-hay-resultados.png'}
        alt=""
        height={181}
        width={251}
        // height={381}
        // width={451}
      ></Image>
    </div>
  );
};

export default EmptySearchResults;
