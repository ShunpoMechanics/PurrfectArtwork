export class Painting {
  public name: string;
  public id: number;
  public description: string;
  public price: number;
  public imagePath1: string;
  public imagePath2: string;
  public imagePath3: string;
  public imagePath4: string;
  public imagePath5: string;
  public type: string;

  constructor(
    name: string,
    description: string,
    price: number,
    imagePath1: string,
    imagePath2: string,
    imagePath3: string,
    imagePath4: string,
    imagePath5: string,
    type: string,
    id: number
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imagePath1 = imagePath1;
    this.imagePath2 = imagePath2;
    this.imagePath3 = imagePath3;
    this.imagePath4 = imagePath4;
    this.imagePath5 = imagePath5;
    this.type = type;
    this.id = id;
  }
}
