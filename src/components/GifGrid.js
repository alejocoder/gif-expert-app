import React, {useEffect,useState} from 'react'
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
        let newImages = await getGifs(category);
        setImages(newImages);
        console.log(`images ${images}`);
    };

    useEffect(() => {
        getImages();
    }, []);

  return (
    <>
        <h3>{category}</h3>
        <ol>
            {
                images.map(image => (
                    <li key={image.id}>{image.title}</li>
                ))
            }
        </ol>

    </>
  )
}
