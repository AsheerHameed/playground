import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userData: any[] = [
    {
      id: 1,
      email: 'john@example.com',
      firstName: 'John',
      lastName: 'doe',
      address: 'Kolkata',
      dob: '1990-05-15',
    },
    {
      id: 2,
      email: 'alice@example.com',
      firstName: 'Alice',
      lastName: 'smith',
      address:'Delhi',
      dob: '1985-08-22',
    },
    {
      id: 3,
      email: 'bob@example.com',
      firstName: 'Bob',
      lastName: 'Johnson',
      address: 'Bangalore',
      dob: '1988-12-10',
    },
    {
      id: 4,
      email: 'eve@example.com',
      firstName: 'Eve',
      lastName: ' Adams',
      address: 'Mumbai',
      dob: '1995-03-25',
    },
    {
      id: 5,
      email: 'charlie@example.com',
      firstName: 'Charlie',
      lastName: 'brown',
      address: 'Murdeshwar',
      dob: '1982-07-05',
    },
  ];

  addUser(user: any) {
    this.userData.push(user);
  }

  
}
