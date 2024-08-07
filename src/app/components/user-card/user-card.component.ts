import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
@Component({
  selector: "app-user-card",
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: "./user-card.component.html",
  styleUrl: "./user-card.component.css",
})
export class UserCardComponent {}
