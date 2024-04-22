// import {useEffect, useState} from "react";
import useSWR from 'swr'
// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())

function useDog() {
    const { data, error, isLoading, mutate } = useSWR(`https://dog.ceo/api/breeds/image/random`, fetcher)

    return {
        image: data?.message || null,
        error,
        isLoading,
        mutate
    }
}
export const DogSWR = () => {
    const { image, error, isLoading, mutate } = useDog();

    const handleNewDoc = async () => {
        mutate()
    }
    if (isLoading) return <h1>Loadging...</h1>
    if (error) return <h1>Errors...</h1>
    if (!image) return <h1>No doc yet</h1>

    return (
        <>
            <h2>Dog SWR</h2>
            <img src={image} alt="docs" height="400"/>
            <br/>
            <button onClick={handleNewDoc}>Regenerate SWR</button>
        </>
    )

}
