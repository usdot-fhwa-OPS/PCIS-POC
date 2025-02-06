"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "../ui/badge"

export type User = {
    name : string
    role : string
    organization : string
    email : string
    phone : string
    status : "Approved"
}

export const columns : ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: () => <div className="text-center">Name</div>,
    },
    {
        accessorKey: "role",
        header: () => <div className="text-center">Role</div>,
    },
    {
        accessorKey: "organization",
        header: () => <div className="text-center">Organization</div>,
    },
    {
        accessorKey: "email",
        header: () => <div className="text-center">Email</div>,
    },
    {
        accessorKey: "phone",
        header: () => <div className="text-center">Phone Number</div>,
    },
    {
        accessorKey: "status",
        header: () => <div className="text-center">Status</div>,
        cell: () => { 
            return <Badge variant="outline">Approved</Badge>
        },
    },   
]