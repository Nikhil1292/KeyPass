import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CryptoService } from '../../shared';

@Component({
  selector: 'key-pass-list.component',
  templateUrl: 'key-pass-list.component.html'
})
export class KeyPassListComponent {

  constructor(public navCtrl: NavController, private cryptoService: CryptoService) {
  }
}
