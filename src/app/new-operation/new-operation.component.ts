import {Component, OnInit} from '@angular/core';
import {OperationService} from "../operation.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-operation',
  templateUrl: './new-operation.component.html',
  styleUrls: ['./new-operation.component.less']
})
export class NewOperationComponent implements OnInit {
  options: string[] = ['Replenishment', 'Spending'];

  constructor(private operationService: OperationService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

  }

  add(comment: string, sum: number, type: string) {
    if (type === 'Spending' && sum > this.operationService.balance) {
      this.snackBar.open('Error. The balance cannot be less than spending.', '', {duration: 3000});
      return;
    } else {
      this.operationService.addOperation({
        id: this.operationService.operations.length,
        sum: sum,
        sumString: this.operationService.formatSumString(sum.toString()),
        type: type,
        comment: this.checkForComment(comment)
      });
    }
  }

  checkForComment(comment: string): string {
    if (comment.length === 0) {
      return 'No comment =('
    } else {
      return comment;
    }
  }
}

