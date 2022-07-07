import {Component, OnInit} from '@angular/core';
import {OperationService} from "../operation.service";
import {Operation} from "../operation-interface";

@Component({
  selector: 'app-new-operation',
  templateUrl: './new-operation.component.html',
  styleUrls: ['./new-operation.component.less']
})
export class NewOperationComponent implements OnInit {
  operation: Operation = {} as Operation;
  constructor(public operationService: OperationService) {
  }

  ngOnInit(): void {
  }

  add(comment: string, sum: number, type: string) {
    if (sum <= 0) {
      return;
    }

    this.operation = {id: this.operationService.operations.length, sum: sum, type: type, comment: comment};
    this.operationService.add(this.operation);
  }

}
