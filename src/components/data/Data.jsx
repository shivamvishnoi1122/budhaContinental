export const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/rooms",
    text: "Rooms",
  },
  // {
  //   id: 5,
  //   path: "/page",
  //   text: "Page",
  //   subItems: [
  //     {
  //       id: 51,
  //       path: "/booking",
  //       text: "Booking",
  //     },
  //     {
  //       id: 52,
  //       path: "/team",
  //       text: "Our Team",
  //     },
  //     {
  //       id: 53,
  //       path: "/testimonial",
  //       text: "Testimonial",
  //     },
  //   ],
  // },
  {
    id: 6,
    path: "/contact",
    text: "Contact",
  },
];
export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
  },
  {
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
  },
  {
    icon: <i className="fab fa-youtube"></i>,
  },
];

export const carouselData = [
  {
    img: "../assets/img/carousel-1.jpg",
    title: "Discover A Luxurious Hotel",
    subtitle: "Luxurious living",
    btn1: "Our Room",
    btn2: "Book Room",
    link: "rooms",
  },
  {
    img: "../assets/img/carousel-2.jpg",
    title: "We Provide You A Peacefull Living",
    subtitle: "Peacefull living",
    btn1: "Our Room",
    btn2: "Book Room",
    link: "rooms",
  },
  {
    img: "../assets/img/carousel-3.jpg",
    title: "Perfect Ambiance for Events & Parties",
    subtitle: "Events & Party",
    btn1: "Our Room",
    btn2: "Book Events",
    link: "rooms",
  },
];
export const about = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Rooms",
    count: "12",
  },
  {
    icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Staffs",
    count: "12",
  },
  {
    icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
    text: "Clients",
    count: "73",
  },
];
export const aboutMore = [
  {
    icon: <i class="fa fa-utensils fa-2x text-primary mb-2"></i>,
    text: "Chef",
    // count: "6",
  },
  {
    icon: <i class="fa fa-swimmer fa-2x text-primary mb-2"></i>,
    text: "Swimming Pool",
    // count: "1",
  },
  {
    icon: <i class="fa fa-bread-slice fa-2x text-primary mb-2"></i>,
    text: "Private Kitchen",
    // count: "1",
  },
];

export const services = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary"></i>,
    name: "Rooms & Apartment",
    discription:
      "Choose from our comfortable rooms with modern amenities or spacious apartments with kitchens and living areas. Both options include free Wi-Fi, parking, and hotel amenities.",
  },
  {
    icon: <i class="fa fa-utensils fa-2x text-primary"></i>,
    name: "Food & Restaurant",
    discription:
      "Enjoy a variety of delicious cuisines at our on-site restaurant, offering fresh, locally-sourced dishes. Guests can also savor room service and daily breakfast options.",
  },
  // {
  //   icon: <i class="fa fa-spa fa-2x text-primary"></i>,
  //   name: "Spa & Fitness",
  //   discription: "Contrary to popular belief, ipsum is not simply random.",
  // },
  {
    icon: <i class="fa fa-glass-cheers fa-2x text-primary"></i>,
    name: "Event & Party",
    discription:
      "Host unforgettable events and parties with our versatile venues. We offer tailored packages, professional event planning, and catering services to ensure a memorable experience.",
  },
  {
    icon: <i class="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Swimming pool",
    discription:
      "Enjoy our pristine swimming pool, perfect for relaxation or poolside events. With serene waters, comfortable loungers, and attentive service, we ensure a refreshing and enjoyable experience for every guest.",
  },
  {
    icon: <i class="fa fa-plus fa-2x text-primary"></i>,
    name: "24*7 Medical Emergency",
    discription:
      "Access our 24*7 medical emergency services, ensuring prompt and reliable care whenever you need it. Our dedicated team is always on standby to provide immediate assistance and peace of mind",
  },

  {
    icon: <i class="fa fa-bread-slice fa-2x text-primary"></i>,
    name: "Private kitchen",
    discription:
      "Enjoy the option of a private kitchen, allowing you to cook your own meals in a fully equipped space. Perfect for those who prefer self-catering during their stay",
  },
];
export const team = [
  {
    image: "../assets/img/team-1.jpeg",
    name: "Mr Daleep singh",
    designation: "(Owner )",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Akhilesh kumar sinha",
    designation: "(Manager,L.L.B,M.B.A)",
  },
  // {
  //   image: "../assets/img/team-3.jpg",
  //   name: "Full Name",
  //   designation: "Designation",
  // },
  // {
  //   image: "../assets/img/team-3.jpg",
  //   name: "Full Name",
  //   designation: "Designation",
  // },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
        link: "/about",
      },
      {
        name: "Contact Us",
        link: "/contact",
      },
    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "Food & Restaurant",
      },
      // {
      //   name: "Spa & Fitness",
      // },
      // {
      //   name: "Sports & Gaming",
      // },
      {
        name: "Event & Party",
      },
      {
        name: "Rooms & Apartments",
      },
    ],
  },
];

