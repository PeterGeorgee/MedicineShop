import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  constructor() { }


  @Input() name="";
  @Input() address="";
  @Input() website="";
  @Input() photosource="";

  ngOnInit(): void {
  }

  gotoLink(){
    window.location.href=this.website;
  }
}
