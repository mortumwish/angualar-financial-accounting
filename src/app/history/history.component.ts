import {Component, OnInit} from '@angular/core';
import {OperationService} from "../operation.service";
import {Operation} from "../operation-interface";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit {

  operations: Operation[] = [];
  balanceString: string = '';
  balance: number = 0;

  constructor(private operationService: OperationService) {
  }

  ngOnInit(): void {
    this.getOperations();
  }

  getOperations(){
    this.operations = this.operationService.operations;
    this.balance = this.operationService.balance;
    this.balanceString = this.operationService.formatSumString(this.operationService.balance.toFixed(2).toString());
  }

}
