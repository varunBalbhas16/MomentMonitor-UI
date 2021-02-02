import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {
  getadmindashboard: any = {};

  month = [];
  totalRecycled = [];
  chart = [];
  totalWaste = [];
  totalContribution = [];
  rank = [];
  totalWeight = [];
  contributor = [];

  // new fields for monthlyTripStatistics
  tripStatsMonth = [];
  tripStatsKms = [];
  tripStatsCost = [];
  tripStatsTickets = [];

  // new fields for monthlyTicketStatistics
  ticketStatsMonth = [];
  ticketStatsTickets = [];
  ticketStatsSelf = [];
  ticketStatsAdmin = [];

  // new fields for ticketDPMRanking
  ticketDPMRank = [];
  ticketDPMName = [];
  ticketDPMTickets = [];

  // new fields for driverAttendanceRanking
  driverRanks = [];
  driverNames = [];
  driverDays = [];

  ticketDPMRanking = [];
  ticketStatsBar = [];
  driverAttendanceBar = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    debugger;
    this.userService.getadmindashboard().subscribe(res => {
      debugger;
      this.getadmindashboard = res;

      const monthlyTripStatistics = res['monthlyTripStatistics'].map(res => res);
      
      let ticketDPMRanking = res['ticketDPMRanking'].map(res => res);
      
      const monthlyTicketStatistics = res['monthlyTicketStatistics'].map(res => res);
      
      const driverAttendanceRanking = res['driverAttendanceRanking'].map(res => res);

      monthlyTripStatistics.forEach((res) => {
          this.tripStatsMonth.push(res.month);
          this.tripStatsKms.push(res.totalTripKms);
          this.tripStatsCost.push(res.totalTripCost);
          this.tripStatsTickets.push(res.totalTickets);
        }
      );

      ticketDPMRanking.forEach( (res) => {
          this.ticketDPMRank.push(res.rank);
          this.ticketDPMName.push(res.dpm);
          this.ticketDPMTickets.push(res.tickets);
        }
      );

      monthlyTicketStatistics.forEach((res) => {
          this.ticketStatsMonth.push(res.month);
          this.ticketStatsTickets.push(res.tickets);
          this.ticketStatsSelf.push(res.selfTickets);
          this.ticketStatsAdmin.push(res.adminTickets);
        }
      );

      driverAttendanceRanking.forEach( (res) => {
          this.driverRanks.push(res.rank);
          this.driverNames.push(res.driverName);
          this.driverDays.push(res.days);
        }
      );

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.tripStatsMonth,
          datasets: [
            {
              label: 'Trip Kms',
              data: this.tripStatsKms,
              borderColor: '#1386e8',
              // fill: true,
              text: 'trip kms',
              backgroundColor: '#1386e8',
            },
            {
              label: 'Trip Cost',
              data: this.tripStatsCost,
              borderColor: '#13e87c',
              fill: false,
              backgroundColor: '#13e87c',
            },
            {
              label: 'Tickets',
              data: this.tripStatsTickets,
              borderColor: '#ff0000',
              fill: false,
              backgroundColor: '#ff0000',
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          title: {
            display: true,
            position: 'top',
            text: 'Monthly Trips Statistics',
            fontSize: 18,
            fontColor: '#111'
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

      this.ticketDPMRanking = new Chart('ticketDPMRanking', {
        type: 'bar',
        data: {
          // labels: this.rank,
          labels: this.ticketDPMName,
          datasets: [
            {
              label: 'Tickets',
              data: this.ticketDPMTickets,
              borderColor: '#1386e8',
              // fill: true,
              backgroundColor: '#1386e8',
            }

          ]
        },
        options: {
          legend: {
            display: false
          },
          title: {
            display: true,
            position: 'top',
            text: 'Top Ticket DPMs',
            fontSize: 18,
            fontColor: '#111'
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }],
          }
        }
      });

      this.ticketStatsBar = new Chart('ticketStatsBar', {
        type: 'bar',
        data: {
          labels: this.ticketStatsMonth,
          datasets: [
            {
              label: 'Tickets',
              data: this.ticketStatsTickets,
              borderColor: '#1386e8',
              // fill: true,
              text: 'tickets',
              backgroundColor: '#1386e8',
            },
            {
              label: 'Self Ticket',
              data: this.ticketStatsSelf,
              borderColor: '#13e87c',
              fill: false,
              backgroundColor: '#13e87c',
            },
            {
              label: 'Admin Tickets',
              data: this.ticketStatsAdmin,
              borderColor: '#ff0000',
              fill: false,
              backgroundColor: '#ff0000',
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          title: {
            display: true,
            position: 'top',
            text: 'Monthly Ticket Statistics',
            fontSize: 18,
            fontColor: '#111'
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

      this.driverAttendanceBar = new Chart('driverAttendanceBar', {
        type: 'bar',
        data: {
          // labels: this.retailerrank,
          labels: this.driverNames,
          datasets: [
            {
              label: 'Days',
              data: this.driverDays,
              borderColor: '#1386e8',
              // fill: true,
              backgroundColor: '#1386e8',
            }

          ]
        },
        options: {
          legend: {
            display: false
          },
          title: {
            display: true,
            position: 'top',
            text: 'Driver Attendance Statistics',
            fontSize: 18,
            fontColor: '#111'
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }],
          }
        }
      });
    });
  }

}
