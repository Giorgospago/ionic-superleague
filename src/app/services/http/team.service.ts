import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IResponse } from '../../interfaces/IResponse';
import { ITeam } from 'src/app/interfaces/ITeam';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  public getTeams() {
    return this.http.get<IResponse<ITeam[]>>(environment.baseUrl + "/superleague");
  }

}
