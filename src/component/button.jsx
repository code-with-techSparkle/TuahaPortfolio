import clsx from "clsx";


const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before hover:g4 overflow-hidden">
        <span className="absolute -left-[1px] ">
          
        </span>
        {icon && (
          <img
            src={icon}
            alt="cicle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase ">
          {children}
        </span>
      </span>

      <span className="glow-before glow-after"></span>
    </>
  );
  return href ? (
    <a
      className={clsx(
        "relative p-0.5 hover:g15 rounded-2xl shadow-500 ",
        containerClassName
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 hover:g15 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};
export default Button;
