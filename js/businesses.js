const businesses = [

    {
        id: 1,
        name: "Asia Town Restaurant",
        category: "Restaurant",
        location: "Port Harcourt",
        address: "38 Forces Ave, Old GRA, Port Harcourt, Rivers",
        phone: "08106622000",
        hours: "Open • Closes 10:30 PM",
        image: "Images/asia-town.jpg",
        verified: true,
        rating: 4.8, //⭐️ ADD THIS LINE
        lat: 4.78452, 
        lng: 7.00688
    },

    {
        id: 2,
        name: "Michael Garden Restaurant",
        category: "Restaurant",
        location: "Port Harcourt",
        address: "Port Harcourt - Aba Expressway, City Centre, Port Harcourt",
        phone: "08070911111",
        hours: "Open • Closes 1:00 AM",
        image: "Images/michael-garden.jpg",
        verified: true,
        rating: 4.7, //⭐️ ADD THIS LINE
        lat: 4.83615,
        lng: 7.01028
    },

    {
        id: 3,
        name: "Michael Terrace",
        category: "Restaurant",
        location: "Port Harcourt",
        address: "Garden City Mall, Aba Express Road, Rumuola",
        phone: "07025256576",
        hours: "Open • Closes 11:00 PM",
        image: "Images/michael-terrace.jpg",
        verified: true,
        rating: 4.9, //⭐️ ADD THIS LINE
        lat: 4.83604,
        lng: 7.02186
    },

    {
        id: 4,
        name: "Piano Club Restaurant",
        category: "Restaurant",
        location: "Port Harcourt",
        address: "139 Port Harcourt - Aba Expy, Umueme, Port Harcourt",
        phone: "08098838888",
        hours: "Open • Closes 12:00 AM",
        image: "Images/piano-club.jpg",
        verified: true,
        rating: 4.8, //⭐️ ADD THIS LINE
        lat: 4.81945,
        lng: 7.00929
    },

    {
        id: 5,
        name: "Maseraty by 65",
        category: "Restaurant",
        location: "Port Harcourt",
        address: "65 Evo Road, New GRA, Port Harcourt",
        phone: "09166644633",
        hours: "Open • Closes 3:00 AM",
        image: "Images/maseraty65.jpg",
        verified: true,
        rating: 4.4, //⭐️ ADD THIS LINE
        lat: 4.82065,
        lng: 6.99992
    },

    {
        id: 6,
        name: "The Promise Fast Food",
        category: "Restaurant",
        location: "Bonny Island",
        address: "Bonny Island, Rivers State",
        phone: "08129125100",
        hours: "Open • Closes 9:30 PM",
        image: "Images/promise-fastfood.jpg",
        verified: true,
        rating: 5.0, //⭐️ ADD THIS LINE
        lat: 4.43390,
        lng: 7.16982
    },

    {
        id: 7,
        name: "Alali Lounge & Restaurant",
        category: "Restaurant",
        location: "Bonny Island",
        address: "Bonny Island, Rivers State",
        phone: "09064580695",
        hours: "Open • Closes 11:00 PM",
        image: "Images/alali.jpg",
        verified: true,
        rating: 5.0, //⭐️ ADD THIS LINE
        lat: 4.43499,
        lng: 7.18087
    },

    {
        id: 8,
        name: "DBN Canteen",
        category: "Restaurant",
        location: "Bonny Island",
        address: "Bonny Island, Rivers State",
        phone: "07014782666",
        hours: "Open • Closes 9:00 PM",
        image: "Images/dbn-canteen.jpg",
        verified: true,
        rating: 4.0, //⭐️ ADD THIS LINE
        lat: 4.38685,
        lng: 7.17399
    },

    {
        id: 9,
        name: "AMGREEN COLLECTIONS",
        category: "Fashion",
        location: "Bonny Island",
        address: "Beside SDP Secretariat, Bonny Island",
        phone: "07068620602",
        hours: "Open 24 Hours",
        image: "Images/amgreen.jpg",
        verified: true,
        rating: 4.6, //⭐️ ADD THIS LINE
        lat: 4.42985,
        lng: 7.19556
    },

    {
        id: 10,
        name: "ALEXIS ACCESSORIES BOUTIQUE",
        category: "Fashion",
        location: "Bonny Island",
        address: "Wilbros Pipeline Road, Bonny",
        phone: "08035310490",
        hours: "Open • Closes 7:00 PM",
        image: "Images/alexis.jpg",
        verified: true,
        rating: 4.2, //⭐️ ADD THIS LINE
        lat: 4.42642,
        lng: 7.19235
    },

    {
        id: 11,
        name: "Ankara Boss & Accessories",
        category: "Fashion",
        location: "Bonny Island",
        address: "112 Mission Road, Bonny",
        phone: "08162020542",
        hours: "Open • Closes 8:30 PM",
        image: "Images/ankara-boss.jpg",
        verified: true,
        rating: 5.0, //⭐️ ADD THIS LINE
        lat: 4.44005,
        lng: 7.16650
    },

    {
        id: 12,
        name: "Ebuka Classic Boutique",
        category: "Fashion",
        location: "Bonny Island",
        address: "Mission Road, King Williams Road, Bonny",
        phone: "08066195759",
        hours: "Open • Closes 11:00 PM",
        image: "Images/ebuka-classic.jpg",
        verified: true,
        rating: 4.6, //⭐️ ADD THIS LINE
        lat: 4.45026,
        lng: 7.17124
    },

    {
        id: 13,
        name: "GRACEDECCA BOUTIQUE",
        category: "Fashion",
        location: "Bonny Island",
        address: "Along Akiama Road, Ghana Woman Street, Bonny",
        phone: "08064673171",
        hours: "Open • Closes 8:30 PM",
        image: "Images/gracedecca.jpg",
        verified: true,
        rating: 4.2, //⭐️ ADD THIS LINE
        lat: 4.42911,
        lng: 7.18651
    },

    {
        id: 14,
        name: "OUCH Port Harcourt",
        category: "Fashion",
        location: "Port Harcourt",
        address: "Elechi Area, Port Harcourt",
        phone: "08170161403",
        hours: "Open • Closes 8:00 PM",
        image: "Images/ouch.jpg",
        verified: true,
        rating: 5.0, //⭐️ ADD THIS LINE
        lat: 4.82094,
        lng: 6.99745
    },

    {
        id: 15,
        name: "Dash Luxury Fashion Store",
        category: "Fashion",
        location: "Port Harcourt",
        address: "101A Brookstone Close, GRA Phase 3, Port Harcourt",
        phone: "08183356528",
        hours: "Open • Closes 6:00 PM",
        image: "Images/dash-luxury.jpg",
        verified: true,
        rating: 5.0, //⭐️ ADD THIS LINE
        lat: 4.82322,
        lng: 6.99371
    },

    {
        id: 16,
        name: "HAIRVEN",
        category: "Salon",
        location: "Port Harcourt",
        address: "37 Onne Road, GRA Phase 2, Port Harcourt",
        phone: "09087234293",
        hours: "Open • Closes 7:00 PM",
        image: "Images/hairven.jpeg",
        verified: true,
        rating: 5.0, //⭐️ ADD THIS LINE
        lat: 4.81527,
        lng: 6.99932
    },

    {
        id: 17,
        name: "Precious Salon and Spa",
        category: "Salon",
        location: "Port Harcourt",
        address: "4 Worlu Street, D-Line, Port Harcourt",
        phone: "07030764749",
        hours: "Open 24 Hours",
        image: "Images/precious-salon.jpg",
        verified: true,
        rating: 4.1, //⭐️ ADD THIS LINE
        lat: 4.81288,
        lng: 7.00612
    },

    {
        id: 18,
        name: "Gingerblu Beauty And Health Salon",
        category: "Salon",
        location: "Port Harcourt",
        address: "12 Tombia Street, GRA Phase 2, Port Harcourt",
        phone: "08033116556",
        hours: "Open",
        image: "Images/gingerblu.jpg",
        verified: true,
        rating: 4.3, //⭐️ ADD THIS LINE
        lat: 4.82119,
        lng: 7.00543
    },

    {
        id: 19,
        name: "Rida Signature Spa",
        category: "Salon",
        location: "Bonny Island",
        address: "Opposite Winners Chapel Headquarters, Bonny",
        phone: "08129651135",
        hours: "Open • Closes 7:00 PM",
        image: "Images/rida.jpg",
        verified: true,
        rating: 4.9, //⭐️ ADD THIS LINE
        lat: 4.42389,
        lng: 7.17916
    },

    {
        id: 20,
        name: "Steady Barber Shop",
        category: "Barber",
        location: "Bonny Island",
        address: "12 Wilbros Pipeline Road, Bonny",
        phone: "08146484098",
        hours: "Open • Closes 11:00 PM",
        image: "Images/steady-barber.jpg",
        verified: true,
        rating: 4.5, //⭐️ ADD THIS LINE
        lat: 4.42688,
        lng: 7.18489
    },

    {
        id: 21,
        name: "BLACK LION EMPIRE CUTZ",
        category: "Barber",
        location: "Port Harcourt",
        address: "4 Abacha Road, Elechi, Port Harcourt",
        phone: "09054585350",
        hours: "Open • Closes 12:00 AM",
        image: "Images/black-empire.jpg",
        verified: true,
        rating: 5.0, //⭐️ ADD THIS LINE
        lat: 4.81630,
        lng: 6.99614,

    }
];
