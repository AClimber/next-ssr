import {useEffect, useState} from "react";


const getDoc = async (): Promise<{message: string}> => {
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random')
        return res.json();
    } catch (e) {
        return { message: 'https:/images.dog.ceo/breeds/redbone/n02090379_1964.jpg' };
    }
}
export const Dog = () => {
    const [image, setImage] = useState('')
    useEffect(() => {
        handleNewDoc();
    }, [])

    const handleNewDoc = async () => {
        const obj = await getDoc();

        setImage(obj.message);
    }
    if (!image) return <h1>No doc yet</h1>

    return (
        <>
            <h2>Dog</h2>

            <img src={image} alt="docs" height="400"/>
            <br/>
            <button onClick={handleNewDoc}>Regenerate</button>
        </>
    )

}
