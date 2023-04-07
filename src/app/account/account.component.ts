import { Component, Input} from '@angular/core';
import { LoggingService } from '../logging.services';
import { AccountsService } from '../new-account/accounts.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 
  constructor (private loggingService: LoggingService,
    private accountsService: AccountsService ){}
  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id,status);
   //this.loggingService.LogStatusChange(status);
     this.accountsService.statusUpdated.emit(status);
  }
}
