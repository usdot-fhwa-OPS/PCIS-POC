import './App.css';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';
import UserButton from './components/userButton/userButton';

interface UserAttributes {
  given_name?: string;
  family_name?: string;
  'custom:role'?: string;
}

function App() {
  const { user, signOut } = useAuthenticator();
  const [userAttributes, setUserAttributes] = useState<{ fullName: string; role: string }>({ fullName: '', role: '' });
  
  useEffect(() => {
    const getUserAttributes = async () => {
      try {
        const attributes: UserAttributes = await fetchUserAttributes();
        
        const fullName = attributes.given_name && attributes.family_name
          ? `${attributes.given_name} ${attributes.family_name}`
          : 'Unknown';

        setUserAttributes({
          fullName,
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
        <UserButton fullName={userAttributes.fullName} role={userAttributes.role} />
        <button onClick={signOut} style={{ marginTop: '20px' }}>Sign out</button>
      </main>
    </>
  );
}

export default App;
