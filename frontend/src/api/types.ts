interface Options {
    [key: string]: any;
}

interface Api {
    url: string,
    options: Options
}

interface CreateBuildingEntranceBody {
    tenantRepresentativeId: number | null,
    streetId: number,
    streetNumber: number
};

interface CreateBuildingBody {
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
