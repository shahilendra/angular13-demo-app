import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { BarChartComponent } from './dynamic/bar-chart/bar-chart.component';
import { BubbleChartComponent } from './dynamic/bubble-chart/bubble-chart.component';
import { DoughnutChartComponent } from './dynamic/doughnut-chart/doughnut-chart.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicDirective } from './dynamic/dynamic.directive';
import { LineChartComponent } from './dynamic/line-chart/line-chart.component';
import { PieChartComponent } from './dynamic/pie-chart/pie-chart.component';
import { TableChartComponent } from './dynamic/table-chart/table-chart.component';


@Component({
  selector: 'app-employee-chart',
  templateUrl: './employee-chart.component.html',
  styleUrls: ['./employee-chart.component.css']
})
export class EmployeeChartComponent implements OnInit {
  @ViewChild(DynamicDirective, { static: true }) private dynamicHost!: DynamicDirective;
  constructor() { }

  ngOnInit(): void {
    this.loadComponent('Bar');
  }

  private componentTypeFactory(link: string): Type<DynamicComponent> {
    let comp: Type<DynamicComponent>;
    if (link === 'Bar') {
      comp = BarChartComponent;
    } else if (link === 'Bubble') {
      comp = BubbleChartComponent;
    } else if (link === 'Doughnut') {
      comp = DoughnutChartComponent;
    } else if (link === 'Line') {
      comp = LineChartComponent;
    } else if (link === 'Pie') {
      comp = PieChartComponent;
    } else {
      comp = TableChartComponent;
    } 
    return comp;
  }
  private loadComponent(link: string): void {

    const viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DynamicComponent>(this.componentTypeFactory(link));
    componentRef.instance.data = link;
  }
  onClick(link: string) {
    this.loadComponent(link);
  }

}
