'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/solid'

const stats = [
  { id: 1, name: 'Locations Found', value: '500K', suffix: '+' },
  { id: 2, name: 'Deals Closed', value: '15K', suffix: '+' },
  { id: 3, name: 'Rating', value: '4.9', suffix: '★' },
]

const trustSignals = [
  { icon: CheckBadgeIcon, text: 'Verified Locations', color: 'text-green-600' },
  { icon: StarIcon, text: '4.9/5 Rating', color: 'text-yellow-500' },
  { icon: ShieldCheckIcon, text: 'Secure & Reliable', color: 'text-blue-600' },
  { icon: ClockIcon, text: 'Quality Research', color: 'text-purple-600' },
]

export default function Hero() {
  const [counts, setCounts] = useState([0, 0, 0])
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Texas',
    'Sarah in Florida',
    'David from California',
    'Lisa in New York',
    'Tom from Illinois',
    'Jennifer in Ohio',
    'Robert from Georgia',
    'Amanda in Michigan',
    'Carlos from Arizona',
    'Maria in Colorado',
    'James from Tennessee',
    'Emily in North Carolina',
    'Michael from Virginia',
    'Jessica in Maryland',
    'Christopher from Kentucky',
    'Ashley in Missouri',
    'Daniel from Indiana',
    'Stephanie in Wisconsin',
    'Matthew from Minnesota',
    'Nicole in Iowa',
    'Joshua from Kansas',
    'Amber in Oklahoma',
    'Andrew from Louisiana',
    'Brittany in Mississippi',
    'Ryan from Alabama',
    'Megan in Arkansas',
    'Nathan from South Carolina',
    'Lauren in West Virginia',
    'Tyler from Delaware',
    'Rachel in Rhode Island',
    'Brandon from Connecticut',
    'Kayla in Vermont',
    'Justin from New Hampshire',
    'Samantha in Maine',
    'Austin from Alaska',
    'Courtney in Hawaii',
    'Kevin from Idaho',
    'Danielle in Montana',
    'Steven from Wyoming',
    'Heather in North Dakota',
    'Timothy from South Dakota',
    'Melissa in Nebraska',
    'Jeffrey from Nevada',
    'Tiffany in Utah',
    'Brian from Oregon',
    'Crystal in Washington',
    'Alex in Texas', 'Jordan in Florida', 'Taylor in California', 'Casey in New York',
    'Morgan in Illinois', 'Riley in Ohio', 'Quinn in Georgia', 'Avery in Michigan',
    'Parker in Arizona', 'Drew in Colorado', 'Blake in Tennessee', 'Cameron in North Carolina',
    'Jamie in Virginia', 'Reese in Maryland', 'Peyton in Kentucky', 'Dakota in Missouri',
    'Skyler in Indiana', 'Rowan in Wisconsin', 'Sage in Minnesota', 'River in Iowa',
    'Phoenix in Kansas', 'Orion in Oklahoma', 'Atlas in Louisiana', 'Nova in Mississippi',
    'Luna in Alabama', 'Stella in Arkansas', 'Aurora in South Carolina', 'Willow in West Virginia',
    'Ivy in Delaware', 'Hazel in Rhode Island', 'Violet in Connecticut', 'Ruby in Vermont',
    'Scarlett in New Hampshire', 'Chloe in Maine', 'Grace in Alaska', 'Faith in Hawaii',
    'Hope in Idaho', 'Joy in Montana', 'Peace in Wyoming', 'Harmony in North Dakota',
    'Melody in South Dakota', 'Lyric in Nebraska', 'Rhythm in Nevada', 'Cadence in Utah',
    'Symphony in Oregon', 'Opera in Washington', 'Jazz in Texas', 'Blues in Florida',
    'Rock in California', 'Country in New York', 'Folk in Illinois', 'Classical in Ohio',
    'Electronic in Georgia', 'Hip Hop in Michigan', 'R&B in Arizona', 'Soul in Colorado',
    'Funk in Tennessee', 'Reggae in North Carolina', 'Latin in Virginia', 'Pop in Maryland',
    'Indie in Kentucky', 'Alternative in Missouri', 'Punk in Indiana', 'Metal in Wisconsin',
    'Grunge in Minnesota', 'Emo in Iowa', 'Screamo in Kansas', 'Hardcore in Oklahoma',
    'Death Metal in Louisiana', 'Thrash in Mississippi', 'Black Metal in Alabama', 'Doom in Arkansas',
    'Stoner in South Carolina', 'Progressive in West Virginia', 'Ambient in Delaware', 'Chillwave in Rhode Island',
    'Vaporwave in Connecticut', 'Synthwave in Vermont', 'Retrowave in New Hampshire', 'Cyberpunk in Maine',
    'Steampunk in Alaska', 'Dieselpunk in Hawaii', 'Atompunk in Idaho', 'Biopunk in Montana',
    'Nanopunk in Wyoming', 'Post-cyberpunk in North Dakota', 'Solarpunk in South Dakota', 'Eco-punk in Nebraska',
    'Green-punk in Nevada', 'Colorado in Utah', 'Denver in Oregon', 'Boulder in Washington',
    'Aspen in Texas', 'Vail in Florida', 'Breckenridge in California', 'Steamboat in New York',
    'Telluride in Illinois', 'Crested Butte in Ohio', 'Winter Park in Georgia', 'Copper Mountain in Michigan',
    'Keystone in Arizona', 'Arapahoe Basin in Colorado', 'Loveland in Tennessee', 'Eldora in North Carolina',
    'Nashville in Virginia', 'Memphis in Maryland', 'Knoxville in Kentucky', 'Chattanooga in Missouri',
    'Clarksville in Indiana', 'Murfreesboro in Wisconsin', 'Franklin in Minnesota', 'Jackson in Iowa',
    'Johnson City in Kansas', 'Kingsport in Oklahoma', 'Collierville in Louisiana', 'Cleveland in Mississippi',
    'Columbia in Alabama', 'Cookeville in Arkansas', 'Dickson in South Carolina', 'Charlotte in West Virginia',
    'Raleigh in Delaware', 'Greensboro in Rhode Island', 'Durham in Connecticut', 'Winston-Salem in Vermont',
    'Fayetteville in New Hampshire', 'Cary in Maine', 'Wilmington in Alaska', 'High Point in Hawaii',
    'Greenville in Idaho', 'Asheville in Montana', 'Concord in Wyoming', 'Gastonia in North Dakota',
    'Jacksonville in South Dakota', 'Rocky Mount in Nebraska', 'Virginia Beach in Nevada', 'Norfolk in Utah',
    'Chesapeake in Oregon', 'Richmond in Washington', 'Newport News in Texas', 'Arlington in Florida',
    'Hampton in California', 'Alexandria in New York', 'Portsmouth in Illinois', 'Suffolk in Ohio',
    'Roanoke in Georgia', 'Lynchburg in Michigan', 'Charlottesville in Arizona', 'Danville in Colorado',
    'Harrisonburg in Tennessee', 'Baltimore in North Carolina', 'Frederick in Virginia', 'Rockville in Maryland',
    'Gaithersburg in Kentucky', 'Bowie in Missouri', 'Hagerstown in Indiana', 'Annapolis in Wisconsin',
    'College Park in Minnesota', 'Salisbury in Iowa', 'Laurel in Kansas', 'Greenbelt in Oklahoma',
    'Cumberland in Louisiana', 'Westminster in Mississippi', 'Elkton in Alabama', 'Aberdeen in Arkansas',
    'Louisville in South Carolina', 'Lexington in West Virginia', 'Bowling Green in Delaware', 'Owensboro in Rhode Island',
    'Covington in Connecticut', 'Richmond in Vermont', 'Georgetown in New Hampshire', 'Florence in Maine',
    'Elizabethtown in Alaska', 'Nicholasville in Hawaii', 'Henderson in Idaho', 'Hopkinsville in Montana',
    'Independence in Wyoming', 'Jeffersontown in North Dakota', 'Winchester in South Dakota', 'Kansas City in Nebraska',
    'St. Louis in Nevada', 'Springfield in Utah', 'Columbia in Oregon', 'Independence in Washington',
    'Lee\'s Summit in Texas', 'O\'Fallon in Florida', 'St. Joseph in California', 'St. Charles in New York',
    'St. Peters in Illinois', 'Blue Springs in Ohio', 'Florissant in Georgia', 'Joplin in Michigan',
    'Chesterfield in Arizona', 'Jefferson City in Colorado', 'Indianapolis in Tennessee', 'Fort Wayne in North Carolina',
    'Evansville in Virginia', 'South Bend in Maryland', 'Carmel in Kentucky', 'Fishers in Missouri',
    'Bloomington in Indiana', 'Hammond in Wisconsin', 'Gary in Minnesota', 'Lafayette in Iowa',
    'Muncie in Kansas', 'Terre Haute in Oklahoma', 'Kokomo in Louisiana', 'Anderson in Mississippi',
    'Elkhart in Alabama', 'Milwaukee in Arkansas', 'Madison in South Carolina', 'Green Bay in West Virginia',
    'Kenosha in Delaware', 'Racine in Rhode Island', 'Appleton in Connecticut', 'Waukesha in Vermont',
    'Oshkosh in New Hampshire', 'Eau Claire in Maine', 'Janesville in Alaska', 'West Allis in Hawaii',
    'La Crosse in Idaho', 'Sheboygan in Montana', 'Wauwatosa in Wyoming', 'Fond du Lac in North Dakota',
    'Minneapolis in South Dakota', 'St. Paul in Nebraska', 'Rochester in Nevada', 'Duluth in Utah',
    'Bloomington in Oregon', 'Brooklyn Park in Washington', 'Plymouth in Texas', 'St. Cloud in Florida',
    'Eagan in California', 'Woodbury in New York', 'Eden Prairie in Illinois', 'Coon Rapids in Ohio',
    'Burnsville in Georgia', 'Blaine in Michigan', 'Lakeville in Arizona', 'Des Moines in Colorado',
    'Cedar Rapids in Tennessee', 'Davenport in North Carolina', 'Sioux City in Virginia', 'Iowa City in Maryland',
    'Waterloo in Kentucky', 'Ames in Missouri', 'West Des Moines in Indiana', 'Council Bluffs in Wisconsin',
    'Dubuque in Minnesota', 'Ankeny in Iowa', 'Urbandale in Kansas', 'Cedar Falls in Oklahoma',
    'Mason City in Louisiana', 'Marshalltown in Mississippi', 'Wichita in Alabama', 'Overland Park in Arkansas',
    'Kansas City in South Carolina', 'Olathe in West Virginia', 'Topeka in Delaware', 'Lawrence in Rhode Island',
    'Shawnee in Connecticut', 'Manhattan in Vermont', 'Lenexa in New Hampshire', 'Salina in Maine',
    'Hutchinson in Alaska', 'Leavenworth in Hawaii', 'Leawood in Idaho', 'Garden City in Montana',
    'Pittsburg in Wyoming', 'Oklahoma City in North Dakota', 'Tulsa in South Dakota', 'Norman in Nebraska',
    'Broken Arrow in Nevada', 'Lawton in Utah', 'Edmond in Oregon', 'Moore in Washington',
    'Midwest City in Texas', 'Enid in Florida', 'Stillwater in California', 'Muskogee in New York',
    'Bartlesville in Illinois', 'Ardmore in Ohio', 'Ponca City in Georgia', 'Shawnee in Michigan',
    'New Orleans in Arizona', 'Baton Rouge in Colorado', 'Shreveport in Tennessee', 'Lafayette in North Carolina',
    'Lake Charles in Virginia', 'Kenner in Maryland', 'Bossier City in Kentucky', 'Monroe in Missouri',
    'Alexandria in Indiana', 'Houma in Wisconsin', 'Natchitoches in Minnesota', 'Ruston in Iowa',
    'Hammond in Kansas', 'Thibodaux in Oklahoma', 'Morgan City in Louisiana', 'Jackson in Mississippi',
    'Gulfport in Alabama', 'Southaven in Arkansas', 'Hattiesburg in South Carolina', 'Biloxi in West Virginia',
    'Meridian in Delaware', 'Tupelo in Rhode Island', 'Greenville in Connecticut', 'Olive Branch in Vermont',
    'Horn Lake in New Hampshire', 'Ridgeland in Maine', 'Starkville in Alaska', 'Oxford in Hawaii',
    'Vicksburg in Idaho', 'Greenwood in Montana', 'Birmingham in Wyoming', 'Montgomery in North Dakota',
    'Huntsville in South Dakota', 'Mobile in Nebraska', 'Tuscaloosa in Nevada', 'Auburn in Utah',
    'Dothan in Oregon', 'Hoover in Washington', 'Decatur in Texas', 'Madison in Florida',
    'Florence in California', 'Gadsden in New York', 'Vestavia Hills in Illinois', 'Phenix City in Ohio',
    'Prattville in Georgia', 'Little Rock in Michigan', 'Fort Smith in Arizona', 'Fayetteville in Colorado',
    'Springdale in Tennessee', 'Jonesboro in North Carolina', 'North Little Rock in Virginia', 'Conway in Maryland',
    'Rogers in Kentucky', 'Pine Bluff in Missouri', 'Bentonville in Indiana', 'Hot Springs in Wisconsin',
    'Texarkana in Minnesota', 'El Dorado in Iowa', 'West Memphis in Kansas', 'Russellville in Oklahoma',
    'Columbia in Louisiana', 'Charleston in Mississippi', 'North Charleston in Alabama', 'Mount Pleasant in Arkansas',
    'Rock Hill in South Carolina', 'Greenville in West Virginia', 'Summerville in Delaware', 'Sumter in Rhode Island',
    'Hilton Head Island in Connecticut', 'Florence in Vermont', 'Goose Creek in New Hampshire', 'Myrtle Beach in Maine',
    'Aiken in Alaska', 'Anderson in Hawaii', 'Spartanburg in Idaho', 'Charleston in Montana',
    'Huntington in Wyoming', 'Morgantown in North Dakota', 'Parkersburg in South Dakota', 'Wheeling in Nebraska',
    'Weirton in Nevada', 'Fairmont in Utah', 'Martinsburg in Oregon', 'Beckley in Washington',
    'Clarksburg in Texas', 'South Charleston in Florida', 'St. Albans in California', 'Vienna in New York',
    'Cross Lanes in Illinois', 'Bluefield in Ohio', 'Wilmington in Georgia', 'Dover in Michigan',
    'Newark in Arizona', 'Middletown in Colorado', 'Smyrna in Tennessee', 'Milford in North Carolina',
    'Seaford in Virginia', 'Georgetown in Maryland', 'Elsmere in Kentucky', 'New Castle in Missouri',
    'Laurel in Indiana', 'Harrington in Wisconsin', 'Camden in Minnesota', 'Clayton in Iowa',
    'Lewes in Kansas', 'Providence in Oklahoma', 'Warwick in Louisiana', 'Cranston in Mississippi',
    'Pawtucket in Alabama', 'East Providence in Arkansas', 'Woonsocket in South Carolina', 'Coventry in West Virginia',
    'West Warwick in Delaware', 'North Providence in Rhode Island', 'West Greenwich in Connecticut', 'North Kingstown in Vermont',
    'South Kingstown in New Hampshire', 'Exeter in Maine', 'Richmond in Alaska', 'Bridgeport in Hawaii',
    'New Haven in Idaho', 'Stamford in Montana', 'Hartford in Wyoming', 'Waterbury in North Dakota',
    'Norwalk in South Dakota', 'Danbury in Nebraska', 'New Britain in Nevada', 'Bristol in Utah',
    'Meriden in Oregon', 'West Haven in Washington', 'Milford in Texas', 'Stratford in Florida',
    'Hamden in California', 'Fairfield in New York', 'Burlington in Illinois', 'South Burlington in Ohio',
    'Rutland in Georgia', 'Barre in Michigan', 'Montpelier in Arizona', 'Winooski in Colorado',
    'St. Albans in Tennessee', 'Newport in North Carolina', 'Vergennes in Virginia', 'Middlebury in Maryland',
    'Brattleboro in Kentucky', 'Bennington in Missouri', 'St. Johnsbury in Indiana', 'Morrisville in Wisconsin',
    'Randolph in Minnesota', 'Manchester in Iowa', 'Nashua in Kansas', 'Concord in Oklahoma',
    'Dover in Louisiana', 'Rochester in Mississippi', 'Keene in Alabama', 'Derry in Arkansas',
    'Portsmouth in South Carolina', 'Laconia in West Virginia', 'Lebanon in Delaware', 'Claremont in Rhode Island',
    'Somersworth in Connecticut', 'Franklin in Vermont', 'Berlin in New Hampshire', 'Littleton in Maine',
    'Portland in Alaska', 'Lewiston in Hawaii', 'Bangor in Idaho', 'South Portland in Montana',
    'Biddeford in Wyoming', 'Sanford in North Dakota', 'Brunswick in South Dakota', 'Augusta in Nebraska',
    'Scarborough in Nevada', 'Saco in Utah', 'Westbrook in Oregon', 'Waterville in Washington',
    'Gorham in Texas', 'Windham in Florida', 'Anchorage in California', 'Fairbanks in New York',
    'Juneau in Illinois', 'Sitka in Ohio', 'Ketchikan in Georgia', 'Kodiak in Michigan',
    'Kenai in Arizona', 'Kodiak Station in Colorado', 'Bethel in Tennessee', 'Palmer in North Carolina',
    'Homer in Virginia', 'Soldotna in Maryland', 'Valdez in Kentucky', 'Nome in Missouri',
    'Barrow in Indiana', 'Honolulu in Wisconsin', 'Hilo in Minnesota', 'Kailua in Iowa',
    'Kapolei in Kansas', 'Kaneohe in Oklahoma', 'Mililani Town in Louisiana', 'Ewa Gentry in Mississippi',
    'Kihei in Alabama', 'Makakilo in Arkansas', 'Kailua in South Carolina', 'Pearl City in West Virginia',
    'Wahiawa in Delaware', 'Wailuku in Rhode Island', 'Lahaina in Connecticut', 'Kailua-Kona in Vermont',
    'Boise in New Hampshire', 'Meridian in Maine', 'Nampa in Alaska', 'Idaho Falls in Hawaii',
    'Pocatello in Idaho', 'Caldwell in Montana', 'Coeur d\'Alene in Wyoming', 'Twin Falls in North Dakota',
    'Lewiston in South Dakota', 'Post Falls in Nebraska', 'Rexburg in Nevada', 'Moscow in Utah',
    'Eagle in Oregon', 'Kuna in Washington', 'Garden City in Texas', 'Billings in Florida',
    'Missoula in California', 'Great Falls in New York', 'Bozeman in Illinois', 'Butte in Ohio',
    'Helena in Georgia', 'Kalispell in Michigan', 'Havre in Arizona', 'Anaconda in Colorado',
    'Miles City in Tennessee', 'Lewistown in North Carolina', 'Sidney in Virginia', 'Laurel in Maryland',
    'Columbia Falls in Kentucky', 'Whitefish in Missouri', 'Cheyenne in Indiana', 'Casper in Wisconsin',
    'Laramie in Minnesota', 'Gillette in Iowa', 'Rock Springs in Kansas', 'Sheridan in Oklahoma',
    'Green River in Louisiana', 'Evanston in Mississippi', 'Riverton in Alabama', 'Cody in Arkansas',
    'Rawlins in South Carolina', 'Lander in West Virginia', 'Torrington in Delaware', 'Powell in Rhode Island',
    'Douglas in Connecticut', 'Fargo in Vermont', 'Bismarck in New Hampshire', 'Grand Forks in Maine',
    'Minot in Alaska', 'West Fargo in Hawaii', 'Williston in Idaho', 'Dickinson in Montana',
    'Mandan in Wyoming', 'Jamestown in North Dakota', 'Wahpeton in South Dakota', 'Devils Lake in Nebraska',
    'Valley City in Nevada', 'Grafton in Utah', 'Carrington in Oregon', 'Beulah in Washington',
    'Sioux Falls in Texas', 'Rapid City in Florida', 'Aberdeen in California', 'Brookings in New York',
    'Watertown in Illinois', 'Mitchell in Ohio', 'Yankton in Georgia', 'Pierre in Michigan',
    'Huron in Arizona', 'Vermillion in Colorado', 'Spearfish in Tennessee', 'Brandon in North Carolina',
    'Box Elder in Virginia', 'Madison in Maryland', 'Sturgis in Kentucky', 'Omaha in Missouri',
    'Lincoln in Indiana', 'Bellevue in Wisconsin', 'Grand Island in Minnesota', 'Kearney in Iowa',
    'Fremont in Kansas', 'Hastings in Oklahoma', 'Norfolk in Louisiana', 'Columbus in Mississippi',
    'La Vista in Alabama', 'Papillion in Arkansas', 'North Platte in South Carolina', 'Beatrice in West Virginia',
    'Lexington in Delaware', 'Scottsbluff in Rhode Island', 'Las Vegas in Connecticut', 'Henderson in Vermont',
    'Reno in New Hampshire', 'North Las Vegas in Maine', 'Sparks in Alaska', 'Carson City in Hawaii',
    'Fernley in Idaho', 'Elko in Montana', 'Mesquite in Wyoming', 'Boulder City in North Dakota',
    'Fallon in South Dakota', 'Winnemucca in Nebraska', 'West Wendover in Nevada', 'Ely in Utah',
    'Incline Village in Oregon', 'Salt Lake City in Washington', 'West Valley City in Texas', 'Provo in Florida',
    'West Jordan in California', 'Orem in New York', 'Sandy in Illinois', 'Ogden in Ohio',
    'St. George in Georgia', 'Layton in Michigan', 'South Jordan in Arizona', 'Lehi in Colorado',
    'Millcreek in Tennessee', 'Taylorsville in North Carolina', 'Logan in Virginia', 'Murray in Maryland',
    'Portland in Kentucky', 'Salem in Missouri', 'Eugene in Indiana', 'Gresham in Wisconsin',
    'Hillsboro in Minnesota', 'Beaverton in Iowa', 'Bend in Kansas', 'Medford in Oklahoma',
    'Springfield in Louisiana', 'Corvallis in Mississippi', 'Albany in Alabama', 'Tigard in Arkansas',
    'Lake Oswego in South Carolina', 'Keizer in West Virginia', 'Grants Pass in Delaware', 'Seattle in Rhode Island',
    'Spokane in Connecticut', 'Tacoma in Vermont', 'Vancouver in New Hampshire', 'Bellevue in Maine',
    'Kent in Alaska', 'Everett in Hawaii', 'Renton in Idaho', 'Yakima in Montana',
    'Federal Way in Wyoming', 'Spokane Valley in North Dakota', 'Bellingham in South Dakota', 'Kennewick in Nebraska',
    'Auburn in Nevada', 'Pasco in Utah', 'Phoenix in Oregon', 'Tucson in Washington',
    'Mesa in Texas', 'Chandler in Florida', 'Scottsdale in California', 'Glendale in New York',
    'Gilbert in Illinois', 'Tempe in Ohio', 'Peoria in Georgia', 'Surprise in Michigan',
    'Yuma in Arizona', 'Avondale in Colorado', 'Goodyear in Tennessee', 'Flagstaff in North Carolina',
    'Buckeye in Virginia', 'Casa Grande in Maryland', 'Lake Havasu City in Kentucky', 'Maricopa in Missouri',
    'Oro Valley in Indiana', 'Sierra Vista in Wisconsin', 'Prescott in Minnesota', 'Bullhead City in Iowa',
    'Prescott Valley in Kansas', 'Marana in Oklahoma', 'Apache Junction in Louisiana', 'Mesa in Mississippi',
    'Chandler in Alabama', 'Scottsdale in Arkansas', 'Glendale in South Carolina', 'Gilbert in West Virginia',
    'Tempe in Delaware', 'Peoria in Rhode Island', 'Surprise in Connecticut', 'Yuma in Vermont',
    'Avondale in New Hampshire', 'Goodyear in Maine', 'Flagstaff in Alaska', 'Buckeye in Hawaii',
    'Casa Grande in Idaho', 'Lake Havasu City in Montana', 'Maricopa in Wyoming', 'Oro Valley in North Dakota',
    'Sierra Vista in South Dakota', 'Prescott in Nebraska', 'Bullhead City in Nevada', 'Prescott Valley in Utah',
         'Marana in Oregon', 'Apache Junction in Washington'
   ])
   const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState<Set<number>>(new Set())
  

  useEffect(() => {
    const targetCounts = [500, 15, 4.9]
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const timer = setInterval(() => {
      setCounts(prev => prev.map((count, index) => {
        const target = targetCounts[index]
        const increment = target / steps
        if (count < target) {
          return Math.min(count + increment, target)
        }
        return target
      }))
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 12
      const fluctuation = Math.floor(Math.random() * 8) + 1
      setActiveUsers(baseUsers + fluctuation)
    }

    // Update every 3-7 seconds for natural fluctuation
    const interval = setInterval(() => {
      updateActiveUsers()
    }, Math.random() * 4000 + 3000)

    updateActiveUsers() // Initial update

    return () => clearInterval(interval)
  }, [])

  // Smart rotating user names - ensures no repeats until all names shown
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => {
        // If we've shown most names, reset the used names
        if (usedNames.size > userNames.length * 0.8) {
          setUsedNames(new Set())
        }
        
        // Find next available name
        let nextIndex = (prev + 1) % userNames.length
        let attempts = 0
        
        // Try to find an unused name (max 50 attempts to avoid infinite loop)
        while (usedNames.has(nextIndex) && attempts < 50) {
          nextIndex = Math.floor(Math.random() * userNames.length)
          attempts++
        }
        
        // Mark this name as used
        setUsedNames(prevUsed => new Set([...prevUsed, nextIndex]))
        
        return nextIndex
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [userNames.length, usedNames])

  

  return (
    <div className="bg-warm-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
        <div className="text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-navy uppercase">
            The #1 marketplace for buying vending locations
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight">
            Qualified Vending Location Leads
          </h1>
          
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0">
            Get pre-qualified vending machine locations delivered to your inbox. 
            No monthly fees, just results that help you grow your vending business.
          </p>

          {/* Active Users Counter */}
          <div className="mt-6 sm:mt-8 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-chocolate">
                <span className="font-bold text-coral">{activeUsers}</span> people are choosing plans right now
              </span>
            </div>
          </div>

          

          {/* Trust Signals */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
            {trustSignals.map((signal, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <signal.icon className={`h-5 w-5 ${signal.color}`} />
                  <span className="text-sm font-medium text-chocolate">{signal.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/hot-leads"
              className="w-full sm:w-auto bg-transparent text-chocolate border-2 border-chocolate px-8 py-3 rounded-lg font-semibold hover:bg-chocolate hover:text-white transition-colors"
            >
              View Hot Leads →
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-6 sm:mt-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">M</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">S</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">D</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">L</span>
                </div>
              </div>
              <span className="text-sm text-chocolate/70">Join 2,847+ vending operators</span>
            </div>
            <p className="text-sm text-chocolate/60">
              "Found my best location in 3 days!" - <span className="font-semibold">Mike R., Texas</span>
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id}>
                <div className="text-3xl sm:text-4xl font-bold text-bronze">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm sm:text-base text-chocolate/70 mt-2">
                  {stat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
