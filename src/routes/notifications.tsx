import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/notifications')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-2">
      <h3>Notification Page</h3>
    </div>
  )
}
