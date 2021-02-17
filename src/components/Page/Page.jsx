import vendaMaisLogo from 'assets/img/logo-venda-mais.png';

const Page = ({ children, ...props }) => (
  <div
    className="min-h-screen relative flex flex-col gap-8 items-center
    justify-center max-w-screen-md pb-8 px-6 w-screen pt-32 md:pt-0"
  >
    <img
      className="w-full absolute top-7 left-1/2 transform -translate-x-2/4 "
      style={{ maxWidth: '150px' }}
      src={vendaMaisLogo}
      alt="Venda Mais Logo"
      {...props}
    />
    {children}
  </div>
);

export default Page;
