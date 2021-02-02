import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-retailerdashboard',
  templateUrl: './retailerdashboard.component.html',
  styleUrls: ['./retailerdashboard.component.scss']
})
export class RetailerdashboardComponent implements OnInit {
getadmindashboard:any ={};

  month = [];
  totalRecycled = [];
  chart = [];
  topschool =[];
  totalWaste = [];
  totalContribution =[];
  rank =[];
  totalWeight=[];
  contributor=[];
  retailermonth = [];
  retailertotalRecycled = [];
  retailerchart = [];
  topretailer =[];
  retailertotalWaste = [];
  retailertotalContribution =[];
  retailerrank =[];
  retailertotalWeight=[];
  retailercontributor=[];
  constructor(private userService: UserService) { }

  ngOnInit() {
     this.userService.getadmindashboard().subscribe(res=>{
  // debugger
        this.getadmindashboard = res;

        let schoolMonthlyContribution =res['schoolMonthlyContribution'].map(res =>res);

      let topschool =res['topSchools'].map(res =>res);
        let retailerMonthlyContribution =res['retailerMonthlyContribution'].map(res =>res);

      let topRetailers =res['topRetailers'].map(res =>res);
         schoolMonthlyContribution.forEach((res)=>{
        //  debugger
          this.month.push(res.month);
        this.totalContribution.push(res.totalContribution);
         this.totalRecycled.push(res.totalRecycled);
         this.totalWaste.push(res.totalWaste);
        });

            topschool.forEach((res)=>{
        
          this.rank.push(res.rank);
        this.totalWeight.push(res.totalWeight);
        this.contributor.push(res.contributor);
         });


      retailerMonthlyContribution.forEach((res)=>{
        //  debugger
          this.retailermonth.push(res.month);
        this.retailertotalContribution.push(res.totalContribution);
         this.retailertotalRecycled.push(res.totalRecycled);
         this.retailertotalWaste.push(res.totalWaste);
        });

          topRetailers.forEach((res)=>{
        
          this.retailerrank.push(res.rank);
        this.retailertotalWeight.push(res.totalWeight);
        this.retailercontributor.push(res.contributor);
         });


        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
          labels: this.month,
          datasets: [
            {
              label: "Contribution",
              data: this.totalContribution,
              borderColor: '#1386e8',
             // fill: true,
               text:'totalContribution',
              backgroundColor: "#1386e8",
            },
            {
             label: "Recycled",
              data: this.totalRecycled,
              borderColor: '#13e87c',
              fill: false,
              backgroundColor: "#13e87c",
            },
            {
             label: "Waste",
              data: this.totalWaste,
              borderColor: '#ff0000',
              fill: false,
              backgroundColor: "#ff0000",
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
        title: {
          display: true,
          position: "top",
          text: "School Monthly Contribution",
          fontSize: 18,
          fontColor: "#111"
        },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });


        this.topschool = new Chart('topschool', {
          type: 'bar',
           data: {
         // labels: this.rank,
          labels: this.contributor,
          datasets: [
            {
              label: 'Weight',
              data:  this.totalWeight,
              borderColor: '#1386e8',
             // fill: true,
              backgroundColor: "#1386e8",
            }
            
          ]
        },
        options: {
          legend: {
            display: false
          },
           title: {
          display: true,
          position: "top",
          text: "Top Schools",
          fontSize: 18,
          fontColor: "#111"
        },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });


        this.retailerchart = new Chart('retailerchart', {
          type: 'bar',
          data: {
          labels: this.retailermonth,
          datasets: [
            {
              label: "Contribution",
              data: this.retailertotalContribution,
              borderColor: '#1386e8',
             // fill: true,
               text:'totalContribution',
              backgroundColor: "#1386e8",
            },
            {
             label: "Recycled",
              data: this.retailertotalRecycled,
              borderColor: '#13e87c',
              fill: false,
              backgroundColor: "#13e87c",
            },
            {
             label: "Waste",
              data: this.retailertotalWaste,
              borderColor: '#ff0000',
              fill: false,
              backgroundColor: "#ff0000",
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
        title: {
          display: true,
          position: "top",
          text: "Retailer Monthly Contribution",
          fontSize: 18,
          fontColor: "#111"
        },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });


        this.topretailer = new Chart('topretailer', {
          type: 'bar',
           data: {
         // labels: this.retailerrank,
          labels: this.retailercontributor,
          datasets: [
            {
              label: 'Weight',
              data:  this.retailertotalWeight,
              borderColor: '#1386e8',
             // fill: true,
              backgroundColor: "#1386e8",
            }
            
          ]
        },
        options: {
          legend: {
            display: false
          },
           title: {
          display: true,
          position: "top",
          text: "Top Retailers",
          fontSize: 18,
          fontColor: "#111"
        },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
   }); 


  }


}
