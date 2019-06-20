import { Component, OnInit } from '@angular/core';
import { MessageItem } from 'src/app/models/MessageItem';
import { UpdateLogService } from 'src/app/services/update-log.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filterForm: FormGroup;
  items: any[] = [];
  constructor(private updateLogService: UpdateLogService,
    private router: Router,
    private fb: FormBuilder) { }
  types = [
    {description: 'Error', value: 'ERROR'},
    {description: 'Warning', value: 'WARNING'},
    {description: 'Info', value: 'INFO'},
    {description: 'Debug', value: 'DEBUG'},
  ];


  ngOnInit() {
    this.setInitialItems();
    this.initializeForm();
  }

  initializeForm() {
    this.filterForm = this.fb.group({
      title: [],
      type: []
    });

  }

  setInitialItems() {
    this.updateLogService.getLogs().subscribe((data) => {
      this.items = data;
      this.filter();
    });
    this.addItem();
  }

  clear() {
    this.filterForm.reset();
  }

  filter() {
    if (this.filterForm.controls['title'].value) {
      this.items =  this.items.filter((data) => data.payload.doc.data().title.toLowerCase().indexOf(
        this.filterForm.controls['title'].value.toLowerCase()
      ) !== -1);
    }
    if (this.filterForm.controls['type'].value) {
      this.items =  this.items.filter((data) => data.payload.doc.data().type === this.filterForm.controls['type'].value);
    }
  }

  getItems() {
    this.updateLogService.getLogs().subscribe((data) => {
      this.items = data;
      this.filter();
    });
  }

  changeRoute(router: string) {
    this.router.navigate([`/${router}`]);
  }

  addItem() {
    this.updateLogService.addLogs({
      type: "ERROR",
      title: "Error on Service 1",
      message: "cannot reach the server"
    }).then(
      res => {
      console.log(res);
      }
    )
  }

}
