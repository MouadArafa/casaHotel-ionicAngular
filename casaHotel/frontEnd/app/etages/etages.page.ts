import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface Etage {
  id: number;
  img: string;
  Nom_C_Emp: string;
  nbEmp: number;
  tenu: string;
  TypeChambre: string;
  nbChambre: number;
}
@Component({
  selector: 'app-etages',
  templateUrl: './etages.page.html',
  styleUrls: ['./etages.page.scss'],
})
export class EtagesPage implements OnInit {
  etage: Etage[] = [
    {
      id:1,
      img:'assets/image/jaune.png' ,
      Nom_C_Emp: 'Arafa mouad',
      nbEmp: 3000,
      tenu: 'warning',
      TypeChambre: 'Familiale',
      nbChambre: 6},
      {
        id:2,
        img:'assets/image/bleu.png' ,
        Nom_C_Emp: 'Arafa mouad',
        nbEmp: 3000,
        tenu: 'primary',
        TypeChambre: 'Double',
        nbChambre: 6},
        {
          id:3,
          img:'assets/image/rouge.png',
          Nom_C_Emp: 'Amine hanafi',
          nbEmp: 3000,
          tenu: 'danger',
          TypeChambre: 'Triple',
          nbChambre: 5},
          {
            id:4,
            img:'assets/image/vert.png' ,
            Nom_C_Emp: 'Arafa mouad',
            nbEmp: 3000,
            tenu: 'success',
            TypeChambre: 'Familiale',
            nbChambre: 6},
  ];
  constructor(private router: Router) { }

  gotoDetails(etage){
    this.router.navigate(['/etageinfo'],{
      queryParams:etage
    });
  }
  ngOnInit() {
  }

}
