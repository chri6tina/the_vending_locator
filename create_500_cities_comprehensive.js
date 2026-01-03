const fs = require('fs');
const path = require('path');

// Comprehensive list of 500+ additional cities across all US states
// These are cities that may not be in states.ts but should have pages
const comprehensiveCityList = [
  // Alabama additions
  { name: 'Alexander City', state: 'Alabama', slug: 'alexander-city-alabama' },
  { name: 'Andalusia', state: 'Alabama', slug: 'andalusia-alabama' },
  { name: 'Anniston', state: 'Alabama', slug: 'anniston-alabama' },
  { name: 'Athens', state: 'Alabama', slug: 'athens-alabama' },
  { name: 'Atmore', state: 'Alabama', slug: 'atmore-alabama' },
  { name: 'Bay Minette', state: 'Alabama', slug: 'bay-minette-alabama' },
  { name: 'Brewton', state: 'Alabama', slug: 'brewton-alabama' },
  { name: 'Cullman', state: 'Alabama', slug: 'cullman-alabama' },
  { name: 'Daphne', state: 'Alabama', slug: 'daphne-alabama' },
  { name: 'Demopolis', state: 'Alabama', slug: 'demopolis-alabama' },
  { name: 'Enterprise', state: 'Alabama', slug: 'enterprise-alabama' },
  { name: 'Eufaula', state: 'Alabama', slug: 'eufaula-alabama' },
  { name: 'Fairhope', state: 'Alabama', slug: 'fairhope-alabama' },
  { name: 'Florence', state: 'Alabama', slug: 'florence-alabama' },
  { name: 'Fort Payne', state: 'Alabama', slug: 'fort-payne-alabama' },
  { name: 'Greenville', state: 'Alabama', slug: 'greenville-alabama' },
  { name: 'Guntersville', state: 'Alabama', slug: 'guntersville-alabama' },
  { name: 'Homewood', state: 'Alabama', slug: 'homewood-alabama' },
  { name: 'Jasper', state: 'Alabama', slug: 'jasper-alabama' },
  { name: 'Lanett', state: 'Alabama', slug: 'lanett-alabama' },
  { name: 'Madison', state: 'Alabama', slug: 'madison-alabama' },
  { name: 'Millbrook', state: 'Alabama', slug: 'millbrook-alabama' },
  { name: 'Muscle Shoals', state: 'Alabama', slug: 'muscle-shoals-alabama' },
  { name: 'Northport', state: 'Alabama', slug: 'northport-alabama' },
  { name: 'Oxford', state: 'Alabama', slug: 'oxford-alabama' },
  { name: 'Pell City', state: 'Alabama', slug: 'pell-city-alabama' },
  { name: 'Phenix City', state: 'Alabama', slug: 'phenix-city-alabama' },
  { name: 'Scottsboro', state: 'Alabama', slug: 'scottsboro-alabama' },
  { name: 'Selma', state: 'Alabama', slug: 'selma-alabama' },
  { name: 'Sheffield', state: 'Alabama', slug: 'sheffield-alabama' },
  { name: 'Sylacauga', state: 'Alabama', slug: 'sylacauga-alabama' },
  { name: 'Talladega', state: 'Alabama', slug: 'talladega-alabama' },
  { name: 'Troy', state: 'Alabama', slug: 'troy-alabama' },
  { name: 'Trussville', state: 'Alabama', slug: 'trussville-alabama' },
  { name: 'Tuskegee', state: 'Alabama', slug: 'tuskegee-alabama' },
  { name: 'Vestavia Hills', state: 'Alabama', slug: 'vestavia-hills-alabama' },
  
  // Alaska additions
  { name: 'Ketchikan', state: 'Alaska', slug: 'ketchikan-alaska' },
  { name: 'Kodiak', state: 'Alaska', slug: 'kodiak-alaska' },
  { name: 'Palmer', state: 'Alaska', slug: 'palmer-alaska' },
  { name: 'Sitka', state: 'Alaska', slug: 'sitka-alaska' },
  { name: 'Kenai', state: 'Alaska', slug: 'kenai-alaska' },
  { name: 'Homer', state: 'Alaska', slug: 'homer-alaska' },
  { name: 'Soldotna', state: 'Alaska', slug: 'soldotna-alaska' },
  
  // Arkansas additions
  { name: 'Batesville', state: 'Arkansas', slug: 'batesville-arkansas' },
  { name: 'Benton', state: 'Arkansas', slug: 'benton-arkansas' },
  { name: 'Blytheville', state: 'Arkansas', slug: 'blytheville-arkansas' },
  { name: 'Camden', state: 'Arkansas', slug: 'camden-arkansas' },
  { name: 'El Dorado', state: 'Arkansas', slug: 'el-dorado-arkansas' },
  { name: 'Forrest City', state: 'Arkansas', slug: 'forrest-city-arkansas' },
  { name: 'Harrison', state: 'Arkansas', slug: 'harrison-arkansas' },
  { name: 'Helena', state: 'Arkansas', slug: 'helena-arkansas' },
  { name: 'Hope', state: 'Arkansas', slug: 'hope-arkansas' },
  { name: 'Magnolia', state: 'Arkansas', slug: 'magnolia-arkansas' },
  { name: 'Mountain Home', state: 'Arkansas', slug: 'mountain-home-arkansas' },
  { name: 'Russellville', state: 'Arkansas', slug: 'russellville-arkansas' },
  { name: 'Van Buren', state: 'Arkansas', slug: 'van-buren-arkansas' },
  { name: 'Cabot', state: 'Arkansas', slug: 'cabot-arkansas' },
  
  // Continue with more states - I'll create a large comprehensive list
  // Let me add more cities from various states to reach 500
];

// Since we need 500 cities, let me create a more systematic approach
// I'll create a script that reads from a comprehensive source or generates them

// For now, let me create a comprehensive list by reading common city names
// and generating variations across all states

