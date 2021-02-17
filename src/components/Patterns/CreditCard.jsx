const CreditCard = ({ src, ...props }) => (
  <div
    className="flex flex-col items-center justify-center gap-4 mx-auto w-2/5"
    {...props}
  >
    <img src={src} alt="" className="w-full max-w-sm" />
  </div>
);

const CreditCardDescription = ({ children, ...props }) => (
  <p
    className="text-sm italic text-center mx-auto max-w-md leading-relaxed"
    {...props}
  >
    {children}
  </p>
);

CreditCard.Description = CreditCardDescription;

export default CreditCard;
