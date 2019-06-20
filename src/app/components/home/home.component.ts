import { Component, OnInit } from '@angular/core';
import { MessageItem } from 'src/app/models/MessageItem';
import { UpdateLogService } from 'src/app/services/update-log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: any[] = [];
  constructor(private updateLogService: UpdateLogService,
    private router: Router) { }
  types = [
    {description: 'Error', value: 'ERROR'},
    {description: 'Warning', value: 'WARNING'},
    {description: 'Info', value: 'INFO'},
    {description: 'Debug', value: 'DEBUG'},
  ];


  ngOnInit() {
    this.setInitialItems();
  }


  setInitialItems() {
    this.updateLogService.getLogs().subscribe((data) => {
      this.items = data;
    });
  }

  changeRoute(router: string) {
    this.router.navigate([`/${router}`]);
  }

  addItem() {
    this.updateLogService.addLogs({
      type: "ERROR",
      messageId: 1,
      title: "Test",
      message: "this is a test"
    }).then(
      res => {
      console.log(res);
      }
    )
  }

}
