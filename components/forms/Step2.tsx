import Image from 'next/image';

import { FC, useState } from 'react';

type Step2Props = {
  register: any;
};

const Step2: FC<Step2Props> = ({ register }) => {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.getAttribute('data-index'));
    const selectedFiles = Array.from(e.target.files || []);
    const urls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => {
      const copy = [...prev];
      copy[index] = urls[0];
      return copy;
    });
  };

  return (
    <>
      <div className="w-full h-3 bg-blue-700 border rounded-full mb-16">
        <div className="bg-gray-400 h-full rounded-full w-1/2"></div>
      </div>
      <h2 className="font-bold text-2xl mb-1">Fotos</h2>
      <h3 className="mb-10 text-gray-500">
        Selecciona máximo tres fotos para crear una galería
      </h3>
      <div className="flex justify-between items-center gap-6 px-6 py-6 border rounded-xl border-gray-500">
        <label className="relative bg-gray-300 hover:bg-gray-200 p-4 rounded-xl cursor-pointer w-1/2 h-64">
          <span className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </span>
          <input
            type="file"
            {...register('image1')}
            data-index={0}
            onChange={handleImageChange}
            className="hidden"
          />
          {previewUrls[0] && (
            <Image
              src={previewUrls[0]}
              alt="Preview"
              width={180}
              height={256}
              className="w-auto h-auto"
            />
          )}
        </label>
        <label className="relative bg-gray-300 hover:bg-gray-200 p-4 rounded-xl cursor-pointer w-1/2 h-64">
          <span className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </span>
          <input
            type="file"
            {...register('image2')}
            data-index={1}
            onChange={handleImageChange}
            className="hidden"
          />
          {previewUrls[1] && (
            <Image
              src={previewUrls[1]}
              alt="Preview"
              width={180}
              height={256}
              className="w-auto h-auto"
            />
          )}
        </label>
        <label className="relative bg-gray-300 hover:bg-gray-200 p-4 rounded-xl cursor-pointer w-1/2 h-64">
          <span className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </span>
          <input
            type="file"
            {...register('image3')}
            data-index={2}
            onChange={handleImageChange}
            className="hidden"
          />
          {previewUrls[2] && (
            <Image
              src={previewUrls[2]}
              alt="Preview"
              width={180}
              height={256}
              className="w-auto h-auto"
            />
          )}
        </label>
      </div>
    </>
  );
};

export default Step2;
