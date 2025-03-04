import { GiAncientColumns } from "react-icons/gi";
import { Boxlayout } from "./Boxlayout";
import { ImDatabase } from "react-icons/im";
import { TbUsersGroup } from "react-icons/tb";

export function TotalCount() {
  return (
    <div className="bg-terceary flex h-[15vw] w-full items-center justify-evenly gap-10 rounded-2xl border-2 border-solid border-primary px-8 py-6">
      <div className="flex flex-col items-center gap-2 p-2 px-6 text-center text-white">
        <Boxlayout>
          <TbUsersGroup className="size-5" />
          Membros Online
        </Boxlayout>
        <span className="text-4xl font-bold">30</span>
        <p className="text-sm font-medium opacity-50">
          Números de membros online
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 p-2 px-6 text-center text-white">
        <Boxlayout>
          <GiAncientColumns className="size-5" />
          Vagas Disponiveis
        </Boxlayout>
        <span className="text-4xl font-bold">10</span>
        <p className="text-sm font-medium opacity-50">
          Número de vagas disponíveis
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 p-2 px-6 text-center text-white">
        <Boxlayout>
          <ImDatabase className="size-4" />
          Membros Totais
        </Boxlayout>
        <span className="text-4xl font-bold">40</span>
        <p className="text-sm font-medium opacity-50">
          Números de membros totais
        </p>
      </div>
    </div>
  );
}
