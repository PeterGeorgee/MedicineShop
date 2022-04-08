import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoCovid() {
    window.open('https://www.who.int/health-topics/coronavirus#tab=tab_1', "_blank");
  }

}
