const Icon = ({ src, alt = '', ...props }) => (
  <img
    className="w-full max-w-lg w-"
    style={{ maxWidth: '150px' }}
    src={src}
    alt={alt}
    {...props}
  />
);

export default Icon;
