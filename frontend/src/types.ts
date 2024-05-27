interface Pages {
    [key: string]: {
        component: React.FC<any>,
        name: string,
        url: string,
        navbar: boolean,
        props: any
    }
};

interface Building {
    id: number,
    buildingStartDate: string,
    buildingEndDate: string,
    name: string,
    entrances: BuildingEntrance[]
};

interface BuildingEntrance {
    id: number,
    tenantRepresentative: string,
    streetName: string,
    streetNumber: string
};