import SearchBar from '../SearchBar';
export function Footer() {
  return (
    <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/footer-banner.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
      <SearchBar />
    </div>
  );
}
