import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  constructor() { }

  branchesData = [
    { "name": "Riverside", "address": "9194 Magnolia Ave.Riverside, CA 92503", "website":"https://riverside.medicineshoppe.com/" },
    { "name": "Hemet", "address": "1121 South State St.Hemet, CA 92543", "website":"https://hemet.medicineshoppe.com/" },
    { "name": "San Jacinto", "address": "1477 S. San Jacinto Ave.San Jacinto, CA 92581", "website":"https://sanjacinto.medicineshoppe.com/" },
    { "name": "Palm Springs", "address": "170 E Tahquitz Canyon Way, Palm Springs, CA 92262", "website":"https://palmsprings.medicineshoppe.com/" },
  ];

  ngOnInit(): void {
  }

}
