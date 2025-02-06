import { createFileRoute } from '@tanstack/react-router'
import { User, columns } from "../components/users/columns"
import { DataTable } from "../components/users/users-table"
import { useEffect, useState } from "react"


export const Route = createFileRoute('/operators')({
  component: Operators,
})

export default function Operators() {
  const [data, setData] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const result = await getData()
      setData(result)
      setLoading(false)
    }
    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Available Users</h1>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}


async function getData(): Promise<User[]> {
  // Replace with API Calls
  return [
    {
      name: "John Doe",
      role: "BCO",
      organization: "Leidos",
      email: "johndoe@leidos.com",
      phone: "123-456-7890",
      status: "Approved"
    },
    {
      name: "Bob Doe",
      role: "BCO",
      organization: "Port Authority NYNJ",
      email: "bobdoe@panynj.com",
      phone: "123-456-7890",
      status: "Approved"
    },
    {
      name: "Adam Smith",
      role: "BCO",
      organization: "Port of Virginia",
      email: "adamsmith@portva.com",
      phone: "123-456-7890",
      status: "Approved"
    },
    {
      name: "Jane Wilson",
      role: "BCO",
      organization: "CSX",
      email: "janewilson@csx.com",
      phone: "123-456-7890",
      status: "Approved"
    },

  ]
}

