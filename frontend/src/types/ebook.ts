export interface Ebook {
  id: string;
  title: string;
  desc?: string;
  url: string;
  imgUrl: string;
  regularPrice: number;
  salesPrice?: number;
}