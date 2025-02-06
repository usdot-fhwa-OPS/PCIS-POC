"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "../ui/badge"
import { Flag } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"

export type Cargo = {
    origin : string
    bco : string
    bco_email : string
    operator : string
    operator_email : string
    status : "Approved" //change this to dropdown menu
    //flag : boolean //change this to something idk
}

export const columns : ColumnDef<Cargo>[] = [
    {
        accessorKey: "origin",
        header: () => <div className="text-center">Name</div>,
    },
    {
        accessorKey: "bco",
        header: () => <div className="text-center">Role</div>,
    },
    {
        accessorKey: "bco_email",
        header: () => <div className="text-center">Organization</div>,
    },
    {
        accessorKey: "operator",
        header: () => <div className="text-center">Email</div>,
    },
    {
        accessorKey: "operator_email",
        header: () => <div className="text-center">Phone Number</div>,
    },
    {
        accessorKey: "status",
        header: () => <div className="text-center">Status</div>,
        cell: () => { 
            return <Badge variant="outline">Approved</Badge>
        },
    },
    // {
    //     accessorKey: "flag",
    //     header: () => <div className="text-center">Flag</div>,
    //     cell: (row) => {
    //         const [flagged, setFlagged] = useState(false)

    //         return (
    //             <Button 
    //             variant="ghost" 
    //             onClick={() => setFlagged((prev) => !prev)}
    //             className="p-2"
    //             >
    //             <Flag className={flagged ? "text-red-600" : "text-gray-400"} />
    //             </Button>
    //         )
    //     },
    // },
]