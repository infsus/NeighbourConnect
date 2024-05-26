interface Options {
    [key: string]: any;
}

interface Api {
    url: string,
    options: Options
}

export interface CreateBuildingEntranceBody {
    tenantRepresentativeId: number | null,
    streetId: number,
    streetNumber: number
};

export interface CreateBuildingBody {
    buildingStartDate: string,
    buildingEndDate: string,
    name: string,
    entrances: CreateBuildingEntranceBody[]
};

interface UpdateBuildingBody {
    buildingStartDate: string | null,
    buildingEndDate: string | null,
    name: string | null,
};

interface CreateStreetBody {
    name: string,
    placeId: number
};

interface UpdateStreetBody {
    name: string | null,
    placeId: number | null
};
