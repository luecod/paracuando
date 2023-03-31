import { FC } from 'react';

type Step1Props = {
  register: any;
};

const Step1: FC<Step1Props> = ({ register }) => {
  return (
    <>
      <div className="w-full h-3 bg-gray-400 border rounded-full mb-16">
        <div className="bg-blue-700 h-full rounded-full w-1/2"></div>
      </div>
      <h2 className="font-bold text-2xl mb-1">Publicación</h2>
      <h3 className="mb-10 text-gray-500">Informacion básica</h3>
      <div className="relative mb-4 flex flex-col">
        <label
          className="absolute bg-white -top-2.5 left-2 ml-1 px-3 text-gray-500"
          htmlFor="titulo"
        >
          Título de publicación
        </label>
        <input
          className="w-full px-4 py-2 mb-4 border rounded-md border-gray-500"
          type="text"
          id="titulo"
          {...register('titulo')}
        />
      </div>
      <div className="relative mb-4 flex gap-5">
        <select
          className="block w-full px-4 py-2 mb-4 border rounded-md border-gray-500 text-gray-500"
          {...register('tipo')}
        >
          <option value="" className="hidden">
            Tipo
          </option>
          <option value="marcas y tiendas">Marcas y tiendas</option>
          <option value="artistas y conciertos">Artistas y conciertos</option>
          <option value="torneos">Torneos</option>
        </select>

        <select
          className="block w-full px-4 py-2 mb-4 border rounded-md border-gray-500 text-gray-500"
          {...register('categoria')}
        >
          <option value="" className="hidden">
            Categoria
          </option>
          <option value="Ropa y accesorios">Ropa y accesorios</option>
          <option value="Deportes">Deportes</option>
          <option value="Conciertos">Conciertos</option>
          <option value="Meet &amp; Greet">Meet &amp; Greet</option>
          <option value="E-sport">E-sport</option>
          <option value="Pop - Rock">Pop - Rock</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Hogar - Decoración">Hogar - Decoración</option>
          <option value="Abastecimiento">Abastecimiento</option>
        </select>
      </div>

      <div className="relative mb-4">
        <label className="absolute bg-white -top-2.5 left-2 ml-1 px-3 text-gray-500">
          ¿Por qué lo recomiendas?
        </label>
        <textarea
          className="block w-full h-32 px-4 py-2 border rounded-md border-gray-500 resize-none mb-7"
          {...register('recomiendas')}
        />
      </div>

      <div className="relative mb-4">
        <label className="absolute bg-white -top-2.5 left-2 ml-1 px-3 text-gray-500">
          Link de referencia
        </label>
        <input
          className="block w-full px-4 py-2 border rounded-md border-gray-500"
          type="text"
          {...register('referencia')}
        />
      </div>
    </>
  );
};

export default Step1;
