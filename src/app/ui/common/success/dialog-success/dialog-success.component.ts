import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-success',
  templateUrl: './dialog-success.component.html',
  styleUrls: ['./dialog-success.component.scss']
})
export class DialogSuccessComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public _mData: any) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.dialogRef.close(this._mData);
  }
}
