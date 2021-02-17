const ButtonSecondary = ({ children, ...props }) => (
  <button
    type="button"
    className="transition duration-200 bg-secondary hover:bg-white text-white hover:text-secondary text-md font-extrabold py-3 px-16 rounded-xl shadow-xl"
    {...props}
  >
    {children}
  </button>
);

export default ButtonSecondary;
