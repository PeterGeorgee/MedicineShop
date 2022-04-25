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
    { "name": "Riverside", "addressOne": "9194 Magnolia Ave.", "addressTwo": "Riverside, CA 92503", "website":"https://riverside.medicineshoppe.com/", "photosrc":"./assets/riverside.jpg","disabled":false },
    { "name": "Hemet", "addressOne": "1121 South State St.", "addressTwo": "Hemet, CA 92543", "website":"https://hemet.medicineshoppe.com/", "photosrc":"./assets/hemet.jpg","disabled":false },
    { "name": "San Jacinto", "addressOne": "1477 S San Jacinto Ave.", "addressTwo": "San Jacinto, CA 92581", "website":"https://sanjacinto.medicineshoppe.com/", "photosrc":"./assets/san jacinto.jpg","disabled":false },
    { "name": "Palm Springs", "addressOne": "170 E Tahquitz Canyon Way", "addressTwo": "Palm Springs, CA 92262", "website":"https://palmsprings.medicineshoppe.com/", "photosrc":"./assets/palm springs.jpg","disabled":false },
    { "name": "Montclair", "addressOne": "9675 Monte Vista Ave", "addressTwo": "Montclair, CA", "website":"NO WEBSITE", "photosrc":"./assets/montclair.jpg","disabled":true },
    { "name": "Lake Elsinore", "addressOne": "31946 Mission Trail Ste# A", "addressTwo": "Lake Elsinore, CA 92530", "website":"https://www.lakeelsinore.medicineshoppe.com/", "photosrc":"./assets/lake.jpg","disabled":false },
    { "name": "Palm Desert California", "addressOne": "72960 Fred Waring Dr. Ste 11", "addressTwo": "Palm Desert, CA 92260", "website":"NO WEBSITE", "photosrc":"./assets/Palm springs 2.jpg","disabled":true },
    { "name": "The Medicine Shoppe Retail Pharmacy", "addressOne": "5801 W Craig Road, Suite #110", "addressTwo": "Las Vegas, NV 89130", "website":"https://lasvegas.medicineshoppe.com/", "photosrc":"./assets/las vegas retail.jpg","disabled":false },
    { "name": "Vida Drug Store", "addressOne": "437 N Euclid Ave suite B", "addressTwo": "Ontario, CA 91762", "website":"NO WEBSITE", "photosrc":"./assets/vida.jpg","disabled":true },
  ];
  lastBranch = { "name": "The Medicine Shoppe Long Term Care Pharmacy", "addressOne": "5801 W Craig Road, Suite #130", "addressTwo": "Las Vegas, NV 89130", "website":"NO WEBSITE", "photosrc":"./assets/MSImage2.jpg","disabled":true };
}
