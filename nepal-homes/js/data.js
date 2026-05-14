// NepalHomes — 45 realistic Nepal properties

const PROPERTIES = [
  {
    id:1, title:"Modern Villa in Baneshwor", price:32500000, pricePerAana:1800000,
    type:"house", status:"for_sale", beds:4, baths:3, area:18, areaUnit:"aana",
    city:"Kathmandu", district:"Kathmandu", location:"Baneshwor", address:"New Baneshwor, Kathmandu",
    lat:27.6915, lng:85.3467,
    image:"https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
    description:"Stunning modern villa in Baneshwor with open floor plan, Italian marble flooring, and rooftop garden. Walking distance to civil service hospital and Baneshwor Chowk.",
    features:["Parking","Garden","Solar Power","Water Tank","CCTV","Security Guard"],
    yearBuilt:2021, facing:"East", road:"16 ft", featured:true,
    agent:{name:"Sita Sharma", phone:"+977-9801234567", image:"https://randomuser.me/api/portraits/women/44.jpg"}
  },
  {
    id:2, title:"3BHK Apartment in Lazimpat", price:18000000,
    type:"apartment", status:"for_sale", beds:3, baths:2, area:1400, areaUnit:"sqft",
    city:"Kathmandu", district:"Kathmandu", location:"Lazimpat", address:"Lazimpat, Kathmandu-2",
    lat:27.7172, lng:85.3167,
    image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    description:"Well-maintained apartment in prestigious Lazimpat near embassies and international schools. Swiss-style kitchen, 24-hour water supply, and covered parking.",
    features:["Lift","Parking","Security","Water Supply","Gym","CCTV"],
    yearBuilt:2019, facing:"South", road:"24 ft", featured:true,
    agent:{name:"Ram Thapa", phone:"+977-9851234567", image:"https://randomuser.me/api/portraits/men/32.jpg"}
  },
  {
    id:3, title:"Prime Land in Pokhara Lakeside", price:12000000, pricePerAana:1500000,
    type:"land", status:"for_sale", area:8, areaUnit:"aana",
    city:"Pokhara", district:"Kaski", location:"Lakeside", address:"Baidam-6, Pokhara Lakeside",
    lat:28.2096, lng:83.9562,
    image:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
    description:"Rare corner plot in Pokhara Lakeside with Phewa Lake view. Surrounded by restaurants, hotels, and tourist activity. Ideal for boutique hotel or residential construction.",
    features:["Lake View","Corner Plot","All Roads","Electricity","Water","Near Market"],
    facing:"West", road:"20 ft", featured:true,
    agent:{name:"Binod KC", phone:"+977-9861234567", image:"https://randomuser.me/api/portraits/men/55.jpg"}
  },
  {
    id:4, title:"Traditional Newari Cottage in Bhaktapur", price:9500000, pricePerAana:1357143,
    type:"house", status:"for_sale", beds:3, baths:2, area:7, areaUnit:"aana",
    city:"Bhaktapur", district:"Bhaktapur", location:"Suryamadhi", address:"Suryamadhi Tol, Bhaktapur",
    lat:27.6710, lng:85.4298,
    image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80",
    description:"Authentic Newari-style home with carved wood windows near Bhaktapur Durbar Square UNESCO heritage site. Courtyard garden, traditional brick construction with modern plumbing.",
    features:["Traditional Architecture","Courtyard","Roof Terrace","Heritage Zone","Wood Carvings"],
    yearBuilt:2015, facing:"North", road:"12 ft", featured:false,
    agent:{name:"Anita Maharjan", phone:"+977-9841234567", image:"https://randomuser.me/api/portraits/women/28.jpg"}
  },
  {
    id:5, title:"Commercial Space in Thamel", price:45000000,
    type:"commercial", status:"for_sale", baths:2, area:3200, areaUnit:"sqft",
    city:"Kathmandu", district:"Kathmandu", location:"Thamel", address:"Thamel Marg, Kathmandu-29",
    lat:27.7151, lng:85.3122,
    image:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    description:"Prime 4-floor commercial property in the heart of Nepal's biggest tourist hub. Ground floor retail, upper floors ideal for restaurant or hotel. 18,000+ daily footfall.",
    features:["4 Floors","Basement","Tourist Area","High Footfall","Road Facing","Lift"],
    yearBuilt:2018, facing:"South", road:"32 ft", featured:true,
    agent:{name:"Suresh Karki", phone:"+977-9871234567", image:"https://randomuser.me/api/portraits/men/67.jpg"}
  },
  {
    id:6, title:"Furnished Flat for Rent in Patan", price:35000,
    type:"apartment", status:"for_rent", beds:2, baths:1, area:900, areaUnit:"sqft",
    city:"Lalitpur", district:"Lalitpur", location:"Patan Dhoka", address:"Patan Dhoka, Lalitpur-3",
    lat:27.6607, lng:85.3285,
    image:"https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=600&q=80",
    description:"Fully furnished 2-bedroom flat near Patan Dhoka gate. Includes washing machine, refrigerator, and AC. 10 minutes walk to Patan Hospital.",
    features:["Furnished","Hot Water","Air Conditioning","Washing Machine","Parking","Internet Ready"],
    yearBuilt:2020, facing:"East", road:"18 ft", featured:false,
    agent:{name:"Priya Joshi", phone:"+977-9811234567", image:"https://randomuser.me/api/portraits/women/63.jpg"}
  },
  {
    id:7, title:"Himalaya View Villa in Nagarkot", price:28000000, pricePerAana:2000000,
    type:"house", status:"for_sale", beds:5, baths:4, area:14, areaUnit:"aana",
    city:"Bhaktapur", district:"Bhaktapur", location:"Nagarkot", address:"Nagarkot Hill Station, Bhaktapur",
    lat:27.7167, lng:85.5167,
    image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    description:"Panoramic Himalayan view villa including Everest, Langtang, and Gaurishankar ranges. Premium construction with glass-facade living room facing north. 30km from Kathmandu.",
    features:["Himalaya View","Gated Community","Solar Power","Generator","Garden","Fireplace"],
    yearBuilt:2022, facing:"North", road:"14 ft", featured:true,
    agent:{name:"Deepak Shrestha", phone:"+977-9821234567", image:"https://randomuser.me/api/portraits/men/41.jpg"}
  },
  {
    id:8, title:"Studio Apartment in Baluwatar", price:12000,
    type:"apartment", status:"for_rent", beds:1, baths:1, area:550, areaUnit:"sqft",
    city:"Kathmandu", district:"Kathmandu", location:"Baluwatar", address:"Baluwatar, Kathmandu-4",
    lat:27.7200, lng:85.3300,
    image:"https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=80",
    description:"Compact studio near PM's official residence in Baluwatar diplomatic zone. Ideal for expats, NGO workers, or professionals. Quiet street, 24-hour security.",
    features:["Furnished","Hot Water","WiFi Included","Rooftop Access","24-hr Security"],
    yearBuilt:2021, facing:"East", road:"20 ft", featured:false,
    agent:{name:"Meena Gurung", phone:"+977-9831234567", image:"https://randomuser.me/api/portraits/women/51.jpg"}
  },
  {
    id:9, title:"Luxury Penthouse in Maharajgunj", price:22000000,
    type:"apartment", status:"for_sale", beds:4, baths:3, area:2800, areaUnit:"sqft",
    city:"Kathmandu", district:"Kathmandu", location:"Maharajgunj", address:"Maharajgunj, Kathmandu-3",
    lat:27.7339, lng:85.3311,
    image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    description:"Sprawling top-floor penthouse with 360° city views, private terrace, and premium imported fittings. Walking distance to UN complex and international hospitals.",
    features:["Penthouse","Private Terrace","City View","2 Parking","Gym","Swimming Pool","Lift"],
    yearBuilt:2020, facing:"South", road:"24 ft", featured:true,
    agent:{name:"Sita Sharma", phone:"+977-9801234567", image:"https://randomuser.me/api/portraits/women/44.jpg"}
  },
  {
    id:10, title:"Land in Budhanilkantha", price:24000000, pricePerAana:2000000,
    type:"land", status:"for_sale", area:12, areaUnit:"aana",
    city:"Kathmandu", district:"Kathmandu", location:"Budhanilkantha", address:"Budhanilkantha, Kathmandu-8",
    lat:27.7919, lng:85.3594,
    image:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    description:"Premium residential land in rapidly developing Budhanilkantha at the foothills of Shivapuri National Park. Clean air, less traffic, ideal for dream home.",
    features:["Shivapuri View","Wide Road","Electricity","Drinking Water","Peaceful Area"],
    facing:"South", road:"20 ft", featured:false,
    agent:{name:"Ram Thapa", phone:"+977-9851234567", image:"https://randomuser.me/api/portraits/men/32.jpg"}
  },
  {
    id:11, title:"Duplex House in Sanepa", price:18500000, pricePerAana:1681818,
    type:"house", status:"for_sale", beds:4, baths:3, area:11, areaUnit:"aana",
    city:"Lalitpur", district:"Lalitpur", location:"Sanepa", address:"Sanepa, Lalitpur-15",
    lat:27.6833, lng:85.3117,
    image:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    description:"Elegant duplex in expat-friendly Sanepa near ICIMOD, ADB, and WHO offices. Double-height living room, modular kitchen, American-style master bedroom.",
    features:["Duplex","Modular Kitchen","Parking","Garden","Solar Water Heater","Security"],
    yearBuilt:2020, facing:"East", road:"20 ft", featured:false,
    agent:{name:"Binod KC", phone:"+977-9861234567", image:"https://randomuser.me/api/portraits/men/55.jpg"}
  },
  {
    id:12, title:"3BHK Furnished Flat in Jhamsikhel", price:45000,
    type:"apartment", status:"for_rent", beds:3, baths:2, area:1200, areaUnit:"sqft",
    city:"Lalitpur", district:"Lalitpur", location:"Jhamsikhel", address:"Jhamsikhel, Lalitpur-11",
    lat:27.6750, lng:85.3083,
    image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    description:"Fully furnished apartment in prime Jhamsikhel location. Modular kitchen, premium appliances, 2 ACs, and covered parking. Perfect for expatriate families.",
    features:["Fully Furnished","2 AC","Washing Machine","Generator Backup","Lift","CCTV"],
    yearBuilt:2019, facing:"South", road:"16 ft", featured:false,
    agent:{name:"Priya Joshi", phone:"+977-9811234567", image:"https://randomuser.me/api/portraits/women/63.jpg"}
  },
  {
    id:13, title:"Row House in Imadol", price:7800000, pricePerAana:1560000,
    type:"house", status:"for_sale", beds:3, baths:2, area:5, areaUnit:"aana",
    city:"Lalitpur", district:"Lalitpur", location:"Imadol", address:"Imadol, Lalitpur-17",
    lat:27.6500, lng:85.3500,
    image:"https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=600&q=80",
    description:"Well-designed row house in fast-developing Imadol. Near Imadol College and Bota Botanical Garden. Easy highway access, good connectivity.",
    features:["Parking","Rooftop","Water Tank","Electricity","Near School"],
    yearBuilt:2018, facing:"West", road:"12 ft", featured:false,
    agent:{name:"Deepak Shrestha", phone:"+977-9821234567", image:"https://randomuser.me/api/portraits/men/41.jpg"}
  },
  {
    id:14, title:"Residential Plot in Suryabinayak", price:4800000, pricePerAana:800000,
    type:"land", status:"for_sale", area:6, areaUnit:"aana",
    city:"Bhaktapur", district:"Bhaktapur", location:"Suryabinayak", address:"Suryabinayak, Bhaktapur-6",
    lat:27.6717, lng:85.4333,
    image:"https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=600&q=80",
    description:"Affordable residential plot near Suryabinayak Temple in Bhaktapur. Good connectivity to Araniko Highway, Arniko Hospital, and Kathmandu via ring road.",
    features:["Road Access","Electricity","Drinking Water","Near Temple"],
    facing:"South", road:"14 ft", featured:false,
    agent:{name:"Anita Maharjan", phone:"+977-9841234567", image:"https://randomuser.me/api/portraits/women/28.jpg"}
  },
  {
    id:15, title:"Cafe & Restaurant Space — New Road", price:120000,
    type:"commercial", status:"for_rent", area:1500, areaUnit:"sqft",
    city:"Kathmandu", district:"Kathmandu", location:"New Road", address:"New Road, Kathmandu-31",
    lat:27.7041, lng:85.3145,
    image:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    description:"Ground floor commercial space on New Road's main pedestrian street — Nepal's busiest shopping corridor. Ideal for restaurant, cafe, or retail. 50,000+ daily footfall.",
    features:["Corner Space","High Footfall","AC","Restrooms","Storage","Kitchen Hookup"],
    yearBuilt:2016, facing:"South", road:"40 ft", featured:false,
    agent:{name:"Suresh Karki", phone:"+977-9871234567", image:"https://randomuser.me/api/portraits/men/67.jpg"}
  },
  {
    id:16, title:"2BHK Apartment in Koteshwor", price:11000000,
    type:"apartment", status:"for_sale", beds:2, baths:2, area:1050, areaUnit:"sqft",
    city:"Kathmandu", district:"Kathmandu", location:"Koteshwor", address:"Koteshwor, Kathmandu-32",
    lat:27.6858, lng:85.3647,
    image:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    description:"Modern 2BHK near Koteshwor Chowk with easy Araniko Highway access. Open kitchen, sunlit living room, OC-certified building with lift and covered parking.",
    features:["Lift","Parking","OC Certificate","Water Supply","Security","Fire Safety"],
    yearBuilt:2021, facing:"West", road:"20 ft", featured:false,
    agent:{name:"Ram Thapa", phone:"+977-9851234567", image:"https://randomuser.me/api/portraits/men/32.jpg"}
  },
  {
    id:17, title:"Land in Bharatpur, Chitwan", price:6500000, pricePerAana:650000,
    type:"land", status:"for_sale", area:10, areaUnit:"aana",
    city:"Bharatpur", district:"Chitwan", location:"Bharatpur-10", address:"Bharatpur Metropolitan, Chitwan",
    lat:27.6833, lng:84.4333,
    image:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
    description:"Commercial-residential land in Nepal's fastest-growing city Bharatpur. Near Bharatpur Airport and Chitwan Medical College. Excellent investment potential.",
    features:["Airport Access","Highway Nearby","All Utilities","Flat Terrain"],
    facing:"South", road:"16 ft", featured:false,
    agent:{name:"Binod KC", phone:"+977-9861234567", image:"https://randomuser.me/api/portraits/men/55.jpg"}
  },
  {
    id:18, title:"Bungalow in Ekantakuna", price:21000000, pricePerAana:1615385,
    type:"house", status:"for_sale", beds:5, baths:3, area:13, aanaUnit:"aana", areaUnit:"aana",
    city:"Lalitpur", district:"Lalitpur", location:"Ekantakuna", address:"Ekantakuna, Lalitpur-21",
    lat:27.6583, lng:85.3083,
    image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    description:"Spacious bungalow in quiet Ekantakuna with large landscaped garden. Near Ekantakuna junction, close to international schools and Ring Road.",
    features:["Landscaped Garden","Servant Quarter","2 Parking","Generator","CCTV","Solar Water"],
    yearBuilt:2017, facing:"North", road:"18 ft", featured:false,
    agent:{name:"Deepak Shrestha", phone:"+977-9821234567", image:"https://randomuser.me/api/portraits/men/41.jpg"}
  },
  {
    id:19, title:"Apartment in Biratnagar", price:4500000,
    type:"apartment", status:"for_sale", beds:2, baths:1, area:900, areaUnit:"sqft",
    city:"Biratnagar", district:"Morang", location:"Traffic Chowk", address:"Traffic Chowk, Biratnagar-5",
    lat:26.4667, lng:87.2667,
    image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    description:"Value-for-money 2BHK in central Biratnagar near Biratnagar Airport and Nepal's largest jute mills. Good rental potential in Nepal's second city.",
    features:["Lift","Parking","Water Tank","Near Market","Airport Proximity"],
    yearBuilt:2020, facing:"East", road:"16 ft", featured:false,
    agent:{name:"Meena Gurung", phone:"+977-9831234567", image:"https://randomuser.me/api/portraits/women/51.jpg"}
  },
  {
    id:20, title:"Commercial Land in Nayabazaar, Pokhara", price:15000000, pricePerAana:1500000,
    type:"land", status:"for_sale", area:10, areaUnit:"aana",
    city:"Pokhara", district:"Kaski", location:"Nayabazaar", address:"Nayabazaar, Pokhara-8",
    lat:28.2167, lng:83.9833,
    image:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    description:"Strategic commercial plot on Nayabazaar's main road in Pokhara's commercial hub. Prithvi Highway frontage, suitable for bank, hotel, or shopping complex.",
    features:["Highway Frontage","Commercial Zone","All Utilities","Corner Plot","High Traffic"],
    facing:"East", road:"32 ft", featured:true,
    agent:{name:"Sita Sharma", phone:"+977-9801234567", image:"https://randomuser.me/api/portraits/women/44.jpg"}
  },
  {
    id:21, title:"Guest House — Boudha Stupa Area", price:35000000,
    type:"commercial", status:"for_sale", beds:12, baths:8, area:2400, areaUnit:"sqft",
    city:"Kathmandu", district:"Kathmandu", location:"Boudhanath", address:"Boudha, Kathmandu-6",
    lat:27.7219, lng:85.3619,
    image:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    description:"Running 12-room guest house 200m from Boudhanath UNESCO World Heritage Stupa. Fully operational, licensed, with established bookings. Buddhist pilgrimage tourism.",
    features:["12 Rooms","Running Business","Heritage View","Licensed","Reception","Courtyard"],
    yearBuilt:2014, facing:"South", road:"14 ft", featured:true,
    agent:{name:"Suresh Karki", phone:"+977-9871234567", image:"https://randomuser.me/api/portraits/men/67.jpg"}
  },
  {
    id:22, title:"2BHK Flat for Rent in Kalanki", price:18000,
    type:"apartment", status:"for_rent", beds:2, baths:1, area:750, areaUnit:"sqft",
    city:"Kathmandu", district:"Kathmandu", location:"Kalanki", address:"Kalanki, Kathmandu-14",
    lat:27.6983, lng:85.2833,
    image:"https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=80",
    description:"Affordable flat near Kalanki bus terminal — easy access to all directions of Kathmandu. Includes cooking gas line, solar water heater, and parking.",
    features:["Gas Pipe","Solar Water","Parking","Balcony","Near Bus Stop"],
    yearBuilt:2019, facing:"South", road:"20 ft", featured:false,
    agent:{name:"Meena Gurung", phone:"+977-9831234567", image:"https://randomuser.me/api/portraits/women/51.jpg"}
  },
  {
    id:23, title:"Farmhouse in Godavari", price:16000000, pricePerAana:500000,
    type:"house", status:"for_sale", beds:4, baths:2, area:32, areaUnit:"aana",
    city:"Lalitpur", district:"Lalitpur", location:"Godavari", address:"Godavari, Lalitpur-22",
    lat:27.5983, lng:85.3833,
    image:"https://images.unsplash.com/photo-1570129477492-45c003dc4ff4?w=600&q=80",
    description:"Sprawling farmhouse surrounded by Royal Botanical Garden and Pulchoki hills. Organic orchard, fish pond, mountain views. Ideal for retreat center or eco-resort.",
    features:["Orchard","Fish Pond","Mountain View","Natural Spring","Garden","Caretaker Quarter"],
    yearBuilt:2012, facing:"North", road:"10 ft", featured:false,
    agent:{name:"Ram Thapa", phone:"+977-9851234567", image:"https://randomuser.me/api/portraits/men/32.jpg"}
  },
  {
    id:24, title:"Agricultural Land in Hetauda", price:4000000, pricePerAana:266667,
    type:"land", status:"for_sale", area:15, areaUnit:"aana",
    city:"Hetauda", district:"Makwanpur", location:"Hetauda-7", address:"Hetauda Sub-Metropolitan, Makwanpur",
    lat:27.4167, lng:85.0333,
    image:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
    description:"Flat agricultural land near Hetauda Industrial District. Close to Hetauda Cement factory and Hetauda-Birgunj highway. Strong industrial investment potential.",
    features:["Flat Terrain","Road Access","Electricity","Near Industrial Zone"],
    facing:"East", road:"12 ft", featured:false,
    agent:{name:"Binod KC", phone:"+977-9861234567", image:"https://randomuser.me/api/portraits/men/55.jpg"}
  },
  {
    id:25, title:"Office Space on Durbarmarg", price:180000,
    type:"commercial", status:"for_rent", area:2000, areaUnit:"sqft",
    city:"Kathmandu", district:"Kathmandu", location:"Durbarmarg", address:"Durbarmarg, Kathmandu-1",
    lat:27.7042, lng:85.3145,
    image:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    description:"Premium furnished office in Kathmandu's most prestigious business address Durbarmarg. Floor-to-ceiling glass, conference rooms, reception area, dedicated parking.",
    features:["Furnished","Conference Room","Dedicated Parking","AC","Generator","High-Speed Internet"],
    yearBuilt:2018, facing:"South", road:"40 ft", featured:false,
    agent:{name:"Suresh Karki", phone:"+977-9871234567", image:"https://randomuser.me/api/portraits/men/67.jpg"}
  },
  {
    id:26, title:"3BHK Apartment in Kupondole", price:14000000,
    type:"apartment", status:"for_sale", beds:3, baths:2, area:1300, areaUnit:"sqft",
    city:"Lalitpur", district:"Lalitpur", location:"Kupondole", address:"Kupondole, Lalitpur-10",
    lat:27.6800, lng:85.3150,
    image:"https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=600&q=80",
    description:"Ready-to-move apartment in Kupondole near Satdobato and Jaulakhel. German-brand kitchen fittings, teak parquet floors, vastu-compliant layout.",
    features:["Teak Flooring","Modular Kitchen","Lift","2 Parking","OC Certificate","Vastu"],
    yearBuilt:2022, facing:"East", road:"18 ft", featured:false,
    agent:{name:"Anita Maharjan", phone:"+977-9841234567", image:"https://randomuser.me/api/portraits/women/28.jpg"}
  },
  {
    id:27, title:"Historic Patan House near Mangalbazar", price:12000000, pricePerAana:1500000,
    type:"house", status:"for_sale", beds:4, baths:3, area:8, areaUnit:"aana",
    city:"Lalitpur", district:"Lalitpur", location:"Mangalbazar", address:"Mangalbazar, Patan Durbar Square",
    lat:27.6588, lng:85.3247,
    image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80",
    description:"Rare heritage property within Patan Durbar Square buffer zone. Traditional Newari architecture with original wood lattice windows. Conservation grant eligibility.",
    features:["Heritage Property","Carved Windows","Courtyard","Traditional Brick","Near Museum"],
    yearBuilt:1980, facing:"East", road:"10 ft", featured:true,
    agent:{name:"Ram Thapa", phone:"+977-9851234567", image:"https://randomuser.me/api/portraits/men/32.jpg"}
  },
  {
    id:28, title:"Residential Land in Tokha", price:8500000, pricePerAana:1062500,
    type:"land", status:"for_sale", area:8, aanaUnit:"aana", areaUnit:"aana",
    city:"Kathmandu", district:"Kathmandu", location:"Tokha", address:"Tokha, Kathmandu-9",
    lat:27.7708, lng:85.3475,
    image:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    description:"Clean air residential land in growing Tokha municipality. Quiet hilltop location with Kathmandu valley views. Just 8km from Ratnapark. Ideal for private home.",
    features:["Valley View","Peaceful Area","All Utilities","Wide Road","Near New Ring Road"],
    facing:"South", road:"16 ft", featured:false,
    agent:{name:"Priya Joshi", phone:"+977-9811234567", image:"https://randomuser.me/api/portraits/women/63.jpg"}
  },
  {
    id:29, title:"2BHK for Rent in Naxal", price:30000,
    type:"apartment", status:"for_rent", beds:2, baths:2, area:1000, areaUnit:"sqft",
    city:"Kathmandu", district:"Kathmandu", location:"Naxal", address:"Naxal, Kathmandu-10",
    lat:27.7167, lng:85.3383,
    image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    description:"Bright 2BHK in quiet Naxal near Bhagwati temple. Minutes from Chabahil, Dillibazar, and Baneshwor. Semi-furnished with built-in wardrobes.",
    features:["Semi-Furnished","Hot Water","Balcony","Parking","Good Sunlight"],
    yearBuilt:2018, facing:"South", road:"16 ft", featured:false,
    agent:{name:"Meena Gurung", phone:"+977-9831234567", image:"https://randomuser.me/api/portraits/women/51.jpg"}
  },
  {
    id:30, title:"Lakeside Hotel Investment — Pokhara", price:55000000,
    type:"commercial", status:"for_sale", beds:20, baths:22, area:4000, areaUnit:"sqft",
    city:"Pokhara", district:"Kaski", location:"Lakeside", address:"Lakeside-6, Pokhara",
    lat:28.2050, lng:83.9570,
    image:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    description:"Operational 20-room boutique hotel 50m from Phewa Lake. Rooftop restaurant with Machapuchre view, swimming pool, yoga deck. Established TripAdvisor reviews.",
    features:["20 Rooms","Swimming Pool","Rooftop Restaurant","Phewa Lake View","Licensed","Bookings"],
    yearBuilt:2015, facing:"West", road:"24 ft", featured:true,
    agent:{name:"Binod KC", phone:"+977-9861234567", image:"https://randomuser.me/api/portraits/men/55.jpg"}
  },
  {
    id:31, title:"House in Sitapaila", price:11500000, pricePerAana:1277778,
    type:"house", status:"for_sale", beds:3, baths:2, area:9, areaUnit:"aana",
    city:"Kathmandu", district:"Kathmandu", location:"Sitapaila", address:"Sitapaila, Kathmandu-28",
    lat:27.7167, lng:85.2667,
    image:"https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=600&q=80",
    description:"Well-maintained 3-bedroom house in Sitapaila. Recently renovated kitchen and bathrooms. 5 minutes from Swayambhunath Stupa and Ring Road.",
    features:["Parking","Rooftop Garden","Water Tank","Near Ring Road","Solar"],
    yearBuilt:2016, facing:"South", road:"14 ft", featured:false,
    agent:{name:"Deepak Shrestha", phone:"+977-9821234567", image:"https://randomuser.me/api/portraits/men/41.jpg"}
  },
  {
    id:32, title:"Apartment in Birgunj", price:3500000,
    type:"apartment", status:"for_sale", beds:2, baths:1, area:800, areaUnit:"sqft",
    city:"Birgunj", district:"Parsa", location:"Adarshanagar", address:"Adarshanagar, Birgunj",
    lat:27.0167, lng:84.8667,
    image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    description:"Modern apartment near Birgunj Integrated Check Post — Nepal's busiest land border with India. Ideal for traders and businesspeople. Strong rental income potential.",
    features:["Border Proximity","Parking","Lift","Water Tank","Near Market"],
    yearBuilt:2020, facing:"East", road:"20 ft", featured:false,
    agent:{name:"Meena Gurung", phone:"+977-9831234567", image:"https://randomuser.me/api/portraits/women/51.jpg"}
  },
  {
    id:33, title:"Commercial Land in Bhairahawa", price:5500000, pricePerAana:458333,
    type:"land", status:"for_sale", area:12, areaUnit:"aana",
    city:"Bhairahawa", district:"Rupandehi", location:"Siddharthanagar", address:"Siddharthanagar, Rupandehi",
    lat:27.5000, lng:83.4500,
    image:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
    description:"Strategic commercial land near Gautam Buddha International Airport in Bhairahawa. Ideal for warehousing, logistics, or hotel development near Lumbini pilgrimage circuit.",
    features:["Airport Proximity","Lumbini Circuit","Industrial Zone","Flat Land","All Utilities"],
    facing:"East", road:"20 ft", featured:false,
    agent:{name:"Priya Joshi", phone:"+977-9811234567", image:"https://randomuser.me/api/portraits/women/63.jpg"}
  },
  {
    id:34, title:"4BHK House in Tinkune", price:19000000, pricePerAana:1583333,
    type:"house", status:"for_sale", beds:4, baths:3, area:12, aanaUnit:"aana", areaUnit:"aana",
    city:"Kathmandu", district:"Kathmandu", location:"Tinkune", address:"Tinkune, Kathmandu-32",
    lat:27.6900, lng:85.3567,
    image:"https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
    description:"Spacious house near Tribhuvan International Airport. Excellent connectivity via Airport Road and Araniko Highway. Modern construction with open terrace.",
    features:["Near Airport","Open Terrace","Parking","Water Tank","Solar Panel","Security"],
    yearBuilt:2019, facing:"East", road:"16 ft", featured:false,
    agent:{name:"Sita Sharma", phone:"+977-9801234567", image:"https://randomuser.me/api/portraits/women/44.jpg"}
  },
  {
    id:35, title:"3BHK Premium Flat for Rent — Sanepa", price:55000,
    type:"apartment", status:"for_rent", beds:3, baths:2, area:1600, areaUnit:"sqft",
    city:"Lalitpur", district:"Lalitpur", location:"Sanepa", address:"Sanepa Height, Lalitpur-15",
    lat:27.6800, lng:85.3117,
    image:"https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
    description:"High-end 1600 sqft flat in sought-after Sanepa near ICIMOD, ADB headquarters, and WHO Nepal. Hardwood floors, designer kitchen, and city view.",
    features:["Hardwood Floor","Designer Kitchen","City View","2 Covered Parking","Generator","CCTV"],
    yearBuilt:2021, facing:"North", road:"20 ft", featured:false,
    agent:{name:"Anita Maharjan", phone:"+977-9841234567", image:"https://randomuser.me/api/portraits/women/28.jpg"}
  },
  {
    id:36, title:"Showroom Space — Putalisadak", price:150000,
    type:"commercial", status:"for_rent", area:2500, areaUnit:"sqft",
    city:"Kathmandu", district:"Kathmandu", location:"Putalisadak", address:"Putalisadak, Kathmandu-31",
    lat:27.7083, lng:85.3250,
    image:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    description:"Ground + first floor showroom on Putalisadak — Kathmandu's main automobile and electronics corridor. 18-foot ceiling height, 3-phase power, ideal for car showroom or flagship store.",
    features:["Double Height","3-Phase Power","AC","Wide Frontage","Basement Storage","Lift"],
    yearBuilt:2019, facing:"East", road:"32 ft", featured:false,
    agent:{name:"Suresh Karki", phone:"+977-9871234567", image:"https://randomuser.me/api/portraits/men/67.jpg"}
  },
  {
    id:37, title:"Land in Katunje, Bhaktapur", price:7200000, pricePerAana:900000,
    type:"land", status:"for_sale", area:8, aanaUnit:"aana", areaUnit:"aana",
    city:"Bhaktapur", district:"Bhaktapur", location:"Katunje", address:"Katunje, Bhaktapur-3",
    lat:27.6500, lng:85.4500,
    image:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    description:"Accessible land in Katunje near Bhaktapur Industrial Estate and Dhulikhel Highway. Rapid appreciation due to planned outer ring road passing nearby.",
    features:["Near Highway","Industrial Area","Flat Terrain","Electricity","Drinking Water"],
    facing:"South", road:"16 ft", featured:false,
    agent:{name:"Anita Maharjan", phone:"+977-9841234567", image:"https://randomuser.me/api/portraits/women/28.jpg"}
  },
  {
    id:38, title:"House in Harisiddhi", price:6800000, pricePerAana:1360000,
    type:"house", status:"for_sale", beds:3, baths:2, area:5, areaUnit:"aana",
    city:"Lalitpur", district:"Lalitpur", location:"Harisiddhi", address:"Harisiddhi, Lalitpur-30",
    lat:27.6417, lng:85.3583,
    image:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    description:"Cozy family home in Harisiddhi near Harisiddhi Bhagwati Temple. Expanding area with new schools and colleges. Good for families seeking affordable Lalitpur address.",
    features:["Rooftop","Parking","Near Temple","Good Connectivity","Quiet Area"],
    yearBuilt:2017, facing:"East", road:"12 ft", featured:false,
    agent:{name:"Priya Joshi", phone:"+977-9811234567", image:"https://randomuser.me/api/portraits/women/63.jpg"}
  },
  {
    id:39, title:"2BHK Apartment in Dharan", price:3800000,
    type:"apartment", status:"for_sale", beds:2, baths:1, area:850, areaUnit:"sqft",
    city:"Dharan", district:"Sunsari", location:"BP Chowk", address:"BP Chowk, Dharan-8",
    lat:26.8167, lng:87.2833,
    image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    description:"Affordable apartment near BP Koirala Institute of Health Sciences (BPKIHS) hospital in Dharan. Great for medical professionals and families. Growing eastern hub.",
    features:["Near Hospital","Lift","Parking","Water Tank","Near Market"],
    yearBuilt:2021, facing:"South", road:"16 ft", featured:false,
    agent:{name:"Meena Gurung", phone:"+977-9831234567", image:"https://randomuser.me/api/portraits/women/51.jpg"}
  },
  {
    id:40, title:"Agricultural Land in Ratnanagar, Chitwan", price:12000000, pricePerAana:300000,
    type:"land", status:"for_sale", area:40, areaUnit:"aana",
    city:"Bharatpur", district:"Chitwan", location:"Ratnanagar", address:"Ratnanagar, Chitwan",
    lat:27.6167, lng:84.3667,
    image:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
    description:"Large fertile land parcel in Chitwan's prime agricultural belt near Sauraha — Nepal's top safari destination. Irrigation canal access, ideal for eco-resort or farm.",
    features:["Irrigation Canal","Near Sauraha","Fertile Soil","Road Access","Peaceful"],
    facing:"South", road:"10 ft", featured:false,
    agent:{name:"Binod KC", phone:"+977-9861234567", image:"https://randomuser.me/api/portraits/men/55.jpg"}
  },
  {
    id:41, title:"3BHK House in Golfutar", price:13500000, pricePerAana:1350000,
    type:"house", status:"for_sale", beds:3, baths:3, area:10, areaUnit:"aana",
    city:"Kathmandu", district:"Kathmandu", location:"Golfutar", address:"Golfutar, Kathmandu-9",
    lat:27.7608, lng:85.3475,
    image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    description:"Well-built north-Kathmandu house in Golfutar with Shivapuri hill views. Clean air, low traffic. Near Golfutar bus stop. Good family home or long-term rental.",
    features:["Hill View","Garden","Parking","Solar Water","Quiet Neighborhood"],
    yearBuilt:2018, facing:"South", road:"16 ft", featured:false,
    agent:{name:"Ram Thapa", phone:"+977-9851234567", image:"https://randomuser.me/api/portraits/men/32.jpg"}
  },
  {
    id:42, title:"2BHK Apartment in Pokhara Nayabazaar", price:6800000,
    type:"apartment", status:"for_sale", beds:2, baths:2, area:1100, areaUnit:"sqft",
    city:"Pokhara", district:"Kaski", location:"Nayabazaar", address:"Nayabazaar, Pokhara-17",
    lat:28.2100, lng:83.9800,
    image:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    description:"New apartment in Pokhara's main commercial area Nayabazaar. Walking distance to banks, schools, and Prithvi Narayan Campus. Annex bus available.",
    features:["Central Location","Lift","Parking","Water Supply","Near Schools"],
    yearBuilt:2022, facing:"East", road:"24 ft", featured:false,
    agent:{name:"Sita Sharma", phone:"+977-9801234567", image:"https://randomuser.me/api/portraits/women/44.jpg"}
  },
  {
    id:43, title:"Land in Damak, Jhapa", price:2800000, pricePerAana:280000,
    type:"land", status:"for_sale", area:10, areaUnit:"aana",
    city:"Damak", district:"Jhapa", location:"Damak-5", address:"Damak Municipality, Jhapa",
    lat:26.6500, lng:87.7000,
    image:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
    description:"Affordable land in Damak — the commercial center of Jhapa district, near the Mahendra Highway. High growth area with tea gardens nearby.",
    features:["Mahendra Highway Access","Near Tea Garden","Flat Land","All Utilities"],
    facing:"South", road:"14 ft", featured:false,
    agent:{name:"Binod KC", phone:"+977-9861234567", image:"https://randomuser.me/api/portraits/men/55.jpg"}
  },
  {
    id:44, title:"Retail Space for Rent — Birgunj", price:45000,
    type:"commercial", status:"for_rent", area:1200, areaUnit:"sqft",
    city:"Birgunj", district:"Parsa", location:"Clock Tower Area", address:"Clock Tower, Birgunj",
    lat:27.0200, lng:84.8700,
    image:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    description:"Ground floor retail space near Birgunj's famous Clock Tower landmark. High footfall from Indo-Nepal border trade. Perfect for wholesale or retail business.",
    features:["High Footfall","Near Border","Ground Floor","Storage Room","24-hr Operation"],
    yearBuilt:2017, facing:"West", road:"24 ft", featured:false,
    agent:{name:"Meena Gurung", phone:"+977-9831234567", image:"https://randomuser.me/api/portraits/women/51.jpg"}
  },
  {
    id:45, title:"5BHK Villa in Godavari, Lalitpur", price:24000000, pricePerAana:1500000,
    type:"house", status:"for_sale", beds:5, baths:3, area:16, areaUnit:"aana",
    city:"Lalitpur", district:"Lalitpur", location:"Godavari", address:"Godavari, Lalitpur-22",
    lat:27.6083, lng:85.3833,
    image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    description:"Grand villa at Godavari's hillside with panoramic views of Pulchoki, Phulchoki, and Kathmandu valley. Terraced garden, private pathway, and natural stone boundary.",
    features:["Panoramic View","Terraced Garden","Natural Stone","Private Driveway","Servant Quarter","Generator"],
    yearBuilt:2020, facing:"North", road:"14 ft", featured:true,
    agent:{name:"Deepak Shrestha", phone:"+977-9821234567", image:"https://randomuser.me/api/portraits/men/41.jpg"}
  }
];

