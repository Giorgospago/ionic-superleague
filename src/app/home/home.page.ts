import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/http/team.service';
import { ITeam } from '../interfaces/ITeam';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public default: string = "/assets/images/default.jpeg";
  public teams: ITeam[] = [];

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.teamService.getTeams()
      .subscribe((response) => {
        if (response.success) {
          this.teams = response.data;
        }

      });
  }

  public doRefresh(event) {
    this.teamService.getTeams()
      .subscribe((response) => {
        event.target.complete();
        if (response.success) {
          this.teams = response.data;
        }
      });
  }
}
