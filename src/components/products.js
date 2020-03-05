const accessories = [
  [
    'Belt',
    '100% Real Leather',
    [
      'imgs/accessory1.jpg',
      'imgs/accessory1b.jpg',
      'imgs/accessory1c.jpg'
    ],
    '$19.99',
    3.5,
    1,
    ['Brown', 'Black', 'Beige']
  ],
  [
    'Bucket Hat',
    'Made in England',
    [
      'imgs/accessory2.jpg',
      'imgs/accessory2b.jpg',
      'imgs/accessory2c.jpg',
      'imgs/accessory2d.jpg',
      'imgs/accessory2e.jpg'
    ],
    '$19.99',
    4.5,
    2,
    ['Red', 'Denim Blue', 'Maroon', 'Pink', 'Blue']
  ],
  [
    'Baseball Cap',
    'Made in Japan',
    ['imgs/accessory3.jpg', 'imgs/accessory3b.jpg'],
    '$9.99',
    3,
    3,
    ['Black', 'Red']
  ],
  [
    'Backpack',
    'Made in China',
    ['imgs/accessory4.jpg'],
    '$41.99',
    3,
    4,
    ['Blue']
  ],
  [
    'Purse',
    'Made in England',
    ['imgs/accessory5.jpg', 'imgs/accessory5b.jpg'],
    '$23.99',
    5,
    5,
    ['Denim Blue', 'Pink']
  ],
  [
    'Plain Tie',
    'Made in Norway',
    [
      'imgs/accessory6.jpg',
      'imgs/accessory6b.jpg',
      'imgs/accessory6c.jpg',
      'imgs/accessory6d.jpg'
    ],
    '$39.99',
    4,
    6,
    ['Maroon', 'Black', 'Lilac', 'Navy Blue']
  ],
  [
    'Bowtie',
    'Made in Ukraine',
    [
      'imgs/accessory7.jpg',
      'imgs/accessory7a.jpg',
      'imgs/accessory7b.jpg',
      'imgs/accessory7c.jpg'
    ],
    '$19.99',
    2.5,
    7,
    ['Black', 'Blue', 'Gold', 'Plaid']
  ],
  [
    'Gold Ring',
    '100% Real Gold',
    ['imgs/accessory8.jpg'],
    '$399.99',
    4.5,
    8,
    ['Gold']
  ],
  [
    'Silver Necklace',
    '100% Real Silver',
    ['imgs/accessory9.jpg'],
    '$999.99',
    5,
    9,
    ['Silver']
  ]
];

const hoodies = [
  [
    'Twice Sweater',
    '100% Real Cotton',
    [
      'imgs/hoodie1.jpg',
      'imgs/product3.jpg',
      'imgs/product4.jpg',
      'imgs/product5.jpg'
    ],
    '$29.99',
    5,
    10,
    ['Maroon', 'Pink', 'White', 'Grey']
  ],
  [
    'Nike Sweater',
    'Made in England',
    ['imgs/hoodie2.jpg', 'imgs/hoodie2a.jpg', 'imgs/hoodie2b.jpg'],
    '$49.99',
    4.5,
    11,
    ['Black', 'Grey', 'Orange']
  ],
  [
    'Adidas Sweater ',
    'Made in Japan',
    ['imgs/hoodie3.jpg', 'imgs/hoodie3a.jpg'],
    '$29.99',
    2.5,
    12,
    ['Black', 'Striped']
  ],
  [
    'Umbro Sweater',
    'Made in Australia',
    ['imgs/hoodie4.jpg', 'imgs/hoodie4a.jpg'],
    '$42.99',
    4,
    13,
    ['Grey', 'Teal']
  ],
  [
    'Plain Sweater',
    'Made in Norway',
    [
      'imgs/hoodie5.jpg',
      'imgs/hoodie5a.jpg',
      'imgs/hoodie5b.jpg',
      'imgs/hoodie5c.jpg'
    ],
    '$33.99',
    5,
    14,
    ['Black', 'Sky Blue', 'Grey', 'Blue']
  ],
  [
    'Champion Sweater',
    '100% Real Cotton',
    ['imgs/hoodie6.jpg', 'imgs/hoodie6a.jpg', 'imgs/hoodie6b.jpg'],
    '$29.99',
    4,
    15,
    ['Blue', 'Grey', 'Maroon']
  ],
  [
    'Vans Sweater',
    'Made in Ukraine',
    ['imgs/hoodie7.jpg', 'imgs/hoodie7a.jpg'],
    '$49.99',
    3.5,
    16,
    ['Black', 'Lilac']
  ],
  [
    'Tommy Hilfiger',
    '100% Real Cotton',
    [
      'imgs/hoodie8.jpg',
      'imgs/hoodie8a.jpg',
      'imgs/hoodie8b.jpg',
      'imgs/hoodie8c.jpg',
      'imgs/hoodie8d.jpg'
    ],
    '$79.99',
    4,
    17,
    ['Blue', 'White', 'Grey', 'Black', 'Red']
  ],
  [
    'Supreme Hoodie',
    'Made in California',
    ['imgs/hoodie9.jpg', 'imgs/hoodie9a.jpg'],
    '$44.99',
    3,
    18,
    ['Red', 'Grey']
  ]
];

