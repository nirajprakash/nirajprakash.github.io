import { Injectable, InjectionToken } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export let API_CONSTANTS = new InjectionToken('app.api');

export class ApiConstants {


    // static API_BASE_URL: string;
    // public static API_URL: string = environment.apiUrl;
    public static API_URL: string = environment.apiUrl;


    getBaseUrl(): string {
        return ApiConstants.API_URL;
    }


  
    contact() {
        return {
            contacts: '/contact',
        }
    }

    

}
