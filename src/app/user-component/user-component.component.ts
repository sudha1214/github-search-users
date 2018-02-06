import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css'],
  providers: [ GithubService ]
})
export class UserComponentComponent implements OnInit {
  public userId;
  public user;
  
  constructor(private githubService: GithubService,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.activeRoute.snapshot.params['userId'];
    this.githubService.getUserDetails(this.userId).subscribe(
      res => {
        this.user = res;
      }
    )
  }

}
