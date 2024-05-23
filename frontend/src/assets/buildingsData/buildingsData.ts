import { BuildingProps } from "../../components/Building";
import { BuildingEntraceProps } from "../../components/BuildingEntrance";
import { FilterElement } from "../../components/Filter";

const cities: string[] = [
  "Zagreb",
  "Rijeka",
  "Split",
  "Velika Gorica",
  "Osijek",
  "Varaždin",
  "Zadar",
  "Vukovar",
  "Pula",
  "Umag",
  "Poreč",
  "Petrinja",
  "Sesvete",
  "Samobor"
];
const streets: string[] = [
  "Vukovarska",
  "Slavonska",
  "Ulica kralja Tomislava",
  "Ilica",
  "Ulica Vladimira Nazora",
  "Kolodvorska",
  "Zagrebačka",
  "Kneza Porina",
  "Ulica Marina Getaldića"
]
const streetNumbers: number[] = [
  84,
  23,
  17,
  48,
  20,
  58,
  13,
  37,
  10
]

const buildingsData: BuildingProps[] = [
  {
    id: 1,
    src: 'https://example.com/building-1.jpg',
    name: 'Sunrise Towers',
    city: 'Dubrovnik',
    street: 'Park Avenue',
    streetNumber: 0
  },
  {
    id: 2,
    src: 'https://example.com/building-2.jpg',
    name: 'Ocean View Apartments',
    city: 'Rijeka',
    street: "King's Square",
    streetNumber: 0
  },
  {
    id: 3,
    src: 'https://example.com/building-3.jpg',
    name: 'Golden Gate Residence',
    city: 'Split',
    street: 'Main Street',
    streetNumber: 0
  },
  {
    id: 4,
    src: 'https://example.com/building-4.jpg',
    name: 'Royal Gardens',
    city: 'Zagreb',
    street: 'Coastal Road',
    streetNumber: 0
  },
  {
    id: 5,
    src: 'https://example.com/building-5.jpg',
    name: 'Sunrise Towers',
    city: 'Dubrovnik',
    street: 'Main Street',
    streetNumber: 0
  },
  {
    id: 6,
    src: 'https://example.com/building-6.jpg',
    name: 'Ocean View Apartments',
    city: 'Rijeka',
    street: 'Park Avenue',
    streetNumber: 0
  },
  {
    id: 7,
    src: 'https://example.com/building-7.jpg',
    name: 'Golden Gate Residence',
    city: 'Split',
    street: 'King\'s Square',
    streetNumber: 0
  },
  {
    id: 8,
    src: 'https://example.com/building-8.jpg',
    name: 'Royal Gardens',
    city: 'Zagreb',
    street: 'Main Street',
    streetNumber: 0
  },
  {
    id: 9,
    src: 'https://example.com/building-9.jpg',
    name: 'Sunrise Towers',
    city: 'Dubrovnik',
    street: 'Coastal Road',
    streetNumber: 0
  },
  {
    id: 10,
    src: 'https://example.com/building-10.jpg',
    name: 'Ocean View Apartments',
    city: 'Rijeka',
    street: 'King\'s Square',
    streetNumber: 0
  },
  {
    id: 11,
    src: 'https://example.com/building-11.jpg',
    name: 'Golden Gate Residence',
    city: 'Split',
    street: 'Park Avenue',
    streetNumber: 0
  },
  {
    id: 12,
    src: 'https://example.com/building-12.jpg',
    name: 'Royal Gardens',
    city: 'Zagreb',
    street: 'Coastal Road',
    streetNumber: 0
  },
  {
    id: 13,
    src: 'https://example.com/building-13.jpg',
    name: 'Sunrise Towers',
    city: 'Dubrovnik',
    street: 'King\'s Square',
    streetNumber: 0
  },
  {
    id: 14,
    src: 'https://example.com/building-14.jpg',
    name: 'Ocean View Apartments',
    city: 'Rijeka',
    street: 'Main Street',
    streetNumber: 0
  },
  {
    id: 15,
    src: 'https://example.com/building-15.jpg',
    name: 'Golden Gate Residence',
    city: 'Split',
    street: 'Coastal Road',
    streetNumber: 0
  },
  {
    id: 16,
    src: 'https://example.com/building-16.jpg',
    name: 'Royal Gardens',
    city: 'Zagreb',
    street: 'King\'s Square',
    streetNumber: 0
  },
  {
    id: 17,
    src: 'https://example.com/building-17.jpg',
    name: 'Sunrise Towers',
    city: 'Dubrovnik',
    street: 'Park Avenue',
    streetNumber: 0
  },
  {
    id: 18,
    src: 'https://example.com/building-18.jpg',
    name: 'Ocean View Apartments',
    city: 'Rijeka',
    street: 'Coastal Road',
    streetNumber: 0
  },
  {
    id: 19,
    src: 'https://example.com/building-19.jpg',
    name: 'Golden Gate Residence',
    city: 'Split',
    street: 'King\'s Square',
    streetNumber: 0
  },
  {
    id: 20,
    src: 'https://example.com/building-20.jpg',
    name: 'Royal Gardens',
    city: 'Zagreb',
    street: 'Main Street',
    streetNumber: 0
  }
];
const categories: FilterElement[] = [
  {
    chosen: false,
    name: "city"
  },
  {
    chosen: false,
    name: "street"
  }
];
const entrancesData: BuildingEntraceProps[] = [
  {
    parentID: 1,
    entranceNumber: 1,
    street: "Vukovarska"
  },
  {
    parentID: 1,
    entranceNumber: 2,
    street: "Slavonska"
  },
  {
    parentID: 2,
    entranceNumber: 1,
    street: "Vukovarska"
  },
  {
    parentID: 2,
    entranceNumber: 2,
    street: "Vukovarska"
  },
  {
    parentID: 2,
    entranceNumber: 3,
    street: "Slavonska"
  },
  {
    parentID: 2,
    entranceNumber: 4,
    street: "Slavonska"
  },
  {
    parentID: 3,
    entranceNumber: 1,
    street: "Slavonska"
  },
  {
    parentID: 3,
    entranceNumber: 2,
    street: "Slavonska"
  },
];
buildingsData.forEach((element, index) => {
  element.src = `src/assets/buildingsImages/building${element.id % 10 + 1}.jpg`;
  element.city = cities[index % cities.length];
  element.street = streets[index % streets.length];
  element.streetNumber = streetNumbers[index % streetNumbers.length];
})
export {
  buildingsData,
  entrancesData,
  categories
}