import { Component, OnInit } from '@angular/core';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl();
  results: any[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Pineapple' },
    { id: 5, name: 'Strawberry' },
  ];
  filteredResults: Observable<any[]> = new Observable();

  ngOnInit() {
    this.filteredResults = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this.filterResults(value))
    );
  }

  filterResults(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.results.filter((result) =>
      result.name.toLowerCase().includes(filterValue)
    );
  }

  displayFn(result: any): string {
    return result ? result.name : '';
  }
}
