import {Directive} from 'angular2/core';  
@Directive({
  selector: "my-component",

  // Here, we are exporting the directive class instance as a 
  // bindable reference (for the #var syntax).
  exportAs: "DirB"
})
export class DirectiveB {
  constructor() { 

    this.testLabel = "DirB";


  }
}