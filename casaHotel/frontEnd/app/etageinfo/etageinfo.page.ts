import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etage } from '../etages/etages.page';

@Component({
  selector: 'app-etageinfo',
  templateUrl: './etageinfo.page.html',
  styleUrls: ['./etageinfo.page.scss'],
})
export class EtageinfoPage implements OnInit {
//  etage: Etage[]={};

  constructor(
    private route: ActivatedRoute
  ) {
    //this.etageimg = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe(res => {
      // this.etage = res;
    });
   }

  ngOnInit() {
  }

}
