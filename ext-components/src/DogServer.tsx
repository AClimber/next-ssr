import {useEffect, useState} from "react";


const getDog = async (): Promise<{message: string}> => {
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random')
        return res.json();
    } catch (e) {
        return { message: 'https:/images.dog.ceo/breeds/redbone/n02090379_1964.jpg' };
    }
}

export const DogServer = async () => {
    const { message } = await getDog();
    console.log('server message: ', message)
    return (
        <Dog image={message}/>
    )
}
export const Dog = (props: {image?: string}) => {
    const [image, setImage] = useState(props.image)
    console.log('client props message: ', props.image)
    console.log('client message: ', image)

    useEffect(() => {
        if (!props.image) {
            handleNewDoc();
        }
    }, [])

    const handleNewDoc = async () => {
        const obj = await getDog();

        setImage(obj.message);
    }
    if (!image) return <h1>No doc yet</h1>

    return (
        <>
            <h2>DogServer</h2>
            <img src={image} alt="docs" height="400"/>
            <br/>
            <button onClick={handleNewDoc}>Regenerate</button>
        </>
    )

}
