import { Component, OnInit } from '@angular/core';
import { UserCardComponent } from "../user-card/user-card.component";
import { PaginationComponent } from "../pagination/pagination.component";
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, PaginationComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  loading!: Observable<boolean>;
  users!: Observable<User[]>;
  ngOnInit(): void {

  }


}
