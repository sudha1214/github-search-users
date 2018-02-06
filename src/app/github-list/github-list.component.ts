import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-list',
  templateUrl: './github-list.component.html',
  styleUrls: ['./github-list.component.css'],
  providers: [GithubService]
})
export class GithubListComponent implements OnInit {
  public searchText = '';
  public searchCount;
  public searchResult;

  constructor(private router:Router, private githubService: GithubService) { }

  ngOnInit() {
  }

  onKeyup(e) {
    this.searchText = e.target.value;
  }

  getUsers() {
    this.githubService.getUser(this.searchText).subscribe(res => {
      this.searchResult = res;
      this.searchCount = res.total_count;
    });
  }

  getUserDetails(user) {
    this.router.navigate(['user', user.login]);
  }

}
