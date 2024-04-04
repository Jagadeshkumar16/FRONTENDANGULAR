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
    return this.http.post<any>(`${this.baseUrl}user/`,regObj,this.requestOptions)
  }
  reproduction(reObj:any){
    return this.http.post<any>(`${this.baseUrl}organism/`, reObj,this.requestOptions)
  }
  getorganisms(){
    return this.http.get(this.baseUrl+'organism/',this.requestOptions)
  }
  deleteOrganism(id:any){
    return this.http.delete(this.baseUrl+'organism/'+id+'/',this.requestOptions);
  }
  simulate(action:any){
    return this.http.get(this.baseUrl+'organismsimulation/?action='+action,this.requestOptions);
  }
}
 