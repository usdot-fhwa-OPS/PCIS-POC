import './App.css'
import { useAuthenticator } from '@aws-amplify/ui-react';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';

function App() {
  const { user, signOut } = useAuthenticator();
  const [userAttributes, setUserAttributes] = useState({ name: '', role: '' });
  
  useEffect(() => {
    const getUserAttributes = async () => {
      try {
        const attributes = await fetchUserAttributes();
        setUserAttributes({
          name: attributes.name || 'Unknown',
          role: attributes['custom:role'] || 'No role assigned',
        });
      } catch (error) {
        console.error('Error fetching user attributes:', error);
      }
    };

    if (user) {
      getUserAttributes();
    }
  }, [user]);

  return (
    <>
      <main>
      <h2>Welcome, {userAttributes.name}</h2>
      <p>Role: {userAttributes.role}</p>
        <button onClick={signOut}>Sign out</button>
      </main>
    </>
  )
}

export default App
