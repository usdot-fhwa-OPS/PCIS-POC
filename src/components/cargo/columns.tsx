"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "../ui/badge"
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
  } from "@/components/ui/dropdown-menu"

export type Cargo = {
    origin: string
    bco: string
    bco_email: string
    operator: string
    operator_email: string
    status: "On Ship" | "On Dock" // updated to match dropdown menu options
    flag: boolean // added flag property
}

export const columns : ColumnDef<Cargo>[] = [
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