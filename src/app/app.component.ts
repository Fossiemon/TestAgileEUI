import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'AgileEngineTest';
  totalAngularPackages;
  constructor(private http: HttpClient) { }
  ngOnInit(){

  $("#CC").click(function(){
    var $this = $(this);

    if($this.data('clicked')) {
      debugger;
      $("#DetailsCC").hide();
    }
    else {
        $this.data('clicked', true);
        debugger;
        $("#DetailsCC").show();
    }
});

$("#DC").click(function(){
  var $this = $(this);
  if($this.data('clicked')) {
    debugger;
    $("#DetailsDC").hide();
  }
  else {
      $this.data('clicked', true);
      debugger;
      $("#DetailsDC").show();
  }
});

    this.http.get<any>('https://localhost:44339/api/values').subscribe(data => {
      this.totalAngularPackages = data.total;
  }) 
    }}
