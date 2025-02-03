import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cargo')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-2">
      <h3>Cargo Page</h3>
    </div>
  )
}
