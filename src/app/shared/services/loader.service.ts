import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private _loader: any

  private _loaders = []

  private _loaderCount: number = 0

  constructor (
    private loadingController: LoadingController
  ) { }

  async presentLoader (call) {

    this._loaders.push(call)

    if (this._loaderCount === 0) {
      this._loader = await this.loadingController.create({
        message: 'please wait...',
        mode: 'ios'
      })

      await this._loader.present()

      this._loaderCount++
    }
  }

  dismissLoader (call) {
    this._loaders.splice(this._loaders.indexOf(call), 1)

    if (!this._loaders.length && this._loader) {
      this._loaderCount = 0
      this._loader.dismiss()
      this._loader = null
    }
  }
}
