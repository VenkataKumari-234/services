import { Component } from '@angular/core' ;
import { LoggingService } from '../logging.services';
import { AccountsService } from './accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers: [LoggingService,AccountsService]
})
export class NewAccountComponent {
 
  constructor(private loggingservice: LoggingService,
    private accountsService:AccountsService){
    this.accountsService.statusUpdated.subscribe(
      (status: string)=> alert('New Status:' +status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string){
    this.accountsService.addAccount(accountName,accountStatus);
    //this.loggingservice.LogStatusChange(accountStatus);
    
  }
}

