import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/booking')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-2">
      <h3>Booking Page</h3>
    </div>
  )
}
