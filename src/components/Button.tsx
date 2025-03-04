interface ButtonProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

export const Button = ({ children, isSelected, onClick }: ButtonProps) => {
  return (
    <button
      className={`flex h-12 w-full items-center gap-2 rounded-xl px-5 ${isSelected ? "bg-[#262f4c] text-[#3f58d4]" : "bg-[#51545b] text-white"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
