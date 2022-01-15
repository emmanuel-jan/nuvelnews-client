import { Component, OnInit } from '@angular/core';
import { NEWSITEMS } from '../mock-news';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  newsitems = NEWSITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