const CITIES = ["Kathmandu","Pokhara","Lalitpur","Bhaktapur","Chitwan","Biratnagar","Birgunj","Hetauda","Dharan","Damak","Bhairahawa","Bharatpur"];

function formatPrice(price, status) {
  if (status === "for_rent") return `Rs. ${price.toLocaleString()}/mo`;
  if (price >= 10000000) return `Rs. ${(price/10000000).toFixed(2).replace(/\.?0+$/,'')} Cr`;
  if (price >= 100000) return `Rs. ${(price/100000).toFixed(1)} L`;
  return `Rs. ${price.toLocaleString()}`;
}

function propertyCardHTML(p) {
  const saved = typeof isSaved === 'function' ? isSaved(p.id) : false;
  const idJs = typeof p.id === 'number' ? p.id : `'${p.id}'`;
  return `
  <div class="property-card" data-id="${p.id}">
    <div class="property-card-img">
      <img src="${p.image}" alt="${p.title}" loading="lazy">
      <div class="property-card-badges">
        <span class="badge ${p.status==='for_rent'?'badge-rent':'badge-sale'}">${p.status==='for_rent'?'For Rent':'For Sale'}</span>
        <span class="badge badge-type">${p.type}</span>
      </div>
      ${p.featured?'<span class="badge badge-featured" style="position:absolute;bottom:10px;left:10px;">Featured</span>':''}
      <button class="save-btn ${saved?'saved':''}" title="${saved?'Remove from saved':'Save property'}"
        onclick="toggleSaved(${idJs}, this); event.stopPropagation();">
        <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </button>
    </div>
    <div class="property-card-body">
      <div class="property-card-top">
        <div class="property-card-title">${p.title}</div>
        <div class="property-card-price">${formatPrice(p.price,p.status)}</div>
      </div>
      <div class="property-card-loc">
        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        ${p.location}, ${p.city}
      </div>
      ${(p.beds||p.baths||p.area)?`
      <div class="property-card-stats">
        ${p.beds?`<span class="stat-item"><svg viewBox="0 0 24 24"><path d="M2 20v-5H1v-2l1-5h18l1 5v2h-1v5h-2v-5H4v5H2zm2.5-7h15l-.6-3H5.1L4.5 13zm1 5v-3h-2v3h2zm11 0v-3h-2v3h2z"/></svg>${p.beds} Beds</span>`:''}
        ${p.baths?`<span class="stat-item"><svg viewBox="0 0 24 24"><path d="M7 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm11.5 8H5.5C4.12 20 3 18.88 3 17.5V17h18v.5c0 1.38-1.12 2.5-2.5 2.5z"/></svg>${p.baths} Baths</span>`:''}
        ${p.area?`<span class="stat-item"><svg viewBox="0 0 24 24"><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/></svg>${p.area} ${p.areaUnit}</span>`:''}
      </div>`:'<div style="margin-bottom:8px;"></div>'}
      <a href="property.html?id=${p.id}" class="property-card-btn">View Details</a>
    </div>
  </div>`;
}
