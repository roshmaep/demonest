import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  data:any=[
    {
      "img":"https://img.etimg.com/thumb/width-1200,height-900,imgsize-89613,resizemode-1,msid-68204974/news/company/corporate-trends/cmmi-certification-to-help-nest-group-achieve-1-billion-revenue.jpg"
    },
      {"img":"https://keralabiznews.com/wp-content/uploads/2016/03/nest-ip.jpg"
    },
      {"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx44UmRrWaGlOaD8qtdEnMW-tGaGIcNWIcZusZS56HA-xY75qyxvgJNzbrRNC4ZZz-EFs&usqp=CAU"
    },
    {
      "img":"https://www.wef.org.in/wp-content/uploads/2019/08/naz.jpg"
    },
    {
      "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQy2ogie9Orta2HCoDVtW6AeA-GMvbs-c3tXoCrEsBT8XUKIWLJ3OwvKjeQURXROxLb4&usqp=CAU"
    },
    {
      "img":"https://media-exp1.licdn.com/dms/image/C5622AQEHrgdf3uW9Ig/feedshare-shrink_2048_1536/0/1657791345845?e=2147483647&v=beta&t=uQIrlajg7yka9gMfTHTGvDkY_g9ctt7-gYQMYTGDdsE"
    }
    ]

}
