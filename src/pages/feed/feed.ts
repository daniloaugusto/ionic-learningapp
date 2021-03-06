import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Danilo Augusto",
    data: "5 de Novembro de 1955",
    descricao: "Estou criando um novo app muito massa...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11 hrs atras"
  }

  public nome_usuario:string = "Danilo Augusto";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
    //alert(num1+num2);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 99);
  }

}
