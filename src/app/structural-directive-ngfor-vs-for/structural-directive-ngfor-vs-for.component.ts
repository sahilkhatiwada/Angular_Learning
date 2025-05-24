import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngfor-vs-for',
  imports: [],
  templateUrl: './structural-directive-ngfor-vs-for.component.html',
  styleUrl: './structural-directive-ngfor-vs-for.component.css'
})
export class StructuralDirectiveNgforVsForComponent {
  employees : any[] = [
    {
      empName: "John Doe",
      empNumber: 101,
      empEmail: "tKw7o@example.com",
      empDept: "HR",
    },
    {
      empName: "Jane Smith",
      empNumber: 102,
      empEmail: "zV3d9@example.com",
      empDept: "IT",
    },
    {
      empName: "Alice Johnson",
      empNumber: 103,
      empEmail: "aF5b8@example.com",
      empDept: "Finance",
    }

  ];

  companyList: string[] = [
    "Tech Innovations",
    "Creative Solutions",
    "EcoSphere",
    "Quantum Leap",
    "Global Ventures",
    "Synergy Dynamics",
    "Nexus Technologies",
    "Infinite Horizons",
    "Zenith Systems",
    "Nova Enterprises",
  ];
}
