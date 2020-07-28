export class Painting {
  public name: string;
  public id: number;
  public description: string;
  public price: number;
  public imagePath: string;

  constructor(
    name: string,
    description: string,
    price: number,
    imagePath: string
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imagePath = imagePath;
  }
}
