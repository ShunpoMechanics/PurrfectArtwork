import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean; //The ? makes this interface field optional
}

@Injectable({ providedIn: 'root' })

export class AuthService {
    constructor(private http: HttpClient) {

    }

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAyM314WPy2gPfdwds-OTePE9crQIhoyT8',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }).pipe(catchError(this.handleError)
            );
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAyM314WPy2gPfdwds-OTePE9crQIhoyT8',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }).pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error has occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'A user with this email already exists';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'A user with this email and/or password was not found';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'A user with this email and/or password was not found';
                break;
        }
        return throwError(errorMessage);
    }

}