import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/operators')({
  component: Operators,
})

function Operators() {
  return (
    <div className="p-2">
      <h3>Operators Page</h3>
    </div>
  )
}
