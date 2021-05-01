
import { Injectable } from '@angular/core';

import { AlertController } from '@ionic/angular';

import * as Models from '../models/'

/**
 * Example Usage:
 *
 * const alertParams: Models.AlertParams = {
 *   header: 'A header to display',
 *   message: 'A body giving more details',
 *   buttons: [
 *       text: 'Continue', role: 'continue' },
 *     { text: 'Cancel', role: 'cancel' }
 *   ]
 * }
 *
 * this.alertService.presentAlert(new Models.AlertParams(alertParams))
 *   .then(async _ => {
 *     const { role } = await this.alertService.alert.onDidDismiss()
 *     console.log('Users action: ', role)
 *   })
 */

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public alert

  constructor (
    private alertController: AlertController
  ) { }

  async presentAlert (alertParams: Models.AlertParams) {
    this.alert = await this.alertController.create({
      header: alertParams.header,
      message: alertParams.message,
      backdropDismiss: false,
      buttons: alertParams.buttons
    });

    await this.alert.present();
  }
}
