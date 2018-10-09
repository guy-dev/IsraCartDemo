import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Repositorymodel = require("../../Models/Repository.model");
import { map, filter, switchMap } from 'rxjs/operators';
import Repository = Repositorymodel.Repository;
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly GITHUB_API : string = "https://api.github.com/search/repositories?q=";
  private repositoryItems: Repository[] = [];
  public keyword : string;
  constructor(@Inject('BASE_URL') private baseUrl: string,private http: HttpClient) {
    
  }
  public search : boolean = false;
  public items: any[] = [
    { title: 'mongoid-searchable', url: 'https://avatars0.githubusercontent.com/u/283933?v=4' },
    { title: 'Mountain', url: 'https://avatars0.githubusercontent.com/u/13056414?v=4' },
    { title: 'Sky', url: 'https://bit.ly/2cJl3Cx' }
  ];
  public width = '550px';
  public height = '550px';
  public OnSearch(): void {
    this.repositoryItems = [];
    this.http.get(this.GITHUB_API + this.keyword).subscribe((result: any) => {
      let items = result.items;
      for (let item of items) {
        this.repositoryItems.push(Repository.jsonToObject(item));
      }
      this.search = true;
    });
  }

  ///Adding new repository to bookmarks. 
  public OnAddToBookmarks(item: any): void {
    this.http.post(this.baseUrl + "api/Bookmarks/AddBookmark", item).subscribe(result => {
        alert("Bookmark has been added succesfully!");
    },
      err => {
        alert(err.error);
      }  );
  }

}
