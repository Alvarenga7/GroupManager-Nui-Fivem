interface ChangeLogEntry {
  id: number;
  name: string;
  action: "Entrou" | "Saiu";
  color: "green" | "red";
}

const changeLog: ChangeLogEntry[] = [
  {
    name: "Henrique Alvarenga",
    id: 35,
    action: "Entrou",
    color: "green",
  },

  {
    name: "Katherine Hayes",
    id: 40,
    action: "Saiu",

    color: "red",
  },
  {
    name: "Hester May",
    id: 86,
    action: "Entrou",

    color: "green",
  },
  {
    name: "Milton Lawrence",
    id: 44,
    action: "Saiu",

    color: "red",
  },
  {
    name: "Sylvia Schmidt",
    id: 7,
    action: "Entrou",

    color: "green",
  },
  {
    name: "Sylvia Schmidt",
    id: 8,
    action: "Saiu",

    color: "red",
  },
  {
    name: "Sylvia Schmidt",
    id: 23,
    action: "Entrou",

    color: "green",
  },
  {
    name: "Sylvia Schmidt",
    id: 75,
    action: "Saiu",

    color: "red",
  },
  {
    name: "Sylvia Schmidt",
    id: 85,
    action: "Saiu",

    color: "red",
  },
  {
    name: "Sylvia Schmidt",
    id: 23,
    action: "Saiu",

    color: "red",
  },
  {
    name: "Sylvia Schmidt",
    id: 75,
    action: "Saiu",

    color: "red",
  },
];

export function ChangeLog() {
  return (
    <div className="w-full px-3 space-y-1 overflow-y-auto max-h-80">
      {changeLog.map((entry, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-2 rounded-lg bg-listColor"
        >
          <div className="flex items-center gap-2">
            <span
              className={`h-4 w-[2px] rounded ${entry.color === "green" ? "bg-green-500" : "bg-red-500"}`}
            ></span>
            <span className="pl-2 text-xs font-bold text-white">
              {entry.name}
            </span>
            <span className="bg-buttonColor text-colorButton rounded px-2 py-0.5 text-xs font-bold">
              #{entry.id}
            </span>
          </div>
          <div className="text-sm font-semibold text-zinc-500/70">
            {entry.action}
          </div>
        </div>
      ))}
    </div>
  );
}
