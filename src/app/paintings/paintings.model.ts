export class Painting {
  public name: string;
  public id: number;
  public description: string;
  public price: number;
  public imagePath: string;
  public type: string;

  constructor(
    name: string,
    description: string,
    price: number,
    imagePath: string,
    type: string
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imagePath = imagePath;
    this.type = type;
  }
}
