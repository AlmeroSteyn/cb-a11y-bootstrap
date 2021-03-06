import {Component, EventEmitter, Output} from "@angular/core";

// #docregion
@Component({
  selector: 'a11y-custom-button',
  templateUrl: './app/shared/a11y-custom-button.component.html',
  host: {
    'role': 'button',
    'tabindex': '0',
    'class': 'btn btn-primary',
    '(keydown.space)': 'onKeyDown()',
    '(keydown.enter)': 'onKeyDown()'
  }
})
export class A11yCustomButtonComponent {

  @Output() click:EventEmitter<any> = new EventEmitter();

  onKeyDown() {
    this.click.emit(null);
  }

}
// #enddocregion
