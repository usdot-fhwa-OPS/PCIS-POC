import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button.tsx";
import { useState } from "react";
import { Flag } from "lucide-react";


export const columns = (status: string): ColumnDef<any>[] => {
  const baseColumns: ColumnDef<any>[] = [

    { accessorKey: "vesselId", header: "Vessel ID" },
    { accessorKey: "containerId", header: "Container ID" },
    { accessorKey: "origin", header: "Origin" },
    { accessorKey: "bco", header: "BCO" },
    { accessorKey: "operator", header: "Transportation Operator" },
    { accessorKey: "date", header: "Date Requested" },
    { accessorKey: "time", header: "Time Requested" },

  ];



  if (status === "Requested") {
    baseColumns.push({
      accessorKey: "status",
      header: () => <div style={{ minWidth: "200px", textAlign: "center" }}>Status</div>,
      cell: () => (
        <div className="flex space-x-8 ">
          <Button variant="outline" className="text-green-700">
  Approve
</Button>

          <Button variant="destructive">Deny</Button>
        </div>
      ),
      
    });
    
  }

  if (status === "Ongoing") {
    baseColumns.push({
      accessorKey: "status",
      header: " Status",
      cell: ({ row }) => {
        const status = row.original.status; // Get status value
        const isLate = status === "Late"; // Check if status is "Late"

        return (
          <span className={`px-2 py-1 rounded-md ${isLate ? "bg-red-500 text-white" : "bg-gray-200"}`}>
            {status}
          </span>
        );
      },
    },);

  }





// Clickable Flag Component
const FlagComponent = ({ initialFlagged = false }) => {
  const [flagged, setFlagged] = useState(initialFlagged);

  return (
    <Button
      onClick={() => setFlagged(!flagged)}
      variant="ghost"
      className={`flex items-center space-x-2 ${flagged ? "text-red-500" : "text-gray-500"}`}
    >
      <Flag className={`w-5 h-5 ${flagged ? "fill-red-500 stroke-red-500" : "stroke-gray-500"}`} />
    </Button>
  );
};

baseColumns.push({
  accessorKey: "flag",
  header: () => <div style={{ minWidth: "200px", textAlign: "center" }}>Flag</div>,
  cell: ({ row }) => (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
      <FlagComponent initialFlagged={row.original.flagged} />
    </div>
  ),
});
  return baseColumns;
};



export const CompletedColumn = (): ColumnDef<any>[] => {
  const baseColumns1: ColumnDef<any>[] = [
    { accessorKey: "vesselId", header: "Vessel ID" },
    { accessorKey: "containerId", header: "Container ID" },
    { accessorKey: "origin", header: "Origin" },
    { accessorKey: "bco", header: "BCO" },
    { accessorKey: "operator", header: "Transportation Operator" },
    { accessorKey: "date_init", header: "Date Initiated" },
    { accessorKey: "date_approved", header: "Date Approved" },
    { accessorKey: "date_picked", header: "Date Picked Up" },
    {
      accessorKey: "status",
      header: "Booking Status",
      cell: ({ row }) => {
        const status = row.original.status; // Get status value
        const isLate = status === "Late"; // Check if status is "Late"

        return (
          <span className={`px-2 py-1 rounded-md ${isLate ? "bg-red-500 text-white" : "bg-gray-200"}`}>
            {status}
          </span>
        );
      },
    },

  ];



 




// Clickable Flag Component
const FlagComponent = ({ initialFlagged = false }) => {
  const [flagged, setFlagged] = useState(initialFlagged);

  return (
    <Button
      onClick={() => setFlagged(!flagged)}
      variant="ghost"
      className={`flex items-center space-x-2 ${flagged ? "text-red-500" : "text-gray-500"}`}
    >
      <Flag className={`w-5 h-5 ${flagged ? "fill-red-500 stroke-red-500" : "stroke-gray-500"}`} />
    </Button>
  );
};

baseColumns1.push({
  accessorKey: "flag",
  header: () => <div style={{ minWidth: "200px", textAlign: "center" }}>Flag</div>,
  cell: ({ row }) => (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
      <FlagComponent initialFlagged={row.original.flagged} />
    </div>
  ),
});
  return baseColumns1;
};

