import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[champBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setHeight(250);
    this.setBorder('#000000')
  }

  @Input('champBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || '#5b1000');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#000000');
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 2px ${color}`
  }
}
