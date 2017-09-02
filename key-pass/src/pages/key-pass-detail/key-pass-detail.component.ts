import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CryptoService } from '../../shared';

@Component({
    selector: 'key-pass-detail.component',
    templateUrl: 'key-pass-detail.component.html'
})
export class KeyPassDetailComponent {

    constructor(public navCtrl: NavController, private cryptoService: CryptoService) {
    }
}
