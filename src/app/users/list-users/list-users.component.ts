import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})

export class ListUsersComponent implements OnInit{
  displayedColumns: string[] = ['firstName', 'lastName','address','dob','editButton'];

  constructor(public dataService: DataService,
  ) {
    
  }
  ngOnInit(): void {
    console.table(this.dataService.userData);
  }
  editUser(user: any) {
    // Implement your edit logic here, e.g., navigate to an edit page with user details
    // For example: this.router.navigate(['/users/edit', user.id]);
  }
}
