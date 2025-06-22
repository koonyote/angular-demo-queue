import { Component, OnInit } from '@angular/core';
import { QueueServiceProxy, ServiceProxy } from '../../shared/service-proxies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  protected serviceProxy: QueueServiceProxy;
  constructor(serviceProxy: QueueServiceProxy) {
    this.serviceProxy = serviceProxy;
  }

  clearDisable = true;

  ngOnInit(): void {
    this.serviceProxy.get().subscribe(result => {
      if (result.result != "00")
      {
        this.clearDisable = false;
      }
      else 
      {
        this.clearDisable = true;
      }
    })
  }


  // ServiceProxy
}
