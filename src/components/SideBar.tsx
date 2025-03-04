import { MdHome } from "react-icons/md";
import { Button } from "./Button";
import { TbBuildingBank, TbUsersGroup } from "react-icons/tb";
import { RiArchiveStackLine } from "react-icons/ri";
import image from "@/images/teste.jpg";
import { useState } from "react";

export function SideBar() {
  const [selected, setSelected] = useState<string | null>("Pagina Inicial");

  return (
    <div className="bg-terceary h-full w-[17vw] rounded-2xl border-2 border-solid border-primary">
      <div className="flex items-center gap-6 p-4">
        <h2 className="text-sm font-semibold uppercase text-white/40">
          Painel de grupos
        </h2>
        <div className="flex h-[2px] w-24 items-center justify-center rounded-2xl bg-white/10"></div>
      </div>
      <div className="mb-[320px] flex flex-col gap-3 p-4">
        <Button
          isSelected={selected === "Pagina Inicial"}
          onClick={() => setSelected("Pagina Inicial")}
        >
          <MdHome className="size-5" /> Pagina Inicial
        </Button>

        <Button
          isSelected={selected === "Membros"}
          onClick={() => setSelected("Membros")}
        >
          <TbUsersGroup className="size-5" />
          Membros
        </Button>

        <Button
          isSelected={selected === "Banco"}
          onClick={() => setSelected("Banco")}
        >
          <TbBuildingBank className="size-5" /> Banco
        </Button>

        <Button
          isSelected={selected === "Registros de baú"}
          onClick={() => setSelected("Registros de baú")}
        >
          <RiArchiveStackLine className="size-5" /> Registros de baú
        </Button>
      </div>
      <div className="flex h-16 gap-3 px-4 text-white">
        <img
          className="border border-solid rounded-lg border-primary"
          src={image}
          alt=""
        />
        <div className="flex flex-col mt-2 gap">
          <div className="flex w-full gap-2">
            <span className="flex items-center justify-center rounded bg-[#262f4c] px-1.5 text-sm font-semibold text-[#3f58d4]">
              #35
            </span>
            <span className="text-sm font-medium">Henrique Alvarenga</span>
          </div>
          <span className="text-sm font-normal opacity-50">Lider</span>
        </div>
      </div>
    </div>
  );
}
