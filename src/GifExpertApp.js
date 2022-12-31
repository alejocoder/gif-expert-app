import React, {useState} from 'react'
import { AddCategory,GifGrid } from './components/';

export const GifExpertApp = () => {

    const [category, setCategory] = useState(['one punch']);

    const onAddCategory = (newCategory) =>{

        if (category.includes(newCategory)) return;

        setCategory([newCategory, ...category]);
    };

  return (
    <>
        <h1>GifExpertApp</h1> 

        <AddCategory
            onNewCategory = {event => {
                  return onAddCategory(event);
              }}
        />
        {category.map((categories) => 
        <GifGrid key={categories} category={categories}></GifGrid>
        )}
    </>
  )
}
