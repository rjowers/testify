function GildedRose (sellIn, quality, name) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}

GildedRose.prototype.tick = function () {

  if(this.name === 'normal' && this.quality > 0) {
    this.quality = this.quality - 1;
  }
  if(this.name === 'normal' && this.sellIn < 0 && this.quality > 0) {
    this.quality = this.quality - 1;
  }
  if(this.name === 'normal' && this.sellIn === 0 && this.quality > 0) {
    this.quality = this.quality - 1;
  }
  if(this.name === 'Aged Brie' && this.quality < 50) {
    this.quality = this.quality + 1;
  }
  if (this.name === 'Aged Brie' && this.sellIn < 0 && this.quality < 50)  {
      this.quality = this.quality + 1;
  }
  if (this.name === 'Aged Brie' && this.sellIn === 0 && this.quality < 50)  {
      this.quality = this.quality + 1;
  }




  







  if(this.name === 'Conjured Mana Cake' && this.quality > 0 && this.sellIn < 0) {
    this.quality = this.quality - 2;
  }
  if (this.name != 'Sulfuras, Hand of Ragnaros') {
    this.sellIn = this.sellIn - 1;
}
}




  // if(this.name === 'Aged Brie' && this.sellIn > 0) {
  //   this.quality = this.quality +1;
  // }
  //
  // if(this.name === 'Sulfuras, Hand of Ragnaros') {
  //   this.quality = this.quality - 1;
  // }
  //
  // if(this.name === 'Backstage passes to a TAFKAL80ETC concert') {
  //   this.quality = this.quality - 1;
  // }





//
//   function GildedRose (sellIn, quality, name) {
//   this.name = name;
//   this.sellIn = sellIn;
//   this.quality = quality;
// }
//
// GildedRose.prototype.tick = function () {
//   if (this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert') {
//     if (this.quality > 0) {
//       if (this.name != 'Sulfuras, Hand of Ragnaros') {
//         if(this.name == 'Conjured Mana Cake') {
//           this.quality = this.quality - 2;
//         } else {
//           this.quality = this.quality - 1;
//           }
//       }
//     }
//   } else {
//     if (this.quality < 50) {
//       this.quality = this.quality + 1;
//       if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
//         if (this.sellIn < 11) {
//           if (this.quality < 50) {
//             this.quality = this.quality + 1;
//           }
//         }
//         if (this.sellIn < 6) {
//           if (this.quality < 50) {
//             this.quality = this.quality + 1;
//           }
//         }
//       }
//     }
//   }
  // if (this.name != 'Sulfuras, Hand of Ragnaros') {
  //   this.sellIn = this.sellIn - 1;
//   }
// ////////Sell IN
//   if (this.sellIn < 0) {
//     if (this.name != 'Aged Brie') {
//       if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
//         if (this.quality > 0) {
//           if (this.name != 'Sulfuras, Hand of Ragnaros') {
//             if (this.name === 'Conjured Mana Cake'){
//                this.quality = this.quality - 2;
//              }else{
//                this.quality = this.quality - 1;
//              }
//           }
//         }
//       } else {
//         this.quality = this.quality - this.quality;
//       }
//     } else {
//       if (this.quality < 50) {
//         this.quality = this.quality + 1;
//       }
//     }
//   }
//   // if (this.name = 'Conjured Mana Cake'){
//   //   this.quality = this.quality -2;
//   // }
// }

export { GildedRose };

//step 1 of refactoring - pull out of nests
//step 2 - simplify