export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "Gokul Dham kehripur Jungal road Behind SBI Badigarh",
    href: "https://www.google.com/maps?q=29.3719726,78.7538294&z=17&hl=en",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "8077227262",
    href: "tel:8077227262",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "buddhacontinentalamangarh@gmail.com",
    href: "mailto:buddhacontinentalamangarh@gmail.com",
  },
];

export const contact = [
  {
    icon: <i class="fa fa-phone-alt text-primary me-2"></i>,
    title: "Booking",
    email: "8077227262",
    href: "tel:8077227262",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Technical",
    email: "buddhacontinentalamangarh@gmail.com",
    href: "mailto:buddhacontinentalamangarh@gmail.com",
  },
  {
    icon: <i class="fa fa-phone-alt text-primary me-2"></i>,
    title: "General",
    email: "8077227262",
    href: "tel:8077227262",
  },
];
export const testimonial = [
  {
    description:
      "The food at Buddha Continental  was outstanding. Every meal, from the diverse breakfast buffet to the exquisite dinner, was flavorful and beautifully presented. The service was attentive, and the ambiance added to an overall delightful dining experience. Highly recommended!",
    name: "Vikki sharma",
    profession: "Software Engineer",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/team-1.jpg",
  },
  {
    description:
      "The rooms were spotless, comfortable, and well-appointed with modern amenities. The staff was exceptionally friendly and accommodating, always ready to assist with a smile. Together, they made my stay incredibly relaxing and enjoyable. Highly recommend!",
    name: "Jatin Chauhan",
    profession: "Quality analyst",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/team-2.jpg",
  },
  {
    description:
      "The rooms were immaculate and cozy, offering all the modern comforts you could need. The staff went above and beyond, always welcoming and eager to help. Their hospitality made my stay truly enjoyable. I’d highly recommend it!",
    name: "Vikas verma",
    profession: "Businness man",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-3.jpg",
  },
];

export const roomItems = [
  {
    img: "../assets/img/room-1.jpeg",
    price: "₹2500/night",
    name: "Semi Deluxe",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Our Junior Deluxe Room features a comfortable queen-sized bed and an additional king-sized bed, accommodating up to four guests. The room includes an attached bathroom with modern amenities, full air conditioning, and complimentary high-speed Wi-Fi. Enjoy the convenience of free parking. Perfect for a relaxing and hassle-free stay, whether you're traveling for business or leisure.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
    facility: [
      {
        icon: <i class="fa fa-bed text-primary me-2"></i>,
        quantity: 1,
        facility: "bed",
      },
      {
        icon: <i class="fa fa-user text-primary me-2"></i>,
        quantity: 2,
        facility: "Person",
      },
      {
        icon: <i class="fa fa-wifi text-primary me-2"></i>,
        facility: "Wifi",
      },
      {
        icon: <i class="fa fa-car text-primary me-2"></i>,
        facility: "Parking",
      },
    ],
  },

  {
    img: "../assets/img/room-2.jpeg",
    price: "₹3500/night",
    name: "Deluxe",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Our Deluxe Room is spacious and thoughtfully designed, featuring a king-sized bed and an additional bed, perfect for up to four guests. The room includes an attached bathroom with modern amenities, full air conditioning, complimentary high-speed Wi-Fi, and free parking. Ideal for couples or small groups seeking extra comfort and convenience.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
    facility: [
      {
        icon: <i class="fa fa-bed text-primary me-2"></i>,
        quantity: 1,
        facility: "bed",
      },
      {
        icon: <i class="fa fa-user text-primary me-2"></i>,
        quantity: 2,
        facility: "Person",
      },
      {
        icon: <i class="fa fa-wifi text-primary me-2"></i>,
        facility: "Wifi",
      },
      {
        icon: <i class="fa fa-car text-primary me-2"></i>,
        facility: "Parking",
      },
    ],
  },
  {
    img: "../assets/img/room-3.jpg",
    price: "₹5000/night",
    name: "Super Deluxe",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Our Super Deluxe Room is ideal for families or small groups, featuring two king-sized beds and an additional bed, comfortably accommodating up to five guests. The room offers extra space, an attached bathroom, full air conditioning, complimentary Wi-Fi, and free parking. It's perfect for a comfortable and convenient stay with all essential amenities",
    yellowbtn: "View Detail",
    darkbtn: "book now",
    facility: [
      {
        icon: <i class="fa fa-bed text-primary me-2"></i>,
        quantity: 2,
        facility: "bed",
      },
      {
        icon: <i class="fa fa-user text-primary me-2"></i>,
        quantity: 4,
        facility: "Person",
      },
      {
        icon: <i class="fa fa-wifi text-primary me-2"></i>,
        facility: "Wifi",
      },
      {
        icon: <i class="fa fa-car text-primary me-2"></i>,
        facility: "Parking",
      },
    ],
  },
];
