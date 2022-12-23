import Appointment from "./Appointment";

const ListOfUpcomingAppointments = [
  new Appointment("Sudha Kumar", "24/12/22", "9:30am", "Common Cold"),
  new Appointment("Basudha Kumari", "24/12/22", "9:45am", "Diabetes"),
  new Appointment("D.K. Basu", "24/12/22", "10:00am", "Blood Pressure"),
];

const ListOfOngoingAppointments = [
  new Appointment("S. Bhattacharya", "24/12/22", "9:30 am", "Viral Fever"),
];

const ListOfRecentAppointments = [
  new Appointment("Gyan Singh", "24/12/22", "9:00am", "Dental Pain"),
  new Appointment("Sushil kukreja", "24/12/22", "9:15am", "Soreness"),
];

export {
  ListOfRecentAppointments,
  ListOfOngoingAppointments,
  ListOfUpcomingAppointments,
};
