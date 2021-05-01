import { Injectable } from '@angular/core';

import { ToastController } from '@ionic/angular';

import * as Models from '../models/'

/**
 * Example Usage:
 * 
 * const message: string = 'Toast message'
 * const toastOptions: Models.ToastOptions = {
 *   header: 'Toast header',
 *   type: Enums.ToastType.success,
 *   position: Enums.ToastPosition.top,
 *   duration: 3000,
 *   button: new Models.ToastButton({
 *     side: Enums.ToastButtonSide.end,
 *     icon: 'trash-outline',
 *     text: 'close',
 *     role: 'cancel'
 *   })
 * }
 *
 * this.toastService.presentToast(message, toastOptions)
 *   .then(async _ => {
 *     const { role } = await this.toastService.toast.onDidDismiss();
 *     console.log('Users action: ', role);
 *   })
 */

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toast: HTMLIonToastElement

  constructor (
    private toastController: ToastController
  ) { }

  /**
   * Displays a toast to the user
   * 
   * @param message The text to be displayed
   * @param toastOptions Optional data for the toast
   */
  async presentToast (message: string, toastOptions: Models.ToastOptions) {
    this.toast = await this.toastController.create({
      header: toastOptions.header,
      message,
      position: toastOptions.position,
      color: toastOptions.type,
      duration: toastOptions.duration,
      buttons: [toastOptions.button]
    })

    await this.toast.present()
  }

  async dismissToast () {
    if (this.toast && this.toast.dismiss) {
      this.toast.dismiss()
    }
  }
}
