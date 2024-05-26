import { BuildingProps } from "../../components/Building";
import { BuildingEntranceProps } from "../../components/BuildingEntrance";
import { FilterElement, Category } from "../../components/Filter";
import { EntranceProps } from "../../components/Master";
import { MasterBuildingProps } from "../../components/Master";
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
const categoryTypes: FilterElement[] = [
  {
    chosen: false,
    name: "city"
  },
  {
    chosen: false,
    name: "street"
  }
];
const categories: Category[] = [
  {
    name: "city",
    data: cities
  },
  {
    name: "street",
    data: streets
  },
  {
    name: "streetNumber",
    data: streetNumbers
  }
];
const entrancesData: BuildingEntranceProps[] = [
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

const masterCategories: string[] = [
  "id",
  "buildingStartDate",
  "buildingEndDate",
  "name",
  "city"
];
const masterData: MasterBuildingProps[] = [
  {
    id: 1,
    buildingStartDate: new Date("2022-03-25"),
    buildingEndDate: new Date("2022-03-25"),
    name: "Name",
    city: "Zagreb"
  },
  {
    id: 2,
    buildingStartDate: new Date("2022-03-25"),
    buildingEndDate: new Date("2022-03-25"),
    name: "Name2",
    city: "Rijeka"
  },
  {
    id: 3,
    buildingStartDate: new Date("2022-03-25"),
    buildingEndDate: new Date("2022-03-25"),
    name: "Name3",
    city: "Osijek"
  },
  {
    id: 4,
    buildingStartDate: new Date("2022-03-25"),
    buildingEndDate: new Date("2022-03-25"),
    name: "Name4",
    city: "Split"
  }
]
const entranceCategories: string [] = [
  "id",
  "tenantRepresentative",
  "streetName",
  "streetNumber"
];
const entranceData: EntranceProps[] = [
  {
    id: 1,
    tenantRepresentative: "M P",
    streetName: "Vukovarska",
    streetNumber: "12"
  },
  {
    id: 2,
    tenantRepresentative: "K D",
    streetName: "Slavonska",
    streetNumber: "17"
  },
  {
    id: 3,
    tenantRepresentative: "I K",
    streetName: "Zagrebacka",
    streetNumber: "22"
  },
  {
    id: 4,
    tenantRepresentative: "M C",
    streetName: "Kolodvorska",
    streetNumber: "18"
  }
];
buildingsData.forEach((element, index) => {
  element.src = `src/assets/buildingsImages/building${element.id % 10 + 1}.jpg`;
  element.city = cities[index % cities.length];
  element.street = streets[index % streets.length];
  element.streetNumber = streetNumbers[index % streetNumbers.length];
})
export {
  masterCategories,
  masterData,
  buildingsData,
  entrancesData,
  entranceData,
  entranceCategories,
  categoryTypes,
  categories
}