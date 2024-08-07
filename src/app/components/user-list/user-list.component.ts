import { Component } from '@angular/core';
import { UserCardComponent } from "../user-card/user-card.component";
import { PaginationComponent } from "../pagination/pagination.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, PaginationComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

}
