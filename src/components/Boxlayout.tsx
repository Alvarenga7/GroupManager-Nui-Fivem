interface BoxlayoutProps {
  children: React.ReactNode;
}

export const Boxlayout = ({ children }: BoxlayoutProps) => {
  return (
    <div className="flex w-[10vw] items-center justify-center gap-2 rounded-lg bg-[#262f4c] py-3 text-sm font-semibold uppercase text-[#3f58d4]">
      {children}
    </div>
  );
};
