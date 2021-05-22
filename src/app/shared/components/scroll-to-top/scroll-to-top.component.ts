import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent {

  @Output() scrollToTopEvent = new EventEmitter()

  constructor() {   }

  scrollToTop() {
    this.scrollToTopEvent.emit()
  }
}
