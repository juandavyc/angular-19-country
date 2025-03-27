import { Component, input } from '@angular/core';
import { Country } from '../../interfaces';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'table-list',
  imports: [
    RouterLink,
    DecimalPipe
  ],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css',
})
export class TableListComponent {

  countries = input.required<Country[]>();
  isLoading = input.required<boolean>();
  errorMessage = input.required<string | unknown | null>();

}
