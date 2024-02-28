import { Component } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [
      {
          "id": 1,
          "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          "price": 109.95,
          "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "rating": {
              "rate": 3.9,
              "count": 120
          }
      },
      {
          "id": 2,
          "title": "Mens Casual Premium Slim Fit T-Shirts ",
          "price": 22.3,
          "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          "rating": {
              "rate": 4.1,
              "count": 259
          }
      },
      {
          "id": 3,
          "title": "Mens Cotton Jacket",
          "price": 55.99,
          "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          "rating": {
              "rate": 4.7,
              "count": 500
          }
      },
      {
          "id": 4,
          "title": "Mens Casual Slim Fit",
          "price": 15.99,
          "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          "rating": {
              "rate": 2.1,
              "count": 430
          }
      },
      {
          "id": 5,
          "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          "price": 695,
          "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
          "category": "jewelery",
          "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
          "rating": {
              "rate": 4.6,
              "count": 400
          }
      },
      {
          "id": 6,
          "title": "Solid Gold Petite Micropave ",
          "price": 168,
          "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
          "category": "jewelery",
          "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
          "rating": {
              "rate": 3.9,
              "count": 70
          }
      },
      {
          "id": 7,
          "title": "White Gold Plated Princess",
          "price": 9.99,
          "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
          "category": "jewelery",
          "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
          "rating": {
              "rate": 3,
              "count": 400
          }
      },
      {
          "id": 8,
          "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
          "price": 10.99,
          "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
          "category": "jewelery",
          "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
          "rating": {
              "rate": 1.9,
              "count": 100
          }
      },
      {
          "id": 9,
          "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
          "price": 64,
          "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
          "category": "electronics",
          "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
          "rating": {
              "rate": 3.3,
              "count": 203
          }
      },
      {
          "id": 10,
          "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
          "price": 109,
          "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
          "category": "electronics",
          "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
          "rating": {
              "rate": 2.9,
              "count": 470
          }
      },
      {
          "id": 11,
          "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
          "price": 109,
          "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
          "category": "electronics",
          "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
          "rating": {
              "rate": 4.8,
              "count": 319
          }
      },
      {
          "id": 12,
          "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
          "price": 114,
          "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
          "category": "electronics",
          "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
          "rating": {
              "rate": 4.8,
              "count": 400
          }
      },
      {
          "id": 13,
          "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
          "price": 599,
          "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
          "category": "electronics",
          "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
          "rating": {
              "rate": 2.9,
              "count": 250
          }
      },
      {
          "id": 14,
          "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
          "price": 999.99,
          "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
          "category": "electronics",
          "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
          "rating": {
              "rate": 2.2,
              "count": 140
          }
      },
      {
          "id": 15,
          "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
          "price": 56.99,
          "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
          "rating": {
              "rate": 2.6,
              "count": 235
          }
      },
      {
          "id": 16,
          "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
          "price": 29.95,
          "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
          "rating": {
              "rate": 2.9,
              "count": 340
          }
      },
      {
          "id": 17,
          "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
          "price": 39.99,
          "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
          "rating": {
              "rate": 3.8,
              "count": 679
          }
      },
      {
          "id": 18,
          "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
          "price": 9.85,
          "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
          "rating": {
              "rate": 4.7,
              "count": 130
          }
      },
      {
          "id": 19,
          "title": "Opna Women's Short Sleeve Moisture",
          "price": 7.95,
          "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
          "rating": {
              "rate": 4.5,
              "count": 146
          }
      },
      {
          "id": 20,
          "title": "DANVOUY Womens T Shirt Casual Cotton Short",
          "price": 12.99,
          "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
          "rating": {
              "rate": 3.6,
              "count": 145
          }
      }
  ];

  productsLinks: any[] = [
  "",
  "https://www.amazon.com/Fjallraven-Foldsack-No-Daypack-Black/dp/B00BHZU8X6/ref=sr_1_1?crid=3Q1ZE7CBPZY3Z&keywords=Fjallraven%2B-%2BFoldsack%2BNo.%2B1%2BBackpack%2C%2BFits%2B15%2BLaptops&qid=1708193283&sprefix=fjallraven%2B-%2Bfoldsack%2Bno.%2B1%2Bbackpack%2C%2Bfits%2B15%2Blaptops%2Caps%2C242&sr=8-1&th=1",
  "https://www.amazon.com/H2H-Casual-T-Shirts-Henley-Baseball/dp/B09HC324ML",
  "https://www.amazon.com/Military-Jacket-Washing-Cotton-Leisure/dp/B0CFQPBJCN",
  "https://www.amazon.com/H2H-Casual-T-Shirts-DARKBLUE-KMTTL0374/dp/B017XIFW54?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1FWALUW7JMUM2",
  "https://www.amazon.com/John-Hardy-Legends-Station-Bracelet/dp/B085P23LYT?th=1",
  "https://www.amazon.com/HAFEEZ-CENTER-Eternity-Moissanite-White-Gold/dp/B0736YHHRD/ref=sr_1_3?crid=1A37MYZSYRMX8&keywords=Solid%2BGold%2BPetite%2BMicropave&qid=1708193777&sprefix=solid%2Bgold%2Bpetite%2Bmicropave%2Caps%2C240&sr=8-3&th=1",
  "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo3NDQyMDY5MTAyNDY1MDQ3OjE3MDgxOTM4NjY6c3BfYXRmOjIwMDAyMDM4MDM3MjkxMTo6MDo6&url=%2FPairs-Plated-Princess-Zirconia-Earring%2Fdp%2FB07YTHY8YB%2Fref%3Dsr_1_4%3Fcrid%3DIYP07EZVBVZW%26keywords%3DWhite%2BGold%2BPlated%2BPrincess%26qid%3D1708193866%26sprefix%3Dwhite%2Bgold%2Bplated%2Bprincess%252Caps%252C241%26sr%3D8-4-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
  "https://www.amazon.com/Pierced-Owl-Plated-Stainless-Earrings/dp/B07NPX3QYN/ref=sr_1_2?crid=3QBDKVY52GIWG&keywords=Pierced%2BOwl%2BRose%2BGold%2BPlated%2BStainless%2BSteel%2BDouble&qid=1708193931&sprefix=pierced%2Bowl%2Brose%2Bgold%2Bplated%2Bstainless%2Bsteel%2Bdouble%2Caps%2C258&sr=8-2&th=1",
  "https://www.amazon.com/Western-Digital-Elements-Portable-External/dp/B06W55K9N6/ref=sr_1_1?crid=4MFMELNXWYQG&keywords=WD+2TB+Elements+Portable+External+Hard+Drive+-+USB+3.0&qid=1708193960&sprefix=wd+2tb+elements+portable+external+hard+drive+-+usb+3.0%2Caps%2C252&sr=8-1",
  "https://www.amazon.com/SanDisk-SSD-PLUS-Internal-SDSSDA-1T00-G27/dp/B09NQJMW28/ref=sr_1_2?crid=329XMVGJK1TXA&keywords=SanDisk+SSD+PLUS+1TB+Internal+SSD+-+SATA+III+6+Gb%2Fs&qid=1708193993&sprefix=sandisk+ssd+plus+1tb+internal+ssd+-+sata+iii+6+gb%2Fs%2Caps%2C436&sr=8-2",
  "https://www.amazon.com/Silicon-Power-Performance-Internal-SP256GBSS3A55S25/dp/B075RJS55D/ref=sr_1_2?crid=357B9T8T3MEIT&keywords=Silicon+Power+256GB+SSD+3D+NAND+A55+SLC+Cache+Performance+Boost+SATA+III+2.5&qid=1708194036&sprefix=silicon+power+256gb+ssd+3d+nand+a55+slc+cache+performance+boost+sata+iii+2.5%2Caps%2C234&sr=8-2",
  "https://www.amazon.com/Gaming-Drive-Playstation-Portable-External/dp/B094W83QRM/ref=sr_1_1?crid=30FLS8SYQCI50&keywords=WD+4TB+Gaming+Drive+Works+with+Playstation+4+Portable+External+Hard+Drive&qid=1708194165&sprefix=wd+4tb+gaming+drive+works+with+playstation+4+portable+external+hard+drive+%2Caps%2C245&sr=8-1",
  "https://www.amazon.com/Acer-SB220Q-Ultra-Thin-Frame-Monitor/dp/B07CVL2D2S/ref=sr_1_1?crid=DG003AMS5M3V&keywords=Acer+SB220Q+bi+21.5+inches+Full+HD+%281920+x+1080%29+IPS+Ultra-Thin&qid=1708194206&sprefix=acer+sb220q+bi+21.5+inches+full+hd+1920+x+1080+ips+ultra-thin%2Caps%2C257&sr=8-1",
  "https://www.amazon.com/XG49VQ-Curved-Gaming-FreeSync-Monitor/dp/B07PZR2YY4/ref=sr_1_3?crid=1Z65V8C5I84Z1&keywords=Samsung+49-Inch+CHG90+144Hz+Curved+Gaming+Monitor+%28LC49HG90DMNXZA%29+%E2%80%93+Super+Ultrawide+Screen+QLED&qid=1708194236&sprefix=samsung+49-inch+chg90+144hz+curved+gaming+monitor+lc49hg90dmnxza+super+ultrawide+screen+qled+%2Caps%2C242&sr=8-3",
  "https://www.amazon.com/MAGCOMSEN-Winter-Detachable-Waterproof-Outdoor/dp/B07ZHXQGV3/ref=sr_1_8?crid=18RT70WAFZ0S1&keywords=BIYLACLESEN+Women%27s+3-in-1+Snowboard+Jacket+Winter+Coats&qid=1708194291&sprefix=biylaclesen+women%27s+3-in-1+snowboard+jacket+winter+coats%2Caps%2C235&sr=8-8",
  "https://www.amazon.com/WJC663-Womens-Removable-Hoodie-Motorcyle/dp/B00O5D5E5Y/ref=sr_1_1?crid=DKKKG6TSXDWE&keywords=Lock+and+Love+Women%27s+Removable+Hooded+Faux+Leather+Moto+Biker+Jacket&qid=1708194388&sprefix=lock+and+love+women%27s+removable+hooded+faux+leather+moto+biker+jacket%2Caps%2C428&sr=8-1",
  "https://www.amazon.com/Twinklady-Windbreaker-Raincoats-Waterproof-Lightweight/dp/B07RYK5N9H/ref=sr_1_2?crid=WIM8XKTG2KXI&keywords=%22Rain+Jacket+Women+Windbreaker+Striped+Climbing+Raincoats%22&qid=1708194417&sprefix=rain+jacket+women+windbreaker+striped+climbing+raincoats+%2Caps%2C422&sr=8-2",
  "https://www.amazon.com/Made-Johnny-WT1037-Sleeve-Shirring/dp/B019X2H0BC/ref=sr_1_2?crid=3GQXPA0A6V7FX&keywords=MBJ+Women%27s+Solid+Short+Sleeve+Boat+Neck+V&qid=1708194450&sprefix=mbj+women%27s+solid+short+sleeve+boat+neck+v+%2Caps%2C228&sr=8-2",
  "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo2NzMwNTcyMzAyOTkzMDQ3OjE3MDgxOTQ0ODY6c3BfYXRmOjIwMDExOTEwMTA2ODM5ODo6MDo6&url=%2FOpna-Moisture-Wicking-Athletic-XXXX-Large%2Fdp%2FB015TC8OS8%2Fref%3Dsr_1_1%3Fcrid%3D3V8YEVGALIMXX%26keywords%3DOpna%2BWomen%2527s%2BShort%2BSleeve%2BMoisture%26qid%3D1708194486%26sprefix%3Dopna%2Bwomen%2527s%2Bshort%2Bsleeve%2Bmoisture%252Caps%252C234%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
  "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo2NjMxMTE0NTYwNDE4MDQ3OjE3MDgxOTQ1MDk6c3BfYXRmOjIwMDAxODQ5NzQ3OTg2MTo6MDo6&url=%2FDANVOUY-Womens-Graphic-T-Shirt-XX-Large%2Fdp%2FB07FKT5J3C%2Fref%3Dsr_1_1%3Fcrid%3D4YD0UNB5SQ46%26keywords%3DDANVOUY%2BWomens%2BT%2BShirt%2BCasual%2BCotton%2BShort%26qid%3D1708194509%26sprefix%3Ddanvouy%2Bwomens%2Bt%2Bshirt%2Bcasual%2Bcotton%2Bshort%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
]
  redirectToWhatsApp(index: number) {
    var whatsappNumber = '+7713904481';
    var productLink = this.productsLinks[index];
    var whatsappMessage = encodeURIComponent('Здравствуйте! Я заинтересован в вашем товаре: ' + productLink);
    var whatsappURL = 'https://wa.me/' + whatsappNumber + '?text=' + whatsappMessage;
    
    window.open(whatsappURL);
  }

  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/