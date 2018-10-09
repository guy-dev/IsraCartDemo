export class Repository {
  public id: number;
  public name: string;
  public htmlUrl: string;
  public description: string;
  public ownerAvatalUrl: string;
  public ownerId : string;
  
  public static jsonToObject(jsonObj: any): Repository {
    let result = new Repository();
    result.id = jsonObj.id;
    result.description = jsonObj.description;
    result.htmlUrl = jsonObj.html_url;
    result.name = jsonObj.name;
    result.ownerAvatalUrl = jsonObj.owner.avatar_url;
    result.ownerId = jsonObj.owner.id;
    return result;
  }
}
