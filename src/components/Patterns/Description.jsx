const Description = ({ children, ...props }) => (
  <p className="text-lg text-center mx-auto max-w-md" {...props}>
    {children}
  </p>
);

export default Description;
