import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';





import { TablePopupComponent } from '../table-popup/table-popup.component';
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
  selector: 'app-move-list-table',
  templateUrl: './move-list-table.component.html',
  styleUrls: ['./move-list-table.component.scss']
})
export class MoveListTableComponent implements OnInit {
    // table
    displayedColumns: string[] = ['movee', 'from', 'to', 'ergo', 'coordinator', 'type', 'status', 'comments', 'action'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    title = 'people-mover';
    showToForm: boolean = false;
    // autocomplete
    myControl = new FormControl();
    options: string[] = ['One', 'Two', 'Three'];
    filteredOptions!: Observable<string[]>;

   // select
   foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
    // modal
    constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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
  openDialog() {
    this.dialog.open(TablePopupComponent);
  }
   // autocomplete
   private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
 
  // hide / show autocomple
  toForm() {
    this.showToForm = !this.showToForm;
  }

}


// modal
function openDialog() {
  throw new Error('Function not implemented.');
}
