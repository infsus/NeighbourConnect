import React, { useState, useEffect } from "react";
import Building, { BuildingProps } from "../components/Building";
import "../assets/css/pages/BuildingsInspect.css";
import Filter, { Category, FilterElement, DropdownFilter } from "../components/Filter";
import { categoryTypes, categories } from "../assets/buildingsData/buildingsData";
import Master, { MasterBuildingProps } from "../components/Master";
import { masterData, masterCategories, entranceData, entranceCategories } from "../assets/buildingsData/buildingsData";
import { api } from "../api";
import "../assets/css/components/BuildingDetails.css"

interface BuildingsProps {
    //buildings: BuildingProps[];
    buildings: MasterBuildingProps[];
}

const BuildingsInspect: React.FC<BuildingsProps> = ({ buildings }) => {
    const [filterValue, setFilterValue] = useState<string>("");
    const [dropdownFilterValues, setDropdownFilterValues] = useState<DropdownFilter[]>([]);
    const [chosenCategories, setChosenCategories] = useState<string[]>([]);
    const [fetchedBuildings, setFetchedBuildings] = useState<MasterBuildingProps[]>([]); // State variable for fetched buildings

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await api.buildings.getBuildings(0, 2); // Call the API function to fetch buildings
            console.log("RESPONSE: ", response);
            if (response.ok) {
              const data = await response.json(); // Extract JSON data from the response
              console.log("DATA: ", data);
              setFetchedBuildings(data); // Update the state with the fetched data
            } else {
              console.error('Failed to fetch buildings:', response.statusText);
            }
          } catch (error) {
            console.error('Error fetching buildings:', error);
          }
        };
    
        fetchData(); // Call the fetchData function when the component mounts
      }, []); 

    console.log("FETCHED BUILDINGS: ", fetchedBuildings); // Log the fetched buildings
    const handleFilterChange = (newFilterValue: string) => {
        //console.log("NEW FILTER VALUE: ", newFilterValue);
        setFilterValue(newFilterValue);
    };

    const handleDropdownFilterSelect = (newDropdownFilters: DropdownFilter[]) => {
        //console.log(newDropdownFilters);
        setDropdownFilterValues(newDropdownFilters);
    }
    const handleFilteringCategories = (newChosenCategories: string[]) => {
        //console.log("NEW CHOSEN CATEGORIES: ", newChosenCategories);
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
                <div className="details-container">
                    <div className="title">
                        {masterCategories.map(category => (
                            <p>{category}</p>
                        ))}
                    </div>
                </div>
                {fetchedBuildings.filter(building => {
                    //console.log("FILTER VALUE: ", filterValue);
                    if (filterValue === "" && dropdownFilterValues.length == 0) {
                        return true;
                    }

                    let matchesTextFilter: boolean = false;
                    if (chosenCategories.length == 0 && dropdownFilterValues.length == 0) {
                        return true;
                    }

                    else {
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
                    //<Building key={building.id} {...building} />
                    <Master m_categories={masterCategories} m_values={building} />
                ))}
            </div>
        </div>
    );
};

export default BuildingsInspect;
