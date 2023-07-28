interface IHamburgerProps {
  className: string;
  barColor: string;
  toggleTransition: boolean;
}

export default function Hamburger({
  className,
  barColor,
  toggleTransition,
}: IHamburgerProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div
        className={`w-full h-1 rounded-full transition-transform ${barColor} ${
          toggleTransition && "-translate-x-1"
        }`}
      ></div>
      <div
        className={`w-full h-1 rounded-full transition-transform ${barColor} ${
          toggleTransition && "translate-x-1"
        }`}
      ></div>
      <div
        className={`w-full h-1 rounded-full transition-transform ${barColor} ${
          toggleTransition && "-translate-x-1"
        }`}
      ></div>
    </div>
  );
}
