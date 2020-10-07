import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {
  constructor( private router: Router ){}

  teacher_name=['Petar Petrovic', 'Ana Simeunovic', 'Ivana Ilic', 'Danijela Jovanovic'];
  checked = false;
  disabled = false;
  list:boolean;

  ngOnInit(): void {

  }

}
