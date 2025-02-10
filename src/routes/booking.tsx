import { createFileRoute } from '@tanstack/react-router'
import {TerminalBookingsTable,TerminalBookingsCompleted} from "../components/terminal-bookings/terminal-bookings-table.tsx"
import {TransportationBookingsTableUpcoming,  TransportationBookingsTableCompleted,TransportationBookingsTableOngoing} from "../components/transportation_bookings/transportation-bookings-table.tsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs.tsx"
import { fetchUserAttributes } from 'aws-amplify/auth';
import { useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";

export const Route = createFileRoute('/booking')({
  component: RouteComponent,
})


const Terminal_RequestedData = [
  { vesselId: "1", containerId: "HM-263", origin: "Canada", bco: "WB", bco_email: "jd@gmail.com", operator: "Emma", operator_email: "james@gmail.com", date: "23 March 2024", time: "1:00pm", status: "Scheduled for Pickup" },
  { vesselId: "2", containerId: "HM-155", origin: "Germany", bco: "WB", bco_email: "sm@gmail.com", operator: "James", operator_email: "sarah@gmail.com", date: "21 March 2024", time: "10:00am", status: "Late" },
  { vesselId: "3", containerId: "HM-749", origin: "China", bco: "SM", bco_email: "sm@gmail.com", operator: "Emma", operator_email: "daniel@gmail.com", date: "21 March 2024", time: "3:45pm", status: "Scheduled for Pickup" },
  { vesselId: "4", containerId: "HM-569", origin: "China", bco: "LK", bco_email: "jd@gmail.com", operator: "Michael", operator_email: "daniel@gmail.com", date: "21 March 2024", time: "1:00pm", status: "Scheduled for Pickup" },
  { vesselId: "5", containerId: "HM-663", origin: "Mexico", bco: "WB", bco_email: "rt@gmail.com", operator: "Emma", operator_email: "emma@gmail.com", date: "24 March 2024", time: "10:00am", status: "Scheduled for Pickup" },
  { vesselId: "6", containerId: "HM-360", origin: "Canada", bco: "RT", bco_email: "wb@gmail.com", operator: "Emma", operator_email: "daniel@gmail.com", date: "23 March 2024", time: "11:30am", status: "Scheduled for Pickup" },
  { vesselId: "7", containerId: "HM-704", origin: "Mexico", bco: "RT", bco_email: "sm@gmail.com", operator: "Emma", operator_email: "daniel@gmail.com", date: "22 March 2024", time: "1:00pm", status: "Scheduled for Pickup" },
  { vesselId: "8", containerId: "HM-657", origin: "USA", bco: "SM", bco_email: "lk@gmail.com", operator: "Michael", operator_email: "emma@gmail.com", date: "23 March 2024", time: "3:45pm", status: "Late" },
  { vesselId: "9", containerId: "HM-694", origin: "Canada", bco: "LK", bco_email: "wb@gmail.com", operator: "Michael", operator_email: "james@gmail.com", date: "23 March 2024", time: "10:00am", status: "Scheduled for Pickup" },
  { vesselId: "10", containerId: "HM-279", origin: "Germany", bco: "LK", bco_email: "rt@gmail.com", operator: "Emma", operator_email: "james@gmail.com", date: "24 March 2024", time: "1:00pm", status: "Scheduled for Pickup" }
];

const Terminal_OngoingData = [
  { vesselId: "1", containerId: "HM-266", origin: "Canada", bco: "WB", bco_email: "sm@gmail.com", operator: "Sarah", operator_email: "michael@gmail.com", date: "23 March 2024", time: "3:45pm", status: "Late" },
  { vesselId: "2", containerId: "HM-431", origin: "USA", bco: "JD", bco_email: "jd@gmail.com", operator: "Daniel", operator_email: "sarah@gmail.com", date: "22 March 2024", time: "10:00am", status: "Scheduled for Pickup" },
  { vesselId: "3", containerId: "HM-785", origin: "Mexico", bco: "RT", bco_email: "lk@gmail.com", operator: "Sarah", operator_email: "emma@gmail.com", date: "21 March 2024", time: "1:00pm", status: "Late" },
  { vesselId: "4", containerId: "HM-262", origin: "Germany", bco: "WB", bco_email: "jd@gmail.com", operator: "James", operator_email: "emma@gmail.com", date: "21 March 2024", time: "1:00pm", status: "Scheduled for Pickup" },
  { vesselId: "5", containerId: "HM-903", origin: "Canada", bco: "JD", bco_email: "lk@gmail.com", operator: "Daniel", operator_email: "emma@gmail.com", date: "24 March 2024", time: "11:30am", status: "Late" },
  { vesselId: "6", containerId: "HM-960", origin: "USA", bco: "JD", bco_email: "lk@gmail.com", operator: "Michael", operator_email: "emma@gmail.com", date: "21 March 2024", time: "3:45pm", status: "Scheduled for Pickup" }
];


const Terminal_CompletedData = [
  { vesselId: "1", containerId: "HM-22", origin: "Canada", bco: "WB", bco_email: "wb@gmail.com", operator: "James", operator_email: "sarah@gmail.com", date_init: "22 March 2024", date_approved: "24 March 2024", status: "Picked Up", date_picked: "23 March 2024", time: "10:00am" },
  { vesselId: "2", containerId: "US-45", origin: "USA", bco: "RT", bco_email: "wb@gmail.com", operator: "James", operator_email: "daniel@gmail.com", date_init: "23 March 2024", date_approved: "23 March 2024", status: "Picked Up", date_picked: "24 March 2024", time: "3:45pm" },
  { vesselId: "3", containerId: "M-35", origin: "Mexico", bco: "WB", bco_email: "wb@gmail.com", operator: "Sarah", operator_email: "emma@gmail.com", date_init: "22 March 2024", date_approved: "23 March 2024", status: "Picked Up", date_picked: "24 March 2024", time: "1:00pm" },
  { vesselId: "4", containerId: "CH-44", origin: "China", bco: "LK", bco_email: "lk@gmail.com", operator: "Emma", operator_email: "james@gmail.com", date_init: "2 March 2024", date_approved: "23 March 2024", status: "Picked Up", date_picked: "23 March 2024", time: "11:30am" }
];

const Transportation_RequestedData = [
  { vesselId: "1", containerId: "HM-263", origin: "Canada", bco: "WB", bco_email: "jd@gmail.com", operator: "Emma", operator_email: "james@gmail.com", date: "23 March 2024", time: "1:00pm", status: "Scheduled for Pickup" },
  { vesselId: "2", containerId: "HM-155", origin: "Germany", bco: "WB", bco_email: "sm@gmail.com", operator: "James", operator_email: "sarah@gmail.com", date: "21 March 2024", time: "10:00am", status: "Late" },
  { vesselId: "3", containerId: "HM-749", origin: "China", bco: "SM", bco_email: "sm@gmail.com", operator: "Emma", operator_email: "daniel@gmail.com", date: "21 March 2024", time: "3:45pm", status: "Scheduled for Pickup" },
  { vesselId: "4", containerId: "HM-569", origin: "China", bco: "LK", bco_email: "jd@gmail.com", operator: "Michael", operator_email: "daniel@gmail.com", date: "21 March 2024", time: "1:00pm", status: "Scheduled for Pickup" },
  { vesselId: "5", containerId: "HM-663", origin: "Mexico", bco: "WB", bco_email: "rt@gmail.com", operator: "Emma", operator_email: "emma@gmail.com", date: "24 March 2024", time: "10:00am", status: "Scheduled for Pickup" },
  { vesselId: "6", containerId: "HM-360", origin: "Canada", bco: "RT", bco_email: "wb@gmail.com", operator: "Emma", operator_email: "daniel@gmail.com", date: "23 March 2024", time: "11:30am", status: "Scheduled for Pickup" },
  { vesselId: "7", containerId: "HM-704", origin: "Mexico", bco: "RT", bco_email: "sm@gmail.com", operator: "Emma", operator_email: "daniel@gmail.com", date: "22 March 2024", time: "1:00pm", status: "Scheduled for Pickup" },
  { vesselId: "8", containerId: "HM-657", origin: "USA", bco: "SM", bco_email: "lk@gmail.com", operator: "Michael", operator_email: "emma@gmail.com", date: "23 March 2024", time: "3:45pm", status: "Late" },
  { vesselId: "9", containerId: "HM-694", origin: "Canada", bco: "LK", bco_email: "wb@gmail.com", operator: "Michael", operator_email: "james@gmail.com", date: "23 March 2024", time: "10:00am", status: "Scheduled for Pickup" },
  { vesselId: "10", containerId: "HM-279", origin: "Germany", bco: "LK", bco_email: "rt@gmail.com", operator: "Emma", operator_email: "james@gmail.com", date: "24 March 2024", time: "1:00pm", status: "Scheduled for Pickup" }
];

const Transportation_OngoingData = [
  { vesselId: "1", containerId: "HM-266", origin: "Canada", bco: "WB", bco_email: "sm@gmail.com", operator: "Sarah", operator_email: "michael@gmail.com", date: "23 March 2024", time: "3:45pm", status: "Late",date_init: "22 March 2024", date_updated: "24 March 2024"},
  { vesselId: "2", containerId: "HM-431", origin: "USA", bco: "JD", bco_email: "jd@gmail.com", operator: "Daniel", operator_email: "sarah@gmail.com", date: "22 March 2024", time: "10:00am", date_init: "22 March 2024", date_updated: "24 March 2024"},
  { vesselId: "3", containerId: "HM-785", origin: "Mexico", bco: "RT", bco_email: "lk@gmail.com", operator: "Sarah", operator_email: "emma@gmail.com", date: "21 March 2024", time: "1:00pm", status: "Picked Up" ,date_init: "22 March 2024", date_updated: "24 March 2024",changepickupstatus: "checked"},
  { vesselId: "4", containerId: "HM-262", origin: "Germany", bco: "WB", bco_email: "jd@gmail.com", operator: "James", operator_email: "emma@gmail.com", date: "21 March 2024", time: "1:00pm", date_init: "22 March 2024", date_updated: "24 March 2024"},
  { vesselId: "5", containerId: "HM-903", origin: "Canada", bco: "JD", bco_email: "lk@gmail.com", operator: "Daniel", operator_email: "emma@gmail.com", date: "24 March 2024", time: "11:30am",date_init: "22 March 2024", date_updated: "24 March 2024" },
  { vesselId: "6", containerId: "HM-960", origin: "USA", bco: "JD", bco_email: "lk@gmail.com", operator: "Michael", operator_email: "emma@gmail.com", date: "21 March 2024", time: "3:45pm", date_init: "22 March 2024", date_updated: "24 March 2024" }
];


const Transportation_CompletedData = [
  { vesselId: "1", containerId: "HM-22", origin: "Canada", bco: "WB", bco_email: "wb@gmail.com", operator: "James", operator_email: "sarah@gmail.com", date_init: "22 March 2024", date_approved: "24 March 2024", status: "Picked Up", date_picked: "23 March 2024", time: "10:00am" },
  { vesselId: "2", containerId: "US-45", origin: "USA", bco: "RT", bco_email: "wb@gmail.com", operator: "James", operator_email: "daniel@gmail.com", date_init: "23 March 2024", date_approved: "23 March 2024", status: "Picked Up", date_picked: "24 March 2024", time: "3:45pm" },
  { vesselId: "3", containerId: "M-35", origin: "Mexico", bco: "WB", bco_email: "wb@gmail.com", operator: "Sarah", operator_email: "emma@gmail.com", date_init: "22 March 2024", date_approved: "23 March 2024", status: "Picked Up", date_picked: "24 March 2024", time: "1:00pm" },
  { vesselId: "4", containerId: "CH-44", origin: "China", bco: "LK", bco_email: "lk@gmail.com", operator: "Emma", operator_email: "james@gmail.com", date_init: "2 March 2024", date_approved: "23 March 2024", status: "Picked Up", date_picked: "23 March 2024", time: "11:30am" }
];


function RouteComponent(){
    const { user} = useAuthenticator();

   const [role, setRole] = useState<{ role: string }>({ role: '' });
  
    useEffect(() => {
      async function getRole() {
        if (user) {
          try {
            // fetchUserAttributes returns an array of objects with Name and Value properties.
            const attributes = await fetchUserAttributes();
            const roleAttribute = attributes['custom:role'] ?? 'No role assigned';
            setRole({ role: roleAttribute });
          } catch (error) {
            console.error("Error fetching user attributes", error);
          }
        }
      }
  
      getRole();
    }, [user, fetchUserAttributes]);

  // return (

  // );
  // Separate return statements for each role
  if (role.role === "Terminal Operator") {
    return (
      <div className="w-full">
      <Tabs defaultValue="requested" className="">
        <div>
      <TabsList className="mb-4 flex w-full justify-start gap-x-4">
          <TabsTrigger value="requested">Requested</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        </div>
        <div>
        <TabsContent value="requested">
          <TerminalBookingsTable data={Terminal_RequestedData} status="Requested" />
        </TabsContent>
        <TabsContent value="ongoing">
          <TerminalBookingsTable data={Terminal_OngoingData} status="Ongoing" />
        </TabsContent>
        <TabsContent value="completed">
          < TerminalBookingsCompleted data={Terminal_CompletedData} status="Completed"/>
        </TabsContent>
        </div>
      </Tabs>
    </div>
    );
  }

  if (role.role === "Transportation Operator") {
    return (
    <div className="w-full">
    
    <Tabs defaultValue="upcoming">
      <TabsList className="mb-4 flex w-full justify-start gap-x-4">
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>

      <TabsContent value="upcoming">
        <TransportationBookingsTableUpcoming
          data={Transportation_RequestedData}
        
          status="Upcoming"
        />
      </TabsContent>

      <TabsContent value="ongoing">
        <TransportationBookingsTableOngoing
          data={ Transportation_OngoingData}
      
          status="Ongoing"
        />
      </TabsContent>

      <TabsContent value="completed">
      <TransportationBookingsTableCompleted
          data={ Transportation_CompletedData}
          status='completed'
        />
      </TabsContent>
    </Tabs>
  </div>
);
  }

  // Default return for General Role or Unknown Role
  if (role.role==="Beneficiary Cargo Owner")
  {
  return (
    <div className="w-full">
      <Tabs defaultValue="upcoming">
        <TabsList className="mb-4 flex w-full justify-start gap-x-4">
          <TabsTrigger value="upcoming ">Upcoming</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <TransportationBookingsTableUpcoming
            data={Terminal_RequestedData}
          
            status="Upcoming"
          />
        </TabsContent>

        <TabsContent value="ongoing">
          <TransportationBookingsTableOngoing
            data={ Terminal_OngoingData}
        
            status="Ongoing"
          />
        </TabsContent>

        <TabsContent value="completed">
        <TransportationBookingsTableCompleted
            data={ Terminal_OngoingData}
            status="completed"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
}



