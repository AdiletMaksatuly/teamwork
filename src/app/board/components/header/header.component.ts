import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as BoardActions from '../../redux/actions/board.actions';
import { Store } from '@ngrx/store';
import { ColumnResult, ModalData, ModalResult } from '../../../shared/models/modal.model';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-board-page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() public boardTitle = '';

  @Input() public boardId = '';

  @Output() private back = new EventEmitter();

  public screenWidth: number;


  constructor(public dialog: MatDialog, private store: Store) {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  private getScreenSize(): void {
    this.screenWidth = window.innerWidth;
  }

  public onNavigateBackClick(): void {
    this.back.emit();
  }

  public showCreateColumnModal(): void {
    const dialogConfig = new MatDialogConfig<ModalData>();

    dialogConfig.autoFocus = 'dialog';
    dialogConfig.data = {
      title: 'shared.modal.column.create',
      formFields: [
        {
          label: 'shared.modal.column.label.title',
          name: 'title',
        },
      ],
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .subscribe((dialogResult: ModalResult<ColumnResult>) => {
        if (!dialogResult) return;

        this.store.dispatch(BoardActions.createColumn({
          column: {
            boardId: this.boardId,
            title: dialogResult.title,
          },
        }));
      });
  }
}
