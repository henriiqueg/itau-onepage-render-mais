const Title = ({ children, ...props }) => (
  <h2 className="font-bold text-2xl mx-auto text-center" {...props}>
    {children}
  </h2>
);

export default Title;
