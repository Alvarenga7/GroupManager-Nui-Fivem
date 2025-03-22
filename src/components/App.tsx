// import { SideBar } from "./SideBar";
// import { TotalCount } from "./TotalCount";
// import { UserList } from "./UserList";

import { Header } from "./Header";
import { UserList } from "./UserList";

export function Paineis() {
  return (
    <div className="flex h-[420px] w-[640px] flex-col items-center justify-center rounded-redondo bg-primary/85 p-1">
      <Header />
      <UserList />
    </div>
  );
}
