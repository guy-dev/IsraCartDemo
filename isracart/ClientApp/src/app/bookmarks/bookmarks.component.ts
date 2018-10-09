import { Component, OnInit, Inject } from '@angular/core';
import Repositorymodel = require("../../Models/Repository.model");
import Repository = Repositorymodel.Repository;
import { HttpClient } from '@angular/common/http';
import Core = require("@angular/core");

@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks.component.html',
    styleUrls: ['./bookmarks.component.scss']
})
/** bookmarks component*/
export class BookmarksComponent implements OnInit{
  private bookmarkedRepositories: Repository[] = [];
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }
  ///When Page initiated, fetching bookmarked repository from user session.
  ngOnInit(): void {
    this.http.get<Repository[]>(this.baseUrl + "api/Bookmarks/GetBookmarkedRepositories").subscribe(result => {
      this.bookmarkedRepositories = result;
    });
  }
  public width = '550px';
  public height = '550px';
}
