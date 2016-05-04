import {Directive} from 'angular2/core';  
@Directive({
	selector: "my-component",

	// Here, we are exporting the directive class instance as a 
	// bindable reference (for the #var syntax).
	exportAs: "DirC"
})
export class DirectiveC {
  constructor() { 

	  this.testLabel = "DirC";


  }
}