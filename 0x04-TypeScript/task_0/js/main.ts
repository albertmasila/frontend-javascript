// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Albert",
  lastName: "Wambua",
  age: 28,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  location: "Mombasa",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table with Vanilla JS
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
