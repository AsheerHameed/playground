import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})

export class ListUsersComponent implements OnInit{
  displayedColumns: string[] = ['firstName', 'lastName','address','dob','editButton'];

  constructor(public dataService: DataService,
    private router: Router  
  ) {
    
  }
  ngOnInit(): void {
    console.table(this.dataService.userData);
  }
  editUser(user: any) {
    this.router.navigate(['/users/edit/', user.id])
  }
}
