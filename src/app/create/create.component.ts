import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private DataBaseService: DatabaseService) { }
  document = document;
  ngOnInit() {
  }
  createNew() {
    this.DataBaseService.saveCompany();
  }
}
