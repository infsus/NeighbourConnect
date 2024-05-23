import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export interface FilterElement {
    chosen: boolean;
    name: string;
}

interface Category {
    name: string,
    data: string[] | number[];
}

interface FilterProps {
    categoryTypes: FilterElement[];
    categories: Category[];
}

const Filter: React.FC<FilterProps> = ({ categoryTypes, categories }) => {
    
    const [categoryState, setCategoryState] = useState<FilterElement[]>(categoryTypes);

    // Enables/disables category
    const toggleCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
        const updatedCategories = categoryState.map(category => {
            if (category.name === event.currentTarget.value) {
                return { ...category, chosen: !category.chosen };
            }
            return category;
        });
        setCategoryState(updatedCategories);
    }

    const selectCategory = (eventKey: string | null) => {
        console.log(eventKey);
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
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
                    disabled={!category.chosen}
                    onSelect={selectCategory}
                >
                    {categories.filter((c) => c.name === category.name)
                        .map((element) => (
                            element.data.map((item, idx) => (
                                <Dropdown.Item key={idx} eventKey={item.toString()}>
                                    {item}
                                </Dropdown.Item>
                            ))
                        ))}
                </DropdownButton>
            ))}
        </>
    );
}

export default Filter;
