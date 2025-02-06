import { createFileRoute } from '@tanstack/react-router'
import { type Cargo, columns } from "../components/cargo/columns"
import { DataTable } from "../components/cargo/cargo-table"
import { useEffect, useState } from "react"


export const Route = createFileRoute('/cargo')({
  component: Cargo,
})

export default function Cargo() {
  const [data, setData] = useState<Cargo[]>([])
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
      <h1 className="text-2xl font-bold text-center">Upcoming Cargo</h1>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}


async function getData(): Promise<Cargo[]> {
  // Replace with API Calls
  return [
    {
      origin: "John Doe",
      bco: "BCO",
      bco_email: "Leidos",
      operator: "johndoe@leidos.com",
      operator_email: "1234567890",
      status: "Approved",
      //flag : false
    },

  ]
}