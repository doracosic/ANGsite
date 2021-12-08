import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="https://api.github.com";
  constructor(private http: HttpClient) { }

    getUsers(){
      
      return this.http.get('https://api.github.com/users?per_page=12')
      

    }
    getUser(username: string) {
      return this.http.get(`${this.apiUrl}/users/${username}?per_page=12`); 
    }
    
    //getUser(username: string){
      //return this.http.get('https://api.github.com/users/${username}?per_page=12')
    // }
  }



