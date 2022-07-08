import {Component, OnInit} from '@angular/core';
import {ErrorHandlerService} from "../error-handler.service";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.less']
})
export class SnackbarComponent implements OnInit {
  message: string = this.errorService.message;

  constructor(public errorService: ErrorHandlerService) {
  }

  ngOnInit(): void {

  }

}
