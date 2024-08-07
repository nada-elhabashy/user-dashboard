
import { Component, Injectable } from '@angular/core';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { Subject } from 'rxjs';
// import { $localize } from '@angular/localize/init';
@Injectable()
// export class MyCustomPaginatorIntl implements MatPaginatorIntl {
//   changes = new Subject<void>();

//   // For internationalization, the `$localize` function from
//   // the `@angular/localize` package can be used.
//   firstPageLabel = $localize`First page`;
//   itemsPerPageLabel = $localize`Items per page:`;
//   lastPageLabel = $localize`Last page`;

//   // You can set labels to an arbitrary string too, or dynamically compute
//   // it through other third-party internationalization libraries.
//   nextPageLabel = 'Next page';
//   previousPageLabel = 'Previous page';

//   getRangeLabel(page: number, pageSize: number, length: number): string {
//     if (length === 0) {
//       return $localize`Page 1 of 1`;
//     }
//     const amountPages = Math.ceil(length / pageSize);
//     return $localize`Page ${page + 1} of ${amountPages}`;
//   }
// }
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
  providers: [
    {
      provide: MatPaginatorIntl,
      //  useClass: MyCustomPaginatorIntl
    },
  ],
})
export class PaginationComponent {
  // totalItems = 100;
  // pageSize = 10;
  // currentPage = 0;

  // items = this.getData(this.currentPage, this.pageSize); // Fetch data for the current page

  // pageChanged(event: PageEvent) {
  //   this.currentPage = event.pageIndex;
  //   this.items = this.getData(this.currentPage, this.pageSize);
  // }
}
