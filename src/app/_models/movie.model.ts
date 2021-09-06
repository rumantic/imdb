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
  public description: string | undefined;
  public directors: string | undefined;
  public plot: string | undefined;
  public keywordList: string[] | undefined;
  public starList: string[] | undefined;
  public stars: string | undefined;
  public keywords: string | undefined;


  constructor(
    id: string,
    rank: string,
    title: string,
    fullTitle: string,
    year: string,
    image: string,
    crew: string,
    imDbRating: string,
    imDbRatingCount: string,
    description?: string,
    directors?: string,
    plot?: string,
    keywordList?: string[],
    starList?: string[],
    stars?: string,
    keywords?: string,
  ) {
    this.id = title,
    this.rank = rank,
    this.title = title,
    this.fullTitle = fullTitle,
    this.year = year,
    this.image =  image,
    this.crew =  crew,
    this.imDbRating =  imDbRating,
    this.imDbRatingCount =  imDbRatingCount,
    this.description =  description,
    this.directors =  directors,
    this.plot =  plot,
    this.keywordList = keywordList,
    this.stars = stars,
    this.keywords = keywords,
    this.starList =  starList
  }
}
