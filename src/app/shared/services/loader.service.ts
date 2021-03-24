import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private _loader

  constructor (
    private loadingController: LoadingController
  ) { }

  async presentLoader () {
    const _loader = await this.loadingController.create({
      message: 'please wait...',
      duration: 1000,
      mode: 'ios'
    })
    
    await _loader.present();
  }
}
