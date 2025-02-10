import { DataTable } from "./data-table.tsx";
import { columns,CompletedColumn } from "./columns";

interface TerminalBookingsTableProps {
  data: any[];
  status: string;
}

export function TerminalBookingsTable({ data, status }: TerminalBookingsTableProps) {
  return (
    <div className="container mx-auto p-10">
      <DataTable columns={columns(status)} data={data} />
    </div>
  );
}

  export function TerminalBookingsCompleted({ data}: TerminalBookingsTableProps) {
    return (
      <div className="container mx-auto p-10">
        <DataTable columns={CompletedColumn()} data={data} />
      </div>
    );

}
