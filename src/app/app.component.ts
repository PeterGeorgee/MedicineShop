import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MedShopProject';
  branchesData = [
    { "name": "Riverside", "address": "9194 Magnolia Ave.Riverside, CA 92503", "website":"https://riverside.medicineshoppe.com/" },
    { "name": "Hemet", "address": "1121 South State St.Hemet, CA 92543", "website":"https://hemet.medicineshoppe.com/" },
    { "name": "San Jacinto", "address": "1477 S. San Jacinto Ave.San Jacinto, CA 92581", "website":"https://sanjacinto.medicineshoppe.com/" },
    { "name": "Palm Springs", "address": "170 E Tahquitz Canyon Way, Palm Springs, CA 92262", "website":"https://palmsprings.medicineshoppe.com/" },
    { "name": "Lake Elsinore", "address": "31946 Mission Trail Ste# A,Lake Elsinore, CA 92530", "website":"https://www.lakeelsinore.medicineshoppe.com/" },
    { "name": "Montclair", "address": "9675 Monte Vista Ave Montclair, CA", "website":"NO WEBSITE" },
    { "name": "Palm Desert California", "address": "72960 Fred Waring Dr. Ste 11 Palm Desert, CA 92260", "website":"NO WEBSITE" },
    { "name": "The Medicine Shoppe Retail Pharmacy", "address": "5801 W Craig Road Las Vegas, NV 89130 Suit #110", "website":"https://lasvegas.medicineshoppe.com/" },
    { "name": "The Medicine Shoppe Long Term Care Pharmacy", "address": "5801 W Craig Road Las Vegas, NV 89130 Suit #130", "website":"NO WEBSITE" },
  ];
}
