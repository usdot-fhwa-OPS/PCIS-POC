import { createFileRoute } from '@tanstack/react-router'
import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';

export const Route = createFileRoute('/import')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="p-6">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold tracking-tight">How to import BAPLIE DATA</h1>
        <ol className="mt-6 space-y-4 list-decimal list-inside text-sm">
          <li>Locate your BAPLIE file on your computer (ensure it&apos;s in .edi or .txt format).</li>
          <li>Drag and drop the file into the upload area or click &quot;Select File&quot; to browse for it.</li>
          <li>Ensure the file name appears in the list with a success indicator.</li>
          <li>Click &quot;Process Data&quot; to validate and import the dataset.</li>
        </ol>

        <div className="mt-8">
          <h2 className="text-xl font-semibold tracking-tight">Start Import BAPLIE DATA</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Upload and process your BAPLIE file for your container planning and management.
          </p>
          <FileUploader
            acceptedFileTypes={[
              '.csv',
            ]}
            path="stowPlans/"
            maxFileCount={1}
            isResumable
          />
        </div>
      </div>
    </main>
  )
}
