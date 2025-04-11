interface buttonProps {
  varient?: "white" | "blue";
  child: string;
  onClick?: () => void;
}
export const Button = ({ child, onClick, varient = "white" }: buttonProps) => {
  const variantClasses = {
    white:
      "bg-white  rounded-[10px] text-Primary-Blue-30 w-fit px-[31px] py-[12px] text-[16px] font-normal",
    blue: "bg-Primary-Blue-30 rounded-[10px] text-Natural-Gray-100 w-fit px-[31px] py-[12px] text-[16px] font-normal",
  };
  return (
    <section>
      <button
        onClick={onClick}
        className={`w-fit flex items-center justify-center ${variantClasses[varient]}`}
      >
        {child}
      </button>
    </section>
  );
};
