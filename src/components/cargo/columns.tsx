"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Flag } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../ui/dropdown-menu"

export type Cargo = {
    vesselID : number
    containerID : string
    origin: string
    bco: string
    bco_email: string
    operator: string
    operator_email: string
    status: "On Ship" | "On Dock"
    flag: boolean
}

export const columns : ColumnDef<Cargo>[] = [
    {
        accessorKey: "vesselID",
        header: () => <div className="text-center">Vessel ID</div>,
    },
    {
        accessorKey: "containerID",
        header: () => <div className="text-center">Container ID</div>,
    },
    {
        accessorKey: "origin",
        header: () => <div className="text-center">Origin</div>,
    },
    {
        accessorKey: "bco",
        header: () => <div className="text-center">BCO</div>,
    },
    {
        accessorKey: "bco_email",
        header: () => <div className="text-center">BCO Email</div>,
    },
    {
        accessorKey: "operator",
        header: () => <div className="text-center">Transportation Operator</div>,
    },
    {
        accessorKey: "operator_email",
        header: () => <div className="text-center">Transportation Operator Email</div>,
    },
    {
        accessorKey: "status",
        header: () => <div className="text-center">Cargo Status</div>,
        cell: () => { 
            const [status, setStatus] = useState("Cargo Status")

            return (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">{status}</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Cargo Status</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={status} onValueChange={setStatus}>
                      <DropdownMenuRadioItem value="On Ship">On Ship</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="On Dock">On Dock</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
    {
        accessorKey: "flag",
        header: () => <div className="text-center">Flag</div>,
        cell: () => {
            const [flagged, setFlagged] = useState(false)

            return (
                <Button 
                variant="ghost" 
                onClick={() => setFlagged((prev) => !prev)}
                className="p-2"
                >
                <Flag className={flagged ? "text-red-600" : "text-gray-400"} />
                </Button>
            )
        },
    },
]