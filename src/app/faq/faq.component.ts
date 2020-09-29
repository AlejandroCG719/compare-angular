import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line:import-spacing
import  { Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent implements OnInit {

  faqs: Array<any>;
  constructor(private htpp: Http) {
    // tslint:disable-next-line:no-shadowed-variable max-line-length
    this.htpp.get('http://jsonplaceholder.typicode.com/posts')
      .pipe(map(response => response.json())).subscribe(res => this.faqs = res);
    console.log(this.faqs);
  }
  ngOnInit(): void {
  }

}
