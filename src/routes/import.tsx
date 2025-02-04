import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/import')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-2">
      <h3>Import BAPLIE Page</h3>
    </div>
  )
}
