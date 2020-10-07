import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  constructor( private router: Router ){}
  assessment=['1', '2', '3', '4', '5','6','7', '8','9', '10' ];
  ngOnInit(): void {
  }

}
