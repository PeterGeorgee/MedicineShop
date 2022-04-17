import { Component, Input, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
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
  @Input() disabled=true;

  ngOnInit(): void {
  }

  gotoLink(){
    // window.location.href=this.website;
    window.open(this.website);
  }
}
