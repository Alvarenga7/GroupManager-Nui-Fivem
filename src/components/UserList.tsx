interface User {
  name: string;
  id: number;
  role: string;
  date?: string;
  color: "green" | "red";
}

const users: User[] = [
  {
    name: "Henrique Alvarenga",
    id: 35,
    role: "Lider",
    color: "green",
  },

  {
    name: "Katherine Hayes",
    id: 40,
    role: "Gerente",
    date: "10/25/2070 às 12:30",
    color: "green",
  },
  {
    name: "Hester May",
    id: 86,
    role: "Gerente",
    date: "4/12/2079 às 12:30",
    color: "green",
  },
  {
    name: "Milton Lawrence",
    id: 44,
    role: "Membro",
    date: "12/4/2077 às 12:30",
    color: "green",
  },
  {
    name: "Sylvia Schmidt",
    id: 7,
    role: "Convidado",
    date: "3/17/2093 às 12:30",
    color: "red",
  },
  {
    name: "Sylvia Schmidt",
    id: 8,
    role: "Convidado",
    date: "3/17/2093 às 12:30",
    color: "red",
  },
  {
    name: "Sylvia Schmidt",
    id: 23,
    role: "Convidado",
    date: "3/17/2093 às 12:30",
    color: "red",
  },
  {
    name: "Sylvia Schmidt",
    id: 75,
    role: "Convidado",
    date: "3/17/2093 às 12:30",
    color: "red",
  },
];

export function UserList() {
  return (
    <div className="max-h-[340px] w-full space-y-1 overflow-y-auto px-3 text-white">
      {users.map((user, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 border-2 border-solid rounded-lg bg-listColor border-secondary"
        >
          <div className="flex items-center gap-2">
            <span
              className={`h-4 w-[2px] rounded ${user.color === "green" ? "bg-green-500" : "bg-red-500"}`}
            ></span>
            <span className="pl-2 font-bold">{user.name}</span>
            <span className="bg-buttonColor text-colorButton rounded px-2 py-0.5 text-xs font-bold">
              #{user.id}
            </span>
          </div>
          <div className="text-sm font-semibold text-zinc-500/70">
            {user.role} {user.date && `• ${user.date}`}
          </div>
        </div>
      ))}
    </div>
  );
}