const jeans = [
  [
    'Brooklyn Jeans',
    '100% Real Denim',
    ['imgs/jeans1.jpg', 'imgs/jeans1a.jpg', 'imgs/jeans1b.jpg'],
    '$39.99',
    3,
    19,
    ['Blue', 'Grey', 'Black']
  ],
  [
    'Zoo York Jeans',
    'Made in England',
    ['imgs/jeans2.jpg', 'imgs/jeans2a.jpg'],
    '$39.99',
    3.5,
    20,
    ['Blue', 'Black']
  ],
  [
    'Abercrombie Jeans ',
    'Made in Japan',
    ['imgs/jeans3.jpg'],
    '$29.99',
    5,
    21,
    ['Blue']
  ],
  [
    'True Religion Jeans',
    'Made in Australia',
    ['imgs/jeans4.jpg', 'imgs/jeans4a.jpg', 'imgs/jeans4b.jpg'],
    '$22.99',
    4,
    22,
    ['Blue', 'Green', 'Black']
  ],
  [
    'Tommy Hilfiger Jeans',
    'Made in Norway',
    ['imgs/jeans5.jpg', 'imgs/jeans5a.jpg'],
    '$23.99',
    4,
    23,
    ['Blue', 'Dark']
  ],
  [
    'Ralph Lauren Jeans',
    '100% Real Denim',
    ['imgs/jeans6.jpg', 'imgs/jeans6a.jpg'],
    '$49.99',
    3,
    24,
    ['Dark', 'Blue']
  ],
  [
    'Wrangler Jeans',
    '100% Real Denim',
    ['imgs/jeans7.jpg'],
    '$39.99',
    4.5,
    25,
    ['Blue']
  ],
  [
    'Diesel Jeans',
    'Made in Ukraine',
    ['imgs/jeans8.jpg', 'imgs/jeans8a.jpg', 'imgs/jeans8b.jpg'],
    '$49.99',
    5,
    26,
    ['Blue', 'Black', 'Gold']
  ],
  [
    'Calvin Klein Jeans',
    'Made in California',
    ['imgs/jeans9.jpg', 'imgs/jeans9a.jpg'],
    '$24.99',
    4,
    27,
    ['Black', 'Blue']
  ]
];

