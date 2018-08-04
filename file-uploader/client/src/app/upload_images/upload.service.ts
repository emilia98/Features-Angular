import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//Observable

@Injectable()
export class UploadService {
    constructor(
        private httpClient :HttpClient
    ) {}

    sendForm(form) {  
        // console.log(form);
        return this.httpClient.post(
            'http://localhost:5000/ad/new',
            
            form, 
            {
                headers: {
                    'enctype': 'multipart/form-data'
                }
            }
        );
    }
}