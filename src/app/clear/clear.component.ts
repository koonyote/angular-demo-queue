import { Component, OnInit } from '@angular/core';
import { QueueServiceProxy, ServiceProxy } from '../../shared/service-proxies';

@Component({
  selector: 'app-clear',
  templateUrl: './clear.component.html',
  styleUrl: './clear.component.scss'
})
export class ClearComponent implements OnInit {

  protected serviceProxy: QueueServiceProxy;
  constructor(serviceProxy: QueueServiceProxy) {
    this.serviceProxy = serviceProxy;
  }

  public currentNo: string = "00";

  ngOnInit(): void {
    this.featchData();
  }


  featchData() {
    this.serviceProxy.get().subscribe(result => {
      this.currentNo = result.result ?? "";
    })
  }

  onClearBT() {
    this.currentNo = "00";
    this.serviceProxy.delete().subscribe(result => {
      this.featchData();
    })
  }
}
