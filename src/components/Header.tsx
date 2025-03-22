export function Header() {
  return (
    <div className="mb-4 max-h-[1000px] w-full space-y-5 overflow-y-auto px-4 py-3 text-white">
      <div className="flex items-center justify-between space-x-12 rounded-redondo border-[1px] border-solid border-white/5 bg-white/4 p-3 px-6 uppercase">
        <span>
          Time: <span className="text-red-500">5</span>
        </span>
        <span>
          Jogadores: <span className="text-red-500">5</span>
        </span>
      </div>
    </div>
  );
}
