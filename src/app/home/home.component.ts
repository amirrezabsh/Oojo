import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { PublicService } from '../public.service';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['عربی', 'انگلیسی', 'فرانسوی','آلمانی','چینی','اسپانیایی'];
  languages: Observable<string[]>;
  constructor(public publicsrevice:PublicService) {
   }

  ngOnInit(): void {
    this.languages = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  // changeHeaderColor(){
  //   console.log('fuck');
  //   this.publicsrevice.changeColorHeader();
  // }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
