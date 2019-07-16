import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public photos: string[] = new Array(5).fill('');
  private activeNumber: number;

  constructor() { }

  ngOnInit() {
    this.getPhotos();
    this.activatePhoto();
  }

  private getPhotos() {
    this.photos = this.photos.map((item, index) => `../../../assets/footer/${index + 1}.jpg`);
  }
  private activatePhoto() {
    this.activeNumber = this.getActivateNumber();
    setTimeout(() => {
      this.activatePhoto();
    }, 5000);
  }
  public loadBackground($event: Event) {

  }
  private getActivateNumber(): number {
    let randomNumber: number = 0;
    do {
      randomNumber = Math.round(Math.random() * (5 - 1) + 1);
    } while (randomNumber === this.activeNumber);
    return randomNumber;
  }
}
