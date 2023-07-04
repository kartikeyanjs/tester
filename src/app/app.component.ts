import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { TablePopupComponent } from './table-popup/table-popup.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  movee: any;
  from: any;
  to: any;
  ergo: any;
  coordinator: any;
  type: any;
  status: any;
  comments: any;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { movee: '', from: 1.0079, to: '', ergo: '', coordinator: '', type: '', status: '', comments: '', action: '', },
  { movee: '', from: 1.0079, to: '', ergo: '', coordinator: '', type: '', status: '', comments: '', action: '', },
  { movee: '', from: 1.0079, to: '', ergo: '', coordinator: '', type: '', status: '', comments: '', action: '', },
  { movee: '', from: 1.0079, to: '', ergo: '', coordinator: '', type: '', status: '', comments: '', action: '', },
  { movee: '', from: 1.0079, to: '', ergo: '', coordinator: '', type: '', status: '', comments: '', action: '', },
  { movee: '', from: 1.0079, to: '', ergo: '', coordinator: '', type: '', status: '', comments: '', action: '', },
  { movee: '', from: 1.0079, to: '', ergo: '', coordinator: '', type: '', status: '', comments: '', action: '', },
  { movee: '', from: 1.0079, to: '', ergo: '', coordinator: '', type: '', status: '', comments: '', action: '', },
  { movee: '', from: 1.0079, to: '', ergo: '', coordinator: '', type: '', status: '', comments: '', action: '', },
  { movee: '', from: 1.0079, to: '', ergo: '', coordinator: '', type: '', status: '', comments: '', action: '', },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'people-mover';
  showToForm: boolean = false;

  // modal
  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(TablePopupComponent);
  }

  // table
  displayedColumns: string[] = ['movee', 'from', 'to', 'ergo', 'coordinator', 'type', 'status', 'comments', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  // autocomplete
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    // table
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    // autocomplete
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  // autocomplete
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  // select
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  // hide / show autocomple
  toForm() {
    this.showToForm = !this.showToForm;
  }
}

// modal
function openDialog() {
  throw new Error('Function not implemented.');
}


