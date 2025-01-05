const BurgerButton = ({onClick}) => {
  return (
    <div className="tablet:flex items-center hidden">
      <button onClick={onClick} className="tablet:block relative hidden h-5 w-8">
        <span className="absolute left-0 top-0 h-[2px] w-4/6 bg-white"></span>
        <span className="absolute left-0 top-1/2 h-[2px] w-full bg-white"></span>
        <span className="absolute top-full left-0 h-[2px] w-4/6 bg-white"></span>
      </button>
    </div>
  );
};

export default BurgerButton;
