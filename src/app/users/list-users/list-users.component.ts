import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})

export class ListUsersComponent implements OnInit{
  displayedColumns: string[] = ['firstName', 'lastName','address','dob'];

  constructor(public dataService: DataService,
  ) {
    
  }
  ngOnInit(): void {
    console.table(this.dataService.userData);
  }
}
