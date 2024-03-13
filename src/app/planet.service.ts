import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private baseUrl = 'http://localhost:1607/api/'; 

  httpHeaders=new HttpHeaders({'Accept': 'application/json,  /, text/html' ,

  

})
  

 
  constructor(private http: HttpClient) { }
  requestOptions = {headers:this.httpHeaders};
  requestMultiPartOptions = {headers:new HttpHeaders({'Accept': 'multipart/form-data,  /, text/html' ,

  

})};
  
  login(loginObj:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}login/`, loginObj,this.requestOptions);
  }
  
  register(regObj:any){
    return this.http.post<any>(`${this.baseUrl}/register`, { regObj})
  }
}
 