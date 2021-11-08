import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  public toggleSubject= new Subject<{key:string; value: any}>();

  constructor() { }
}
