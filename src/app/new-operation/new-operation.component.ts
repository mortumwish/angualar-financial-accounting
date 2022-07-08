import {Component, OnInit} from '@angular/core';
import {OperationService} from "../operation.service";
import {Operation} from "../operation-interface";
import {ErrorHandlerService} from "../error-handler.service";

@Component({
  selector: 'app-new-operation',
  templateUrl: './new-operation.component.html',
  styleUrls: ['./new-operation.component.less']
})
export class NewOperationComponent implements OnInit {
  operation: Operation = {} as Operation;

  constructor(public operationService: OperationService, public errorService: ErrorHandlerService) {
  }

  ngOnInit(): void {
  }

  add(comment: string, sum: number, type: string) {
    if (sum <= 0) {
      this.errorService.errorHandler('Invalid value. The sum cannot be negative or 0.');
      return;
    } else if (isNaN(sum)) {
      this.errorService.errorHandler('Invalid value.');
      return;
    } else {
      this.errorService.errorHandler('Success operation.');
      this.operation = {id: this.operationService.operations.length, sum: sum, type: type, comment: comment};
      this.operationService.add(this.operation);
    }


  }
}
