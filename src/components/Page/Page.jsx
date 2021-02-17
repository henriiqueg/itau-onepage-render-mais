const Page = ({ children }) => (
  <div
    className="min-h-screen relative flex flex-col gap-8 items-center
    justify-center max-w-screen-md py-8 px-6 w-screen md:pt-0"
  >
    {children}
  </div>
);

export default Page;
