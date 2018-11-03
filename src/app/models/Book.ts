import {merge} from 'lodash';

export class Book {
  cover: {
    large: string,
    small: string
  };
  title: string;
  author: string;
  releaseDate: string;
  pages: number;
  link: string;
  surname: string;
  sortReleaseDate: Date;

  constructor(params) {
    merge(this, params);
    this.surname = this.author.split(' ')[1];
    const [month, year] = this.releaseDate.split('/');
    this.sortReleaseDate = new Date(+year, +month - 1);
  }

}
