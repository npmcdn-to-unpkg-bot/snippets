import { Component } from 'angular2/core';  

@Component({  
  selector: 'my-component',  

  // Here, we are exporting the directive class instance as a 
  // bindable reference (for the #var syntax).
  // --
  // NOTE: Components export an implicit reference that can be 
  // bound without a label. This is in comparison to an Attribute
  // Directive, which can only be bound-to with an explicit name.
  exportAs: "ComA",
  template:
  `
              <div>
                Such component! Much Directive!
              </div>
            `
})   
export class ComponentA implements AfterViewInit {  
  constructor() {
    this.testLabel = "ComA";
  }

}
