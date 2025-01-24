import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../../myservice/apicall.service';
import { concatAll } from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent implements OnInit {

  searchText:string = "";
// mountain:any[] = [
//   {
//     "name":"Mountain",
//     "img":"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg",
//     "footer":"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg"
//   },
//   {
//     "name":"Mountain",
//     "img":"https://media.istockphoto.com/id/1672317574/photo/ama-dablam-mountain-peak.webp?b=1&s=170667a&w=0&k=20&c=Ea8yDEHpUemrRuMZUKGPDBE11YTWVksIupMN8FkEBf8=",
//     "footer":"https://media.istockphoto.com/id/1672317574/photo/ama-dablam-mountain-peak.webp?b=1&s=170667a&w=0&k=20&c=Ea8yDEHpUemrRuMZUKGPDBE11YTWVksIupMN8FkEBf8="
//   },
//   {
//     "name":"Mountain",
//     "img":"https://wallpapers.com/images/hd/4k-mountain-l3f04sogeaabr5h0.jpg",
//     "footer":"https://wallpapers.com/images/hd/4k-mountain-l3f04sogeaabr5h0.jpg"
//   },
//   {
//     "name":"Mountain",
//     "img":"https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf-1200-80.jpg",
//     "footer":"https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf-1200-80.jpg"
//   },
//   {
//     "name":"Nature",
//     "img":"https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
//     "footer":"https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
//   },
//   {
//     "name":"Nature",
//     "img":"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704412800&semt=sph",
//     "footer":"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704412800&semt=sph"
//   },

//   {
//     "name":"Nature",
//     "img":"https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg",
//     "footer":"https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg"
//   },
//   {
//     "name":"Nature",
//     "img":"https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
//     "footer":"https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
//   },
//   {
//     "name":"Buildings",
//     "img":"https://images.unsplash.com/photo-1503951458645-643d53bfd90f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
//     "footer":"https://images.unsplash.com/photo-1503951458645-643d53bfd90f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3Dg"
//   },
//   {
//     "name":"Buildings",
//     "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/640px-Dubai_Marina_Skyline.jpg",
//     "footer":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/640px-Dubai_Marina_Skyline.jpg"
//   },
//   {
//     "name":"Buildings",
//     "img":"https://png.pngtree.com/thumb_back/fh260/background/20230314/pngtree-beautiful-background-of-high-rise-buildings-image_1947772.jpg",
//     "footer":"https://png.pngtree.com/thumb_back/fh260/background/20230314/pngtree-beautiful-background-of-high-rise-buildings-image_1947772.jpg"
//   },
//   {
//     "name":"Buildings",
//     "img":"https://media.timeout.com/images/106001096/image.jpg",
//     "footer":"https://media.timeout.com/images/106001096/image.jpg"
//   },
//   {
//     "name":"Street",
//     "img":"https://img.freepik.com/free-photo/modern-skyscrapers-illuminate-night-city-vanishing-into-dark-generative-ai_188544-11259.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704326400&semt=ais",
//     "footer":"https://img.freepik.com/free-photo/modern-skyscrapers-illuminate-night-city-vanishing-into-dark-generative-ai_188544-11259.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704326400&semt=ais"
//   },
//   {
//     "name":"Street",
//     "img":"https://www.meu.edu.in/wp-content/uploads/2014/10/city-road-street-italy-1.jpg",
//     "footer":"https://www.meu.edu.in/wp-content/uploads/2014/10/city-road-street-italy-1.jpg"
//   },
//   {
//     "name":"Street",
//     "img":"https://media.timeout.com/images/105921973/750/562/image.jpg",
//     "footer":"https://media.timeout.com/images/105921973/750/562/image.jpg"
//   },
//   {
//     "name":"Street",
//     "img":"https://images.pexels.com/photos/139303/pexels-photo-139303.jpeg?cs=srgb&dl=pexels-josh-sorenson-139303.jpg&fm=jpg",
//     "footer":"https://images.pexels.com/photos/139303/pexels-photo-139303.jpeg?cs=srgb&dl=pexels-josh-sorenson-139303.jpg&fm=jpg"
//   },
//   {
//     "name":"Cars",
//     "img":"https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
//     "footer":"https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
//   },
//   {
//     "name":"Cars",
//     "img":"https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?cs=srgb&dl=pexels-mike-bird-120049.jpg&fm=jpg",
//     "footer":"https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?cs=srgb&dl=pexels-mike-bird-120049.jpg&fm=jpg"
//   },
//   {
//     "name":"Cars",
//     "img":"https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/09/23074716/sports-vs-supercars-cover-230920221250-420x230.jpg",
//     "footer":"https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/09/23074716/sports-vs-supercars-cover-230920221250-420x230.jpg"
//   },
//   {
//     "name":"Cars",
//     "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4M9KI_4aRw3oCydWnNUuQKfvC_yfStPzhoA&usqp=CAU",
//     "footer":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4M9KI_4aRw3oCydWnNUuQKfvC_yfStPzhoA&usqp=CAU"
//   },

// ]

constructor(private api:ApicallService){}

mountain:any;
error?:any

ngOnInit(): void {
  // this.mountain = this.api.getdata().subscribe((data:any)=>{
  //   console.log(data);
  //   this.mountain = data;
  // },error =>{
  //   this.error = error;
  //   console.error(`Error ${error}`);
  // });
  // console.log(this.mountain);

  this.mountain = this.api.getdata()

  // this.mountain = this.api.getdata().subscribe((data:any)=>{
  //   console.log(data);
  //   this.mountain = data;
  // })
}


}
