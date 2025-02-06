import { createFileRoute } from '@tanstack/react-router'
import {TerminalBookingsTable,TerminalBookingsCompleted} from "../components/terminal-bookings/terminal-bookings-table.tsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs.tsx";

export const Route = createFileRoute('/booking')({
  component: RouteComponent,
})


const dummyData = [
  { vesselId: "1", containerId: "HM-837", origin: "JDUSA", bco: "JD", operator: "JD", date: "21 March 2024", time: "10:00am",status:"Late" },
  { vesselId: "2", containerId: "MN-345", origin: "Japan", bco: "John Doe", operator: "John Doe", date: "21 March 2024", time: "10:00am", status:"Scheduled for Pickup" },
  { vesselId: "3", containerId: "PS-123", origin: "Parris", bco: "James Doe", operator: "James Doe", date: "21 March 2024", time: "10:00am",status:"Late" },
];


const dummyData2 = [
  { vesselId: "1", containerId: "USA", origin: "JD", bco: "JD", operator: "JD", date_init: "21 March 2024",  date_approved:"21 March 2024",status:"Already Picked Up",date_picked:"21 March 2024",  time: "10:00am" },

];

function RouteComponent(){
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
          <TerminalBookingsTable data={dummyData} status="Requested" />
        </TabsContent>
        <TabsContent value="ongoing">
          <TerminalBookingsTable data={dummyData} status="Ongoing" />
        </TabsContent>
        <TabsContent value="completed">
          < TerminalBookingsCompleted data={dummyData2} status="Completed"/>
        </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

