import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="flex justify-center">
      <Image src={'/notFound.jpg'} alt="" height={381} width={451}></Image>
    </div>
  );
};

export default NotFound;
