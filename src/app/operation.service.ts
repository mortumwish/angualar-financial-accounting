import {Injectable} from '@angular/core';
import {Operation} from "./operation-interface";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  operations: Operation[] = [];
  balance: number = 0;


  constructor(private snackBar: MatSnackBar) {
  }

  addOperation(operation: Operation) {
    operation.id = this.operations.length + 1;
    this.operations.push(operation);
    this.snackBar.open('Success operation.', '', {duration: 3000});
    if (operation.type === 'Replenishment') {
      this.balance = this.balance + parseFloat(String(operation.sum));
    } else {
      this.balance = this.balance - parseFloat(String(operation.sum));
    }
  }

  formatSumString(sumString: string): string{
    return sumString.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  }

}
