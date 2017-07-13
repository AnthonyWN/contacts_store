import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../my-data.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  constructor(private newService: MyDataService) { }

  ngOnInit() {
    this.newService.fetchList()
      .subscribe(contacts => {
        console.log(contacts);
      });
  }

}
