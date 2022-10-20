import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogModelProgress } from '../model';

@Component({
  selector: 'app-dialog-progress',
  templateUrl: './dialog-progress.component.html',
  styleUrls: ['./dialog-progress.component.scss']
})
export class DialogProgressComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogProgressComponent>,
    @Inject(MAT_DIALOG_DATA) public _mData: DialogModelProgress
  ) {}

  ngOnInit():void {}

  onSubmit() {
    this.dialogRef.close(this._mData);
  }

}
