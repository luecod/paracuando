import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Step1 from '../../../components/forms/Step1';
import Step2 from '../../../components/forms/Step2';

type FormData = {
  titulo: string;
  tipo: string;
  categoria: string;
  recomiendas: string;
  referencia: string;
  image1: FileList;
  image2: FileList;
  image3: FileList;
};

const CreatePostPage = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [currentStep, setCurrentStep] = useState(1);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const backStep = () => {
    setCurrentStep(1);
  };

  return (
    <div className="flex flex-wrap-wrap">
      <div className="flex flex-col justify-evenly items-center w-1/6 h-screen bg-blue-700">
        <div>
          <Image
            src="/Frame.png"
            alt="logo"
            width={150}
            height={127}
            className="w-36 h-auto"
          />
          <Image
            src="/Group.png"
            alt="marcas"
            width={150}
            height={130}
            className="w-36 h-auto"
          />
        </div>

        <div className="px-10 flex flex-col gap-10">
          <h2 className="text-yellow-300 font-bold text-3xl">
            ¡Bienvenido, creador!
          </h2>
          <p className="text-white text-xl">
            A continuacion puedes completar la info de la marca, artista o
            torneo que quieres cerca
          </p>
        </div>

        <Link href="" className="relative top-20 right-20 text-white">
          Ayuda
        </Link>
      </div>
      <div className="relative flex flex-col items-center justify-around w-5/6 h-screen">
        {currentStep === 1 && (
          <Link
            href="/profile"
            className="text-blue-700 text-2xl absolute top-10 left-16"
          >
            Back
          </Link>
        )}
        {currentStep === 2 && (
          <a
            className="text-blue-700 text-2xl absolute top-10 left-16 cursor-pointer"
            onClick={backStep}
          >
            Back
          </a>
        )}
        <form
          className="w-full max-w-3xl  mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          {currentStep === 1 && <Step1 register={register} />}
          {currentStep === 2 && <Step2 register={register} />}
          {currentStep === 1 && (
            <div className="flex justify-center mt-10">
              <button
                className="block w-130 px-6 py-3 font-bold text-white bg-blue-700 rounded-full hover:bg-blue-900"
                type="button"
                onClick={nextStep}
              >
                Siguiente
              </button>
            </div>
          )}
          {currentStep === 2 && (
            <div className="flex justify-center mt-10">
              <button
                className="block w-130 px-6 py-3 font-bold text-white bg-blue-700 rounded-full hover:bg-blue-900"
                type="submit"
              >
                Publicar
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
