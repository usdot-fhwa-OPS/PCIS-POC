import { useState } from 'react'
import './App.css'
import { useAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const [count, setCount] = useState(0)
  const { signOut } = useAuthenticator();
  
  return (
    <>
      <main>
        <button onClick={signOut}>Sign out</button>
      </main>
    </>
  )
}

export default App
