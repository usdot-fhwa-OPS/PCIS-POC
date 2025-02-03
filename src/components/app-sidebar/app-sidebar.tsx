import { FileUp, Home, Ship, User, Bell, CalendarClock } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../components/ui/sidebar"

import { Button } from "../ui/button";

import { useAuthenticator } from "@aws-amplify/ui-react";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Available Operators",
    url: "/operators",
    icon: User,
  },
  {
    title: "Import BAPLIE Data",
    url: "/import",
    icon: FileUp,
  },
  {
    title: "Upcoming Cargo",
    url: "/cargo",
    icon: Ship,
  },
  {
    title: "Booking Status",
    url: "/booking",
    icon: CalendarClock,
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
  },
]

export function AppSidebar() {
  const { signOut } = useAuthenticator();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>PCIS POC</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarFooter>
          <Button onClick={signOut} variant={"destructive"}>Sign out</Button>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  )
}
