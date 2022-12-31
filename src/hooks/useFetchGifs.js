import React,{useState,useEffect} from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        let newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return{
        images: images,
        isLoading,
    }
}
