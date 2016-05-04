import { Component, AfterViewInit, ViewChild } from 'angular2/core';  
import { ComponentA } from './componentA.component';
import { DirectiveB } from './directiveB.directive';
import { DirectiveC } from './directiveC.directive';

@Component({  
  selector: 'demo-component',  
  directives: [ComponentA, DirectiveB, DirectiveC], 
  // In the following template, notice that we are setting up
  // multiple references to our component, including an implicit
  // #var reference that requires no label. 
  template: `  
              <my-component
                #testImplicit
                #testA="ComA"
                #testB="DirB"
                #testC="DirC">
              </my-component>

              <p>
                testImplicit: {{ testImplicit.testLabel }}<br />
                testA: {{ testA.testLabel }}<br />
                testB: {{ testB.testLabel }}<br />
                testC: {{ testC.testLabel }}<br />
              </p> 
  `
})   
export class DemoComponent implements AfterViewInit {

  // Setup ViewChild queries for the #ref instances. 
  @ViewChild('testImplicit') qTestImplicit: ComponentA;
  @ViewChild('testA') qTestA: ComponentA;
  @ViewChild('testB') qTestB: DirectiveB;
  @ViewChild('testC') qTestC: DirectiveC;

  // I get called once after the view is initialized / checked for the
  // first time. At this point, all of the DOM-queries have been linked.
  ngAfterViewInit() {
    console.group("ViewChild Queries");
    console.log("qTestImplicit:", this.qTestImplicit);
    console.log("qTestA:", this.qTestA);
    console.log("qTestB:", this.qTestB);
    console.log("qTestC:", this.qTestC);
    console.groupEnd();
  }

}
