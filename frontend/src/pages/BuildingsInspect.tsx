import React, { useState } from "react";
import Building, { BuildingProps } from "../components/Building";
import "../assets/css/pages/BuildingsInspect.css";
import Filter, { Category, FilterElement, DropdownFilter } from "../components/Filter";
import { categoryTypes, categories } from "../assets/buildingsData/buildingsData";

interface BuildingsProps {
    buildings: BuildingProps[];
}

const BuildingsInspect: React.FC<BuildingsProps> = ({ buildings }) => {
    const [filterValue, setFilterValue] = useState<string>("");
    const [dropdownFilterValues, setDropdownFilterValues] = useState<DropdownFilter[]>([]);
    const [chosenCategories, setChosenCategories] = useState<string[]>([]);

    const handleFilterChange = (newFilterValue: string) => {
        //console.log("NEW FILTER VALUE: ", newFilterValue);
        setFilterValue(newFilterValue);
    };

    const handleDropdownFilterSelect = (newDropdownFilters: DropdownFilter[]) => {
        console.log(newDropdownFilters);
        setDropdownFilterValues(newDropdownFilters);
    }
    const handleFilteringCategories = (newChosenCategories: string[]) => {
        console.log("NEW CHOSEN CATEGORIES: ", newChosenCategories);
        setChosenCategories(newChosenCategories);
    };

    return (
        <div>
            <Filter
                categoryTypes={categoryTypes}
                categories={categories}
                usedCategories={chosenCategories}
                dropdownFilterValues={dropdownFilterValues}
                onFilterChange={handleFilterChange}
                onCategoryToggle={handleFilteringCategories}
                onDropdownSelect={handleDropdownFilterSelect}
            />
            <div className="buildings-container">
                {buildings.filter(building => {
                    //console.log("FILTER VALUE: ", filterValue);
                    if (filterValue === "" && dropdownFilterValues.length == 0) {
                        return true;
                    }
                    //ne zelimo da se ista komponenta rendera vise puta pa nemre ic for each il tak nes
                    // return chosenCategories.some(category => {
                    //     const propertyValue = building[category as keyof BuildingProps];
                    //     console.log("PROPERTY: ", propertyValue);
                    //     if (typeof propertyValue === 'string') {
                    //         const lowerCaseValue = propertyValue.toLowerCase()
                    //         return lowerCaseValue.includes(filterValue.toLowerCase());
                    //     }
                    //     return false;
                    // });
                    
                    let matchesTextFilter: boolean = false;
                    if (chosenCategories.length == 0 && dropdownFilterValues.length == 0) {
                       return true;
                    }

                    else  {
                        matchesTextFilter = chosenCategories.some(category => {
                            const propertyValue = building[category as keyof BuildingProps];
                            //console.log("PROPERTY: ", propertyValue);
                            if (typeof propertyValue === 'string') {
                                const lowerCaseValue = propertyValue.toLowerCase()
                                return lowerCaseValue.includes(filterValue.toLowerCase());
                            }
                            return false;
                        });
                    }
                    const matchesDropdownFilters = dropdownFilterValues.some(filter => {
                        console.log("DROPDOWN FILTER VALUES: ", dropdownFilterValues);
                        const propertyValue = building[filter.category as keyof BuildingProps];
                        console.log("PROPERTY VALUE: ", propertyValue);
                        console.log("FILTER VALUE: ", filter.value);
                        return propertyValue === filter.value;
                    });
                    
                    if (chosenCategories.length == 0) return matchesDropdownFilters;
                    else if (dropdownFilterValues.length == 0) return matchesTextFilter;
                    else return matchesTextFilter && matchesDropdownFilters;

                }).map(building => (
                    <Building key={building.id} {...building} />
                ))}
            </div>
        </div>
    );
};

export default BuildingsInspect;
