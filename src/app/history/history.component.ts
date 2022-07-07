import {Component, OnInit} from '@angular/core';
import {OperationService} from "../operation.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit {

  constructor(public operationService: OperationService) {
  }

  ngOnInit(): void {
  }

}
