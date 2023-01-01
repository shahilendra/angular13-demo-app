import {

    HttpEvent,
   
    HttpInterceptor,
   
    HttpHandler,
   
    HttpRequest,
   
    HttpResponse,
   
    HttpErrorResponse
   
   } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
   
   import { Observable, throwError } from 'rxjs';
   
   import { retry, catchError } from 'rxjs/operators';
   @Injectable()
   export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
      return next.handle(request)
   
        .pipe(
          retry(1),   
          catchError((error: HttpErrorResponse) => { 
              console.log("Error.......................")  
            let errorMessage = '';   
            if (error.error instanceof ErrorEvent) {   
              // client-side error   
              errorMessage = `Error: ${error.error.message}`;   
            } else {   
              // server-side error   
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;   
            }   
            // window.alert(errorMessage); 
            this.toastr.error('Failed', errorMessage); 
            return throwError(errorMessage);   
          })   
        )   
    }   
   }