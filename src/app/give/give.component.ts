import { Component, OnInit } from '@angular/core';
import { QueueServiceProxy } from '../../shared/service-proxies';
import moment from 'moment';

@Component({
  selector: 'app-give',
  templateUrl: './give.component.html',
  styleUrl: './give.component.scss'
})
export class GiveComponent implements OnInit {

  public number : string;
  public date : string | undefined = undefined;
  public time : string | undefined = undefined;  


  protected serviceProxy: QueueServiceProxy;
  constructor(serviceProxy: QueueServiceProxy) {
    this.serviceProxy = serviceProxy;

    this.number = "00";
  }
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.serviceProxy.generate().subscribe(result => {
      this.number = result.number ?? "00";
      this.date = moment(result.dateTime).format("DD/MM/yyyy");
      this.time = moment(result.dateTime).format("h:mm");
    })
  }


  
}
