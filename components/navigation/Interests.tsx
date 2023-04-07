const Interests = () => {
  return (
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
  );
};

export default Interests;
