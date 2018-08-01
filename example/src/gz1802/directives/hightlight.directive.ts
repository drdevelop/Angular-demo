import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[hl]'
})
export class HightlightDirective {
  @Input() hl: string;
  @Input() name: string;
  @Input() age: number;
  constructor(el: ElementRef) { 
    console.log(el)
    el.nativeElement.style.background = '#58bc58';
    console.log(this.hl);
  }

  //给当前指令的宿主元素添加事件监听
  @HostListener('click', ['$event']) onclick(event){
    console.log(event);
    console.log(this.hl, this.name, this.age)
  }
}

//自定义指令-全局
// Vue.Directive('hl', function(element, bindding, conde){
//   console.log()
//   element.style.background = '#58bc58'
// })

// <h1 v-hl="#ccc" name="Tom"></h1>

//自定义指令-局部
// new Vue({
//   directives: {
//     hl: function(el, bindding, cnode){},
//   }
// })