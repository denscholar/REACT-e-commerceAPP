const SHOP_DATA = [
    {
        id: 1,
        title: 'Fashion',
        routeName: 'fashion',
        items: [
          {
            id: 18,
            name: 'Black Jean Shearling',
            imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
            price: '10,000'
          },
          {
            id: 19,
            name: 'Blue Jean Jacket',
            imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
            price: '10,000'
          },
          {
            id: 20,
            name: 'Grey Jean Jacket',
            imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
            price: '10,000'
          },
          {
            id: 21,
            name: 'Brown Shearling',
            imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
            price: '10,000'
          },
          {
            id: 22,
            name: 'Tan Trench',
            imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
            price: '10,000'
          }
        ]
      },
      {
        id: 2,
        title: 'Kids',
        routeName: 'kids',
        items: [
          {
            id: 10,
            name: 'Quality kids wear',
            imageUrl: 'https://static-uc.olist.ng/upload/20200724/12eoxgphcpa9.jpg',
            price: '10,000'
          },
          {
            id: 11,
            name: '3 pieces Agbada for kids',
            imageUrl: 'https://d17a17kld06uk8.cloudfront.net/products/DYTIADM/45LN1UCV-original.jpg',
            price: '20,000'
          },
          {
            id: 12,
            name: 'Winter Kids Clothes',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VdLiCDBoCfyVhX2XdCPMjZe0t7-1ftPLmg&usqp=CAU',
            price: '15,000'
          },
          {
            id: 13,
            name: 'Jumpsuit for kids',
            imageUrl: 'https://img2.tradewheel.com/uploads/images/products/1/0/children-wears-kids-boy-jumpsuit-boutique-clothing1-0177238001559236584.png.webp',
            price: '10,000'
          },
          {
            id: 14,
            name: 'Kids Clothing Set',
            imageUrl: 'https://5.imimg.com/data5/MH/VA/IE/IOS-5391221/product-jpeg-500x500.png',
            price: '15,000'
          },
          {
            id: 15,
            name: 'Nike Brown High Tops',
            imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
            price: 160
          },
          {
            id: 16,
            name: 'New Baby Girls Pajamas ',
            imageUrl: 'https://ae01.alicdn.com/kf/HTB1sQnda6nuK1RkSmFPq6AuzFXaf/2019-New-Baby-Girls-Pajamas-Sets-Kids-Bunny-Easter-Pyjamas-Kids-Children-Nightwear-Baby-Clothes-Girls.jpg',
            price: '5,500'
          },
          {
            id: 17,
            name: 'Girls Shoes',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/078257/1.jpg?7306',
            price: '10,000'
          }
        ]
      },
      {
        id: 3,
        title: 'Electronic',
        routeName: 'electronic',
        items: [
          {
            id: 18,
            name: 'Black Jean Shearling',
            imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
            price: 125
          },
          {
            id: 19,
            name: 'Blue Jean Jacket',
            imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
            price: 90
          },
          {
            id: 20,
            name: 'Grey Jean Jacket',
            imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
            price: 90
          },
          {
            id: 21,
            name: 'Brown Shearling',
            imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
            price: 165
          },
          {
            id: 22,
            name: 'Tan Trench',
            imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
            price: 185
          }
        ]
      },
      {
        id: 4,
        title: 'Health and Wellness',
        routeName: 'healthandwellness',
        items: [
          {
            id: 23,
            name: 'Blue Tanktop',
            imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
            price: 25
          },
          {
            id: 24,
            name: 'Floral Blouse',
            imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
            price: 20
          },
          {
            id: 25,
            name: 'Floral Dress',
            imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
            price: 80
          },
          {
            id: 26,
            name: 'Red Dots Dress',
            imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
            price: 80
          },
          {
            id: 27,
            name: 'Striped Sweater',
            imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
            price: 45
          },
          {
            id: 28,
            name: 'Yellow Track Suit',
            imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
            price: 135
          },
          {
            id: 29,
            name: 'White Blouse',
            imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
            price: 20
          }
        ]
      },
      {
        id: 5,
        title: 'Food and Groceries',
        routeName: 'foodandgroceries',
        items: [
          {
            id: 30,
            name: 'Camo Down Vest',
            imageUrl: 'https://www.rentokil.com/dam/jcr:5e9bb654-4181-44ab-8516-32e32f99282a/image-stock-food-processing-blog-apples-instore-glo.webp',
            price: 325
          },
          {
            id: 31,
            name: 'Floral T-shirt',
            imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
            price: 20
          },
          {
            id: 32,
            name: 'Black & White Longsleeve',
            imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
            price: 25
          },
          {
            id: 33,
            name: 'Pink T-shirt',
            imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
            price: 25
          },
          {
            id: 34,
            name: 'Jean Long Sleeve',
            imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
            price: 40
          },
          {
            id: 35,
            name: 'Burgundy T-shirt',
            imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
            price: 25
          }
        ]
      },
      {
        id: 5,
        title: 'Phones',
        routeName: 'phones',
        items: [
          {
            id: 30,
            name: 'Oppo Find X3 Pro',
            imageUrl: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/03/X1008793-1024x683.jpeg',
            price: '250,000'
          },
          {
            id: 31,
            name: 'OnePlus 9 Pro',
            imageUrl: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/03/OnePlus9Pro6-1024x683.jpeg',
            price: '120,000'
          },
          {
            id: 32,
            name: 'Xiaomi Redmi Note 10 Pro',
            imageUrl: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/03/Redmi-Note-10-Pro-Front-angle-1024x683.jpeg',
            price: '350000'
          },
          {
            id: 33,
            name: 'Samsung Galaxy S21',
            imageUrl: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/01/DSC01626-1024x683.jpeg',
            price: '120,000'
          },
          {
            id: 34,
            name: 'Asus ROG Phone 5',
            imageUrl: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/03/ROG-Phone-5-11-of-17-1024x575.jpg',
            price: '250,000'
          },
          {
            id: 35,
            name: 'OnePlus 9',
            imageUrl: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/03/OnePlus-9-lead-1024x768.jpg',
            price: '150,000'
          }
        ]
      }
]
 
export default SHOP_DATA;