import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit,  AfterViewChecked, OnDestroy {

  public price: number = 0;
  public isProductAvailable: boolean = true;

  constructor() {
    console.log('1. constructor');
  }
  ngOnInit(): void {
    console.log('ngOnInit')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('ngOnChanges')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

  increasePrice(): void {
    this.price += 100;
  }

}
''
