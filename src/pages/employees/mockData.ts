import { Employee } from "./types";

const Teams = ["Comet", "Nebula", "Rocket"];

const roles = [
  "Backend Developer",
  "Frontend Developer",
  "Fullstack Developer",
  "UX Designer",
];

export const mockEmployees: Employee[] = [
  {
    firstName: "Bob",
    lastName: "Loblaw",
    email: "b.loblaw@appyapp.com",
    role: "Backend Developer",
    team: "Comet",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    email: "a.smith@appyapp.com",
    role: "Frontend Developer",
    team: "Nebula",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "j.doe@appyapp.com",
    role: "Fullstack Developer",
    team: "Rocket",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@appyapp.com",
    role: "UX Designer",
    team: "Comet",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    email: "m.johnson@appyapp.com",
    role: "Backend Developer",
    team: "Nebula",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    email: "e.davis@appyapp.com",
    role: "Frontend Developer",
    team: "Rocket",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Chris",
    lastName: "Brown",
    email: "c.brown@appyapp.com",
    role: "Fullstack Developer",
    team: "Comet",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Jessica",
    lastName: "Wilson",
    email: "j.wilson@appyapp.com",
    role: "UX Designer",
    team: "Nebula",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "David",
    lastName: "Martinez",
    email: "d.martinez@appyapp.com",
    role: "Backend Developer",
    team: "Rocket",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Sarah",
    lastName: "Anderson",
    email: "s.anderson@appyapp.com",
    role: "Frontend Developer",
    team: "Comet",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "James",
    lastName: "Taylor",
    email: "j.taylor@appyapp.com",
    role: "Fullstack Developer",
    team: "Nebula",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Laura",
    lastName: "Thomas",
    email: "l.thomas@appyapp.com",
    role: "UX Designer",
    team: "Rocket",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Daniel",
    lastName: "Moore",
    email: "d.moore@appyapp.com",
    role: "Backend Developer",
    team: "Comet",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Sophia",
    lastName: "Jackson",
    email: "s.jackson@appyapp.com",
    role: "Frontend Developer",
    team: "Nebula",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Matthew",
    lastName: "White",
    email: "m.white@appyapp.com",
    role: "Fullstack Developer",
    team: "Rocket",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Olivia",
    lastName: "Harris",
    email: "o.harris@appyapp.com",
    role: "UX Designer",
    team: "Comet",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Joshua",
    lastName: "Martin",
    email: "j.martin@appyapp.com",
    role: "Backend Developer",
    team: "Nebula",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Isabella",
    lastName: "Thompson",
    email: "i.thompson@appyapp.com",
    role: "Frontend Developer",
    team: "Rocket",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Andrew",
    lastName: "Garcia",
    email: "a.garcia@appyapp.com",
    role: "Fullstack Developer",
    team: "Comet",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Mia",
    lastName: "Martinez",
    email: "mia.martinez@appyapp.com",
    role: "UX Designer",
    team: "Nebula",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Ethan",
    lastName: "Robinson",
    email: "e.robinson@appyapp.com",
    role: "Backend Developer",
    team: "Rocket",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Ava",
    lastName: "Clark",
    email: "a.clark@appyapp.com",
    role: "Frontend Developer",
    team: "Comet",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Alexander",
    lastName: "Rodriguez",
    email: "a.rodriguez@appyapp.com",
    role: "Fullstack Developer",
    team: "Nebula",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Charlotte",
    lastName: "Lewis",
    email: "c.lewis@appyapp.com",
    role: "UX Designer",
    team: "Rocket",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "William",
    lastName: "Lee",
    email: "w.lee@appyapp.com",
    role: "Backend Developer",
    team: "Comet",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Amelia",
    lastName: "Walker",
    email: "a.walker@appyapp.com",
    role: "Frontend Developer",
    team: "Nebula",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Henry",
    lastName: "Hall",
    email: "h.hall@appyapp.com",
    role: "Fullstack Developer",
    team: "Rocket",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Evelyn",
    lastName: "Allen",
    email: "e.allen@appyapp.com",
    role: "UX Designer",
    team: "Comet",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Lucas",
    lastName: "Young",
    email: "l.young@appyapp.com",
    role: "Backend Developer",
    team: "Nebula",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Harper",
    lastName: "King",
    email: "h.king@appyapp.com",
    role: "Frontend Developer",
    team: "Rocket",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Jack",
    lastName: "Wright",
    email: "j.wright@appyapp.com",
    role: "Fullstack Developer",
    team: "Comet",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Ella",
    lastName: "Scott",
    email: "e.scott@appyapp.com",
    role: "UX Designer",
    team: "Nebula",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Benjamin",
    lastName: "Green",
    email: "b.green@appyapp.com",
    role: "Backend Developer",
    team: "Rocket",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
  {
    firstName: "Grace",
    lastName: "Adams",
    email: "g.adams@appyapp.com",
    role: "Frontend Developer",
    team: "Comet",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
];
