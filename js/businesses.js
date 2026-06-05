const businesses = [

{
    id: 1,
    name: "Asia Town Restaurant",
    category: "Restaurant",
    location: "Port Harcourt",
    address: "38 Forces Ave, Old GRA, Port Harcourt, Rivers",
    phone: "08106622000",
    hours: "Open • Closes 10:30 PM",
    image: "images/asia-town.jpg",
    verified: true,
    lat: 4.8156,
    lng: 7.0498
},

{
    id: 2,
    name: "Michael Garden Restaurant",
    category: "Restaurant",
    location: "Port Harcourt",
    address: "Port Harcourt - Aba Expressway, City Centre, Port Harcourt",
    phone: "08070911111",
    hours: "Open • Closes 1:00 AM",
    image: "images/michael-garden.jpg",
    verified: true,
    lat: 4.8400,
    lng: 7.0200
},

{
    id: 3,
    name: "Michael Terrace",
    category: "Restaurant",
    location: "Port Harcourt",
    address: "Garden City Mall, Aba Express Road, Rumuola",
    phone: "07025256576",
    hours: "Open • Closes 11:00 PM",
    image: "images/michael-terrace.jpg",
    verified: true,
    lat: 4.8500,
    lng: 7.0300
},

{
    id: 4,
    name: "Piano Club Restaurant",
    category: "Restaurant",
    location: "Port Harcourt",
    address: "139 Port Harcourt - Aba Expy, Umueme, Port Harcourt",
    phone: "08098838888",
    hours: "Open • Closes 12:00 AM",
    image: "images/piano-club.jpg",
    verified: true,
    lat: 4.8300,
    lng: 7.0500
},

{
    id: 5,
    name: "Maseraty by 65",
    category: "Restaurant",
    location: "Port Harcourt",
    address: "65 Evo Road, New GRA, Port Harcourt",
    phone: "09166644633",
    hours: "Open • Closes 3:00 AM",
    image: "images/maseraty65.jpg",
    verified: true,
    lat: 4.8200,
    lng: 7.0400
},

{
    id: 6,
    name: "The Promise Fast Food",
    category: "Restaurant",
    location: "Bonny Island",
    address: "Bonny Island, Rivers State",
    phone: "08129125100",
    hours: "Open • Closes 9:30 PM",
    image: "images/promise-fastfood.jpg",
    verified: true,
    lat: 4.4515,
    lng: 7.1680
},

{
    id: 7,
    name: "Alali Lounge & Restaurant",
    category: "Restaurant",
    location: "Bonny Island",
    address: "Bonny Island, Rivers State",
    phone: "09064580695",
    hours: "Open • Closes 11:00 PM",
    image: "images/alali.jpg",
    verified: true,
    lat: 4.4490,
    lng: 7.1700
},

{
    id: 8,
    name: "DBN Canteen",
    category: "Restaurant",
    location: "Bonny Island",
    address: "Bonny Island, Rivers State",
    phone: "07014782666",
    hours: "Open • Closes 9:00 PM",
    image: "images/dbn-canteen.jpg",
    verified: true,
    lat: 4.4480,
    lng: 7.1660
},

{
    id: 9,
    name: "AMGREEN COLLECTIONS",
    category: "Fashion",
    location: "Bonny Island",
    address: "Beside SDP Secretariat, Bonny Island",
    phone: "07068620602",
    hours: "Open 24 Hours",
    image: "images/amgreen.jpg",
    verified: true,
    lat: 4.4470,
    lng: 7.1690
},

{
    id: 10,
    name: "ALEXIS ACCESSORIES BOUTIQUE",
    category: "Fashion",
    location: "Bonny Island",
    address: "Wilbros Pipeline Road, Bonny",
    phone: "08035310490",
    hours: "Open • Closes 7:00 PM",
    image: "images/alexis.jpg",
    verified: true,
    lat: 4.4460,
    lng: 7.1710
},

{
    id: 11,
    name: "Ankara Boss & Accessories",
    category: "Fashion",
    location: "Bonny Island",
    address: "112 Mission Road, Bonny",
    phone: "08162020542",
    hours: "Open • Closes 8:30 PM",
    image: "images/ankara-boss.jpg",
    verified: true,
    lat: 4.4450,
    lng: 7.1650
},

{
    id: 12,
    name: "Ebuka Classic Boutique",
    category: "Fashion",
    location: "Bonny Island",
    address: "Mission Road, King Williams Road, Bonny",
    phone: "08066195759",
    hours: "Open • Closes 11:00 PM",
    image: "images/ebuka-classic.jpg",
    verified: true,
    lat: 4.4440,
    lng: 7.1630
},

{
    id: 13,
    name: "GRACEDECCA BOUTIQUE",
    category: "Fashion",
    location: "Bonny Island",
    address: "Along Akiama Road, Ghana Woman Street, Bonny",
    phone: "08064673171",
    hours: "Open • Closes 8:30 PM",
    image: "images/gracedecca.jpg",
    verified: true,
    lat: 4.4430,
    lng: 7.1620
},

{
    id: 14,
    name: "OUCH Port Harcourt",
    category: "Fashion",
    location: "Port Harcourt",
    address: "Elechi Area, Port Harcourt",
    phone: "Not Available",
    hours: "Open • Closes 8:00 PM",
    image: "images/ouch.jpg",
    verified: true,
    lat: 4.8120,
    lng: 7.0180
},

{
    id: 15,
    name: "Dash Luxury Fashion Store",
    category: "Fashion",
    location: "Port Harcourt",
    address: "101A Brookstone Close, GRA Phase 3, Port Harcourt",
    phone: "08183356528",
    hours: "Open • Closes 6:00 PM",
    image: "images/dash-luxury.jpg",
    verified: true,
    lat: 4.8220,
    lng: 7.0210
},

{
    id: 16,
    name: "HAIRVEN",
    category: "Salon",
    location: "Port Harcourt",
    address: "37 Onne Road, GRA Phase 2, Port Harcourt",
    phone: "09087234293",
    hours: "Open • Closes 7:00 PM",
    image: "images/hairven.jpeg",
    verified: true,
    lat: 4.8170,
    lng: 7.0430
},

{
    id: 17,
    name: "Precious Salon and Spa",
    category: "Salon",
    location: "Port Harcourt",
    address: "4 Worlu Street, D-Line, Port Harcourt",
    phone: "07030764749",
    hours: "Open 24 Hours",
    image: "images/precious-salon.jpg",
    verified: true,
    lat: 4.8100,
    lng: 7.0350
},

{
    id: 18,
    name: "Gingerblu Beauty And Health Salon",
    category: "Salon",
    location: "Port Harcourt",
    address: "12 Tombia Street, GRA Phase 2, Port Harcourt",
    phone: "08033116556",
    hours: "Open",
    image: "images/gingerblu.jpg",
    verified: true,
    lat: 4.8180,
    lng: 7.0400
},

{
    id: 19,
    name: "Rida Signature Spa",
    category: "Salon",
    location: "Bonny Island",
    address: "Opposite Winners Chapel Headquarters, Bonny",
    phone: "08129651135",
    hours: "Open • Closes 7:00 PM",
    image: "images/rida.jpg",
    verified: true,
    lat: 4.4420,
    lng: 7.1600
},

{
    id: 20,
    name: "Steady Barber Shop",
    category: "Barber",
    location: "Bonny Island",
    address: "12 Wilbros Pipeline Road, Bonny",
    phone: "08146484098",
    hours: "Open • Closes 11:00 PM",
    image: "images/steady-barber.jpg",
    verified: true,
    lat: 4.4410,
    lng: 7.1580
}

];
