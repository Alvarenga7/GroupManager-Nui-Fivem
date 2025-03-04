import { ChangeLog } from "./ChangeLogs";
import { SideBar } from "./SideBar";
import { TotalCount } from "./TotalCount";
import { UserList } from "./UserList";

export function Paineis() {
  return (
    <div className="flex h-[800px] w-[1295px] items-center justify-center rounded-redondo border border-solid border-primary bg-primary p-8">
      <div className="flex w-full h-full gap-4 p-4 border border-solid rounded-3xl border-primary bg-secondary">
        <SideBar />
        <div className="flex flex-col flex-1 h-full gap-4">
          <TotalCount />
          <div className="flex h-full gap-4">
            <div className="flex flex-col w-full border border-solid rounded-lg bg-terceary border-primary">
              <header className="flex flex-col w-full px-6 py-8 text-white">
                <h2 className="text-xl">LISTA DE MEMBROS</h2>
                <p className="font-normal opacity-40">
                  Veja mais abaixo a lista de membros do grupo, deslize para ver
                  mais
                </p>
              </header>
              <div className="px-3">
                <UserList />
              </div>
            </div>
            <div className="w-1/2 text-white border border-solid rounded-lg bg-terceary border-primary">
              <header className="w-full p-5 text-xl">
                <h3>CHANGE-LOGS</h3>
                <span className="text-sm font-normal opacity-40">
                  Saidas/entradas da sua organização
                </span>
              </header>
              <ChangeLog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
