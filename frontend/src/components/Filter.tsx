import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export interface FilterElement {
    chosen: boolean;
    name: string;
}

export interface Category {
    name: string,
    data: string[] | number[];
}

export interface DropdownFilter {
    category: string;
    value: string;
}

interface FilterProps {
    categoryTypes: FilterElement[];
    categories: Category[];
    usedCategories: string[];
    dropdownFilterValues: DropdownFilter[];
    onFilterChange: (value: string) => void;
    onCategoryToggle: (value: string[]) => void;
    onDropdownSelect: (value: DropdownFilter[]) => void;
}

const Filter: React.FC<FilterProps> = ({ categoryTypes, categories, usedCategories, dropdownFilterValues, onFilterChange, onCategoryToggle, onDropdownSelect }) => {
    
    const [categoryState, setCategoryState] = useState<FilterElement[]>(categoryTypes);
    const [filterValue, setFilterValue] = useState<string>("");

    useEffect(() => {
        //console.log("Category State Updated:", categoryState);
    }, [categoryState]);

    useEffect(() => {
        //console.log("Used Categories Prop Updated:", usedCategories);
    }, [usedCategories]);
    
    useEffect(() => {

    }, [dropdownFilterValues])
    // Enables/disables category
    const toggleCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
        const updatedCategories = categoryState.map(category => {
            //console.log("CATEGORY: ", category);    
            if (category.name === event.currentTarget.value) {
                return { ...category, chosen: !category.chosen };
            }
            return category;
        });
        
        setCategoryState(updatedCategories);
        const toggledCategory = event.currentTarget.value;
        if (updatedCategories.find(element => element.name === toggledCategory)?.chosen === true) {
            console.log("PARENTHESIS:", [...usedCategories, toggledCategory]);
            onCategoryToggle([...usedCategories, toggledCategory]);
        } else {
            console.log(usedCategories);
            onCategoryToggle(usedCategories.filter(category => category !== toggledCategory));
        }

    };

    const handleFilterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //console.log("VALUE: ", e.target.value);
        setFilterValue(e.target.value);
        onFilterChange(e.target.value);
    };

    const selectCategory = (eventName: string, eventKey: string) => {
        //console.log(eventKey);
        //console.log(eventName);
        if (dropdownFilterValues.length == 0) {
            onDropdownSelect([{category: eventName, value: eventKey}]);
        }
        else {
            const newDropdownFilterValues = dropdownFilterValues.filter(element => {
                if (element.category != eventName) {
                    return true;
                }
                else {
                    return false;
                }
            });
            //console.log(newDropdownFilterValues);
            onDropdownSelect([{category: eventName, value: eventKey}, ...newDropdownFilterValues]);
        }
    };

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control 
                        type="text" 
                        placeholder="Unesite ključne riječi"
                        name="filter"
                        value={filterValue}
                        onChange={handleFilterInputChange} 
                    />
                </Form.Group>
            </Form>
            <ButtonGroup>
                {categoryState.map((category, index) => (
                    <Button key={index} value={category.name} onClick={toggleCategory}>
                        {category.name}
                    </Button>
                ))}
            </ButtonGroup>
            {categoryState.map((category, index) => (
                <DropdownButton 
                    key={index} 
                    id={`categories-dropdown-${index}`} 
                    title={category.name} 
                    onSelect={(eventKey) => selectCategory(category.name, eventKey)}
                >
                    {categories.filter((c) => c.name === category.name)
                        .map((element) => (
                            element.data.map((item, idx) => (
                                <Dropdown.Item key={idx} eventKey={item.toString()} >
                                    {item}
                                </Dropdown.Item>
                            ))
                        ))}
                </DropdownButton>
            ))}
            {usedCategories.length ? "USED FILTERS:" : ""}
            {usedCategories.map(used => {
                return " " + used + " ";
            })}
        </>
    );
};

export default Filter;
