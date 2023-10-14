import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, of, throwError } from "rxjs";
import { CustomLocalStorage } from "../sorage/custom-local-storage";
import { TSResult } from "src/shared/models/result-model/TServiceResult";

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router, private storage: CustomLocalStorage) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): any {
        let req = request;
        const simpleUrls = ['/signin/'];


        // if (!simpleUrls.some(url => req.url.toString().includes(url))) {
        //     const token = this.storage.getItem('access_token');
        //     if (token) {
        //         req = request.clone({
        //             headers: request.headers.append('Authorization', `Bearer ${token}`),
        //         });
        //     }
        // }
        return next.handle(req).pipe(catchError((err) => this.handleAuthError(err)));
    }

    private handleAuthError(errorResponse: HttpErrorResponse): Observable<any> {
        const errorMessage: string = errorResponse?.error?.title;

        if (errorResponse.status == 401) {
            this.storage.clearItems(['access_token']);
            this.router.navigate(['/sign-in']);
            return of(errorResponse.message);
        }

        else if (errorResponse.status == 403) {
            return of(new HttpResponse({ body: new TSResult(null, errorMessage, null, true, 'شما اجازه دسترسی به این بخش را ندارید') }));
        }

        else if (errorResponse.status == 400 || errorResponse.status == 404) {
            const errorMessage : string = errorResponse?.error.error.code.message;
            return of(new HttpResponse({ body: new TSResult(null, errorMessage, null, true, '') }));
        }
        else if (errorResponse.status == 409) {
            const errorMessage : string = errorResponse?.error.error.code.message;
            return of(new HttpResponse({ body: new TSResult(null, errorMessage, null, true, '') }));
        }

        else if (errorResponse.status == 500) {
            return of(errorResponse.message);
        }

        return throwError(() => errorResponse);
    }
}
