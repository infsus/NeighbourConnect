import { BuildingProps } from "../../components/Building";
import { BuildingEntraceProps } from "../../components/BuildingEntrance";
const buildingsData: BuildingProps[] = [
    {
      id: 1,
      src: 'https://example.com/building-1.jpg',
      name: 'Sunrise Towers',
      city: 'Dubrovnik',
      street: 'Park Avenue'
    },
    {
      id: 2,
      src: 'https://example.com/building-2.jpg',
      name: 'Ocean View Apartments',
      city: 'Rijeka',
      street: "King's Square"
    },
    {
      id: 3,
      src: 'https://example.com/building-3.jpg',
      name: 'Golden Gate Residence',
      city: 'Split',
      street: 'Main Street'
    },
    {
      id: 4,
      src: 'https://example.com/building-4.jpg',
      name: 'Royal Gardens',
      city: 'Zagreb',
      street: 'Coastal Road'
    },
    {
      id: 5,
      src: 'https://example.com/building-5.jpg',
      name: 'Sunrise Towers',
      city: 'Dubrovnik',
      street: 'Main Street'
    },
    {
      id: 6,
      src: 'https://example.com/building-6.jpg',
      name: 'Ocean View Apartments',
      city: 'Rijeka',
      street: 'Park Avenue'
    },
    {
      id: 7,
      src: 'https://example.com/building-7.jpg',
      name: 'Golden Gate Residence',
      city: 'Split',
      street: 'King\'s Square'
    },
    {
      id: 8,
      src: 'https://example.com/building-8.jpg',
      name: 'Royal Gardens',
      city: 'Zagreb',
      street: 'Main Street'
    },
    {
      id: 9,
      src: 'https://example.com/building-9.jpg',
      name: 'Sunrise Towers',
      city: 'Dubrovnik',
      street: 'Coastal Road'
    },
    {
      id: 10,
      src: 'https://example.com/building-10.jpg',
      name: 'Ocean View Apartments',
      city: 'Rijeka',
      street: 'King\'s Square'
    },
    {
      id: 11,
      src: 'https://example.com/building-11.jpg',
      name: 'Golden Gate Residence',
      city: 'Split',
      street: 'Park Avenue'
    },
    {
      id: 12,
      src: 'https://example.com/building-12.jpg',
      name: 'Royal Gardens',
      city: 'Zagreb',
      street: 'Coastal Road'
    },
    {
      id: 13,
      src: 'https://example.com/building-13.jpg',
      name: 'Sunrise Towers',
      city: 'Dubrovnik',
      street: 'King\'s Square'
    },
    {
      id: 14,
      src: 'https://example.com/building-14.jpg',
      name: 'Ocean View Apartments',
      city: 'Rijeka',
      street: 'Main Street'
    },
    {
      id: 15,
      src: 'https://example.com/building-15.jpg',
      name: 'Golden Gate Residence',
      city: 'Split',
      street: 'Coastal Road'
    },
    {
      id: 16,
      src: 'https://example.com/building-16.jpg',
      name: 'Royal Gardens',
      city: 'Zagreb',
      street: 'King\'s Square'
    },
    {
      id: 17,
      src: 'https://example.com/building-17.jpg',
      name: 'Sunrise Towers',
      city: 'Dubrovnik',
      street: 'Park Avenue'
    },
    {
      id: 18,
      src: 'https://example.com/building-18.jpg',
      name: 'Ocean View Apartments',
      city: 'Rijeka',
      street: 'Coastal Road'
    },
    {
      id: 19,
      src: 'https://example.com/building-19.jpg',
      name: 'Golden Gate Residence',
      city: 'Split',
      street: 'King\'s Square'
    },
    {
      id: 20,
      src: 'https://example.com/building-20.jpg',
      name: 'Royal Gardens',
      city: 'Zagreb',
      street: 'Main Street'
    }
];
const entrancesData: BuildingEntraceProps[] = [
    {
        buildingParent: 1,
        entranceNumber: 1,
        street: "Vukovarska"
    },
    {
        buildingParent: 1,
        entranceNumber: 2,
        street: "Slavonska"
    },
];
buildingsData.forEach((element) =>
{
    element.src = `src/assets/buildingsImages/building${element.id % 10 + 1}.jpg`;
})
export default buildingsData;
  