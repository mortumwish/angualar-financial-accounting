import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  message: string = '';

  constructor() {
  }

  errorHandler(error: string) {
    this.message = error;
    setTimeout(() => this.message = '', 3000);
  }

}
