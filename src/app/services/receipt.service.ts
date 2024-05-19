import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receipt } from '../models/receipt';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/receipt";
   }

  getAll(): Observable<Receipt[]> {
    return this.http.get<Receipt[]>(this.url);
  }

  deleteById(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.url+"/"+id);
  }

  uploadImage(formData: FormData) {
    return this.http.post<Receipt>(this.url, formData);
  }
}
