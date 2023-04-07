import {Component  } from '@angular/core';
import { AccountsService } from './new-account/accounts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  accounts:{name: string, status: string}[]=[];
  constructor(private Accountsservice:AccountsService){}
  ngOnInit(){
    this.accounts=this.Accountsservice.accounts;
  }

}



