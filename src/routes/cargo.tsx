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
      vesselID: 456,
      containerID: "HM-7829",
      origin: "Boston",
      bco: "John Doe",
      bco_email: "johndoe@leidos.com",
      operator: "Person1",
      operator_email: "person1@shipping.com",
      status: "On Ship",
      flag : false
    },
    {
      vesselID: 1236,
      containerID: "US-198",
      origin: "Shanghai",
      bco: "BCO",
      bco_email: "Leidos",
      operator: "johndoe@leidos.com",
      operator_email: "1234567890",
      status: "On Ship",
      flag : false
    },
    {
      vesselID: 456,
      containerID: "123456",
      origin: "John Doe",
      bco: "BCO",
      bco_email: "Leidos",
      operator: "johndoe@leidos.com",
      operator_email: "1234567890",
      status: "On Ship",
      flag : false
    },
    {
      vesselID: 456,
      containerID: "GM-267",
      origin: "John Doe",
      bco: "BCO",
      bco_email: "Leidos",
      operator: "johndoe@leidos.com",
      operator_email: "1234567890",
      status: "On Ship",
      flag : false
    },
    {
      vesselID: 456,
      containerID: "HM-11",
      origin: "John Doe",
      bco: "BCO",
      bco_email: "Leidos",
      operator: "johndoe@leidos.com",
      operator_email: "1234567890",
      status: "On Ship",
      flag : false
    },

  ]
}