const shirts = [
  [
    'Calvin Klein T-Shirt',
    '100% Real Cotton',
    ['imgs/shirt1.jpg', 'imgs/shirt1a.jpg', 'imgs/shirt1b.jpg'],
    '$49.99',
    4.5,
    28,
    ['White', 'Black', 'Grey']
  ],
  [
    'Tommy Hilfiger T-Shirt',
    'Made in England',
    [
      'imgs/shirt2.jpg',
      'imgs/shirt2a.jpg',
      'imgs/shirt2b.jpg',
      'imgs/shirt2c.jpg'
    ],
    '$29.99',
    2.5,
    29,
    ['White', 'Navy', 'Black', 'Red']
  ],
  [
    'Lacoste Polo T-Shirt ',
    'Made in China',
    [
      'imgs/shirt3.jpg',
      'imgs/shirt3a.jpg',
      'imgs/shirt3b.jpg',
      'imgs/shirt3c.jpg'
    ],
    '$19.99',
    5,
    30,
    ['Red', 'Navy', 'White', 'Pink']
  ],
  [
    'Lacoste T-Shirt',
    'Made in New Zealand',
    ['imgs/shirt4.jpg', 'imgs/shirt4a.jpg'],
    '$22.99',
    5,
    31,
    ['White', 'Black']
  ],
  [
    'Guess T-Shirt',
    'Made in Denmark',
    ['imgs/shirt5.jpg', 'imgs/shirt5a.jpg', 'imgs/shirt5b.jpg'],
    '$33.99',
    4.5,
    32,
    ['Blue', 'Red', 'White']
  ],
  [
    'Ralph Lauren Polo T-Shirt',
    '100% Real Cotton',
    ['imgs/shirt6.jpg'],
    '$39.99',
    3.5,
    33,
    ['Classic']
  ],
  [
    'Ralph Lauren T-Shirt',
    'Made in India',
    ['imgs/shirt7.jpg', 'imgs/shirt7a.jpg', 'imgs/shirt7b.jpg'],
    '$19.99',
    3.5,
    34,
    ['Grey', 'Pink', 'White']
  ],
  [
    'Diesel T-Shirt',
    'Made in Ukraine',
    ['imgs/shirt8.jpg', 'imgs/shirt8a.jpg'],
    '$24.99',
    3,
    35,
    ['Maroon', 'White']
  ],
  [
    'Under Armour T-Shirt',
    'Made in Korea',
    [
      'imgs/shirt9.jpg',
      'imgs/shirt9a.jpg',
      'imgs/shirt9b.jpg',
      'imgs/shirt9c.jpg'
    ],
    '$24.99',
    2.5,
    36,
    ['Black', 'Grey', 'Red', 'Blue']
  ]
];

const shoes = [
  [
    'Under Armour Shoes',
    'Made in Japan',
    ['imgs/shoe1.jpg', 'imgs/shoe1a.jpg', 'imgs/shoe1b.jpg'],
    '$49.99',
    4,
    37,
    ['Black', 'Grey', 'White']
  ],
  [
    'Under Armour Cleats',
    'Made in England',
    [
      'imgs/shoe2.jpg',
      'imgs/shoe2a.jpg',
      'imgs/shoe2b.jpg',
      'imgs/shoe2c.jpg'
    ],
    '$69.99',
    3.5,
    38,
    ['White', 'Black', 'Red', 'Silver']
  ],
  [
    'Nike Shoes ',
    'Made in China',
    ['imgs/shoe3.jpg', 'imgs/shoe3a.jpg'],
    '$59.99',
    3.5,
    39,
    ['Black', 'White']
  ],
  [
    'Nike Cleats',
    'Made in New Zealand',
    ['imgs/shoe4.jpg', 'imgs/shoe4a.jpg', 'imgs/shoe4b.jpg'],
    '$72.99',
    4,
    40,
    ['Black', 'White', 'Red']
  ],
  [
    'Adidas Shoes',
    'Made in Denmark',
    ['imgs/shoe5.jpg', 'imgs/shoe5a.jpg'],
    '$80.99',
    4.5,
    41,
    ['White', 'Black']
  ],
  [
    'Adidas Cleats',
    'Made in Canada',
    ['imgs/shoe6.jpg', 'imgs/shoe6a.jpg', 'imgs/shoe6b.jpg'],
    '$99.99',
    5,
    42,
    ['White', 'Red', 'Black']
  ],
  [
    'Reebok Shoes',
    'Made in India',
    ['imgs/shoe7.jpg'],
    '$99.99',
    5,
    43,
    ['White']
  ],
  [
    'Reebok Cleats',
    'Made in Ukraine',
    ['imgs/shoe8.jpg', 'imgs/shoe8a.jpg'],
    '$64.99',
    3,
    44,
    ['Red', 'Orange']
  ],
  [
    'Umbro Cleats',
    'Made in Korea',
    ['imgs/shoe9.jpg', 'imgs/shoe9a.jpg', 'imgs/shoe9b.jpg'],
    '$54.99',
    3.5,
    45,
    ['Black', 'Green', 'White']
  ]
];

const products = {
  Accessories: accessories,
  Hoodies: hoodies,
  Jeans: jeans,
  Shirts: shirts,
  Shoes: shoes
};

export default products;
