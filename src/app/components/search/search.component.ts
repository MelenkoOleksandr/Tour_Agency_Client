import { Component, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchQuery: string = '';
  @Output() searchQueryChange = new EventEmitter<string>();

  onSearchChange() {
    this.searchQueryChange.emit(this.searchQuery);
  }
}
