import {Injectable} from '@angular/core';
import {Operation} from "./operation-interface";

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  operations: Operation[] = [];
  balance: number = 0;

  constructor() {
  }

  add(operation: Operation) {

    if (operation.type === 'spending' && operation.sum > this.balance){
      return;
    }

    operation.id = this.operations.length+1;
    this.operations.push(operation);
    if (operation.type === 'replenishment') {
      this.balance = this.balance + parseInt(String(operation.sum));
    } else {
      this.balance = this.balance - parseInt(String(operation.sum));
    }
  }
}
