export class MovieModel {
  public id: string;
  public rank: string;
  public title: string;
  public fullTitle: string;
  public year: string;
  public image: string;
  public crew: string;
  public imDbRating: string;
  public imDbRatingCount: string;


  constructor(
    id: string,
    rank: string,
    title: string,
    fulltitle: string,
    year: string,
    image: string,
    crew: string,
    imDbRating: string,
    imDbRatingCount: string,
  ) {
    this.id = title,
    this.rank = rank,
    this.title = title,
    this.fullTitle = fulltitle,
    this.year = year,
    this.image =  image,
    this.crew =  crew,
    this.imDbRating =  imDbRating,
    this.imDbRatingCount =  imDbRatingCount
  }
}
