import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import '../App.css';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';
import { SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar/app-sidebar"
import UserButton from '../components/userButton/userButton';
import '../index.css';

interface UserAttributes {
  given_name?: string;
  family_name?: string;
  'custom:role'?: string;
}


export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    )
  },
})

function RootComponent() {
    const { user } = useAuthenticator();
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
            role: attributes['custom:role'] ?? 'No role assigned',
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
        <SidebarProvider>
            <AppSidebar />
            <main>
                <UserButton fullName={userAttributes.fullName} role={userAttributes.role} />
                <Outlet />
            </main>
        </SidebarProvider>
    )
}