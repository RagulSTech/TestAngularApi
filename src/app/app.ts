  import { Component } from '@angular/core';
  import { RouterOutlet } from '@angular/router';
  import { HttpClient } from '@angular/common/http';
  import { CommonModule } from '@angular/common';

  interface User {
    id: number;
    name: string;
    email: string;
  }

  @Component({
    selector: 'app-root',
    imports: [CommonModule],
    templateUrl: './app.html',
    styleUrl: './app.css'
  })

  export class App {
    users: User[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      this.http
        .get<User[]>('https://testapi-data.onrender.com/api/getusers')
        .subscribe({
          next: data => (this.users = data),
          error: err => console.error('API error →', err)
        });
    }
  }
