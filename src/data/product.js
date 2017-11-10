const Products = [
  {
    Id: '1',
    Name: 'Adidas Originals Superstar Shoes',
    Price: '699.00',
    Brand: 'adidas',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/adidas-8380-5900574-1.jpg'
  },
  {
    Id: '2',
    Name: 'Adair Strappy Sneakers',
    Price: '399.00',
    Brand: 'addicts anonymous',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/addicts-anonymous-8514-7761874-1.jpg'
  },
  {
    Id: '3',
    Name: 'Adidas Originals Superstar Shoes',
    Price: '659.00',
    Brand: 'adidas',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/adidas-8263-6700574-1.jpg'
  },
  {
    Id: '4',
    Name: 'Lace Up Heel Pumps',
    Price: '279.00',
    Brand: 'ZALORA',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/zalora-6199-8480074-1.jpg',
  },
  {
    Id: '5',
    Name: 'Laced-Up Sneakers',
    Price: '249.00',
    Brand: 'ZALORA',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/zalora-1732-7926774-1.jpg'
  },
  {
    Id: '6',
    Name: 'McAllister Oxford Shoes',
    Price: '889.00',
    Brand: 'Kings Collection',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/kings-collection-9482-6470754-1.jpg'
  },
  {
    Id: '7',
    Name: 'Petite Pink Lace Pencil Dress',
    Price: '666.00',
    Brand: 'Dorothy Perkins',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/dorothy-perkins-5744-2421774-1.jpg'
  },
  {
    Id: '8',
    Name: 'Collection Tailored Wrap Front Pants',
    Price: '249.00',
    Brand: 'ZALORA',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/zalora-2369-9607274-1.jpg'
  },
  {
    Id: '9',
    Name: 'Shawl Collar Cardigan',
    Price: '279.00',
    Brand: 'ZALORA',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/zalora-5787-7338574-1.jpg'
  },
  {
    Id: '10',
    Name: 'Strapless Cascading Peplum Maxi Dress',
    Price: '549.00',
    Brand: 'Preen & Proper',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/preen-proper-1789-5233774-1.jpg'
  },
  {
    Id: '11',
    Name: 'One Shoulder Cape Jumpsuit',
    Price: '689.00',
    Brand: 'Miss Selfridge',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/miss-selfridge-4519-6936674-1.jpg'
  },
  {
    Id: '12',
    Name: 'Print Logo Hoodie',
    Price: '370.00',
    Brand: 'Hollister',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/hollister-4168-3982874-1.jpg'
  },
  {
    Id: '13',
    Name: 'Denim Stitch Long Sleeve Shirt',
    Price: '179.00',
    Brand: 'ZALORA',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/zalora-2449-4320574-1.jpg'
  },
  {
    Id: '14',
    Name: 'Essential Fit And Flare Dress',
    Price: '179.00',
    Brand: 'ZALORA',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/zalora-6530-4817064-1.jpg'
  },
  {
    Id: '15',
    Name: 'Scallop Lace Spaghetti Strap Midi Dress',
    Price: '399.00',
    Brand: 'Les Premieres',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/les-premieres-2454-6815674-1.jpg'
  },
  {
    Id: '16',
    Name: 'Bridesmaid Off Shoulder Maxi Dress with Ruffle',
    Price: '499.00',
    Brand: 'ZALORA',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/zalora-9085-3545474-1.jpg'
  },
  {
    Id: '17',
    Name: 'Anita Long Boots',
    Price: '469.00',
    Brand: 'Public Desire',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/public-desire-3891-3436774-1.jpg'
  },
  {
    Id: '18',
    Name: 'Surplus Goods Flip Flops',
    Price: '229.00',
    Brand: 'Superdry',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/superdry-7864-3099774-1.jpg'
  },
  {
    Id: '19',
    Name: 'Classic Faux Leather Business Dress Shoes',
    Price: '379.00',
    Brand: 'ZALORA',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/zalora-6393-7243574-1.jpg'
  },
  {
    Id: '20',
    Name: 'Laced-Up Sneakers',
    Price: '249.00',
    Brand: 'ZALORA',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/zalora-1973-3926774-1.jpg'
  },
  {
    Id: '21',
    Name: 'Color Block Shift Dress',
    Price: '229.00',
    Brand: 'Shopsfashion',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/shopsfashion-7452-0008474-1.jpg'
  },
  {
    Id: '22',
    Name: 'Masculine Structured Coat',
    Price: '659.00',
    Brand: 'Mango',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/mango-2736-3930874-1.jpg'
  },
  {
    Id: '23',
    Name: 'Wide Leg Design Solid Pants',
    Price: '498.00',
    Brand: 'Jazzy Daisy',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/jazzy-daisy-7292-1450564-1.jpg'
  },
  {
    Id: '24',
    Name: 'Collection Tuck Detail Flared Dress',
    Price: '229.00',
    Brand: 'ZALORA',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/zalora-2173-1995774-1.jpg'
  },
  {
    Id: '25',
    Name: 'Long Sleeve Frill Detail Dress',
    Price: '709.00',
    Brand: 'CLOSET',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/closet-1060-4633574-1.jpg'
  },
  {
    Id: '26',
    Name: 'Haco Knitted Zipped Cardigan',
    Price: '509.00',
    Brand: '!Solid',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/solid-1309-2023574-1.jpg'
  },
  {
    Id: '27',
    Name: 'Navy Marl Skinny Suit Jacket',
    Price: '1229.00',
    Brand: 'Topman',
    MainImageUrl: 'https://static-catalog.staging.hk.zalora.net/p/topman-0389-4704574-1.jpg'
  }
];

module.exports = Products;
