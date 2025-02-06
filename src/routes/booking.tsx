import { createFileRoute } from '@tanstack/react-router'
import {TerminalBookingsTable,TerminalBookingsCompleted} from "../components/terminal-bookings/terminal-bookings-table.tsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs.tsx";

export const Route = createFileRoute('/booking')({
  component: RouteComponent,
})


const RequestedData = [
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

const OngoingData = [
  { vesselId: "1", containerId: "HM-266", origin: "Canada", bco: "WB", bco_email: "sm@gmail.com", operator: "Sarah", operator_email: "michael@gmail.com", date: "23 March 2024", time: "3:45pm", status: "Late" },
  { vesselId: "2", containerId: "HM-431", origin: "USA", bco: "JD", bco_email: "jd@gmail.com", operator: "Daniel", operator_email: "sarah@gmail.com", date: "22 March 2024", time: "10:00am", status: "Scheduled for Pickup" },
  { vesselId: "3", containerId: "HM-785", origin: "Mexico", bco: "RT", bco_email: "lk@gmail.com", operator: "Sarah", operator_email: "emma@gmail.com", date: "21 March 2024", time: "1:00pm", status: "Late" },
  { vesselId: "4", containerId: "HM-262", origin: "Germany", bco: "WB", bco_email: "jd@gmail.com", operator: "James", operator_email: "emma@gmail.com", date: "21 March 2024", time: "1:00pm", status: "Scheduled for Pickup" },
  { vesselId: "5", containerId: "HM-903", origin: "Canada", bco: "JD", bco_email: "lk@gmail.com", operator: "Daniel", operator_email: "emma@gmail.com", date: "24 March 2024", time: "11:30am", status: "Late" },
  { vesselId: "6", containerId: "HM-960", origin: "USA", bco: "JD", bco_email: "lk@gmail.com", operator: "Michael", operator_email: "emma@gmail.com", date: "21 March 2024", time: "3:45pm", status: "Scheduled for Pickup" }
];


const CompletedData = [
  { vesselId: "1", containerId: "Canada", origin: "JD", bco: "WB", bco_email: "wb@gmail.com", operator: "James", operator_email: "sarah@gmail.com", date_init: "22 March 2024", date_approved: "24 March 2024", status: "Picked Up", date_picked: "23 March 2024", time: "10:00am" },
  { vesselId: "2", containerId: "Canada", origin: "SM", bco: "RT", bco_email: "wb@gmail.com", operator: "James", operator_email: "daniel@gmail.com", date_init: "23 March 2024", date_approved: "23 March 2024", status: "Picked Up", date_picked: "24 March 2024", time: "3:45pm" },
  { vesselId: "3", containerId: "USA", origin: "RT", bco: "WB", bco_email: "wb@gmail.com", operator: "Sarah", operator_email: "emma@gmail.com", date_init: "22 March 2024", date_approved: "23 March 2024", status: "Picked Up", date_picked: "24 March 2024", time: "1:00pm" },
  { vesselId: "4", containerId: "USA", origin: "SM", bco: "LK", bco_email: "lk@gmail.com", operator: "Emma", operator_email: "james@gmail.com", date_init: "20 March 2024", date_approved: "23 March 2024", status: "Picked Up", date_picked: "23 March 2024", time: "11:30am" }
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
          <TerminalBookingsTable data={RequestedData} status="Requested" />
        </TabsContent>
        <TabsContent value="ongoing">
          <TerminalBookingsTable data={OngoingData} status="Ongoing" />
        </TabsContent>
        <TabsContent value="completed">
          < TerminalBookingsCompleted data={CompletedData} status="Completed"/>
        </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

