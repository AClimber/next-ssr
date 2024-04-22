import {useEffect, useState} from "react";

type CountryResponse = {
    name: {
        common: string,
        official: string,
    }
}

type Country = {
    common: string,
    official: string,
}

const fetcher = <T,>(...args: Parameters<typeof fetch>): Promise<T> => {
    return fetch(...args).then(res => res.json()) as Promise<T>;
};

const getDataTable = async (): Promise<Country[]> => {
    try {
        console.log()
        const res = await fetcher<CountryResponse[]>('https://restcountries.com/v3.1/all?fields=name')
        return res.map((item) => item.name).slice(0, 10);
    } catch (e) {
        console.error(e)
        return [];
    }
}

export const components = {  }

export const CountriesServer = async () => {
    const data = await getDataTable();
    return (
        <Countries initialValue={data}/>
    )
}
export const Countries = (props: {initialValue?: Country[]}) => {
    const [countries, setCountries] = useState(props.initialValue)
    const [isClient, setIsClient] = useState(false);
console.log('isClient', isClient)
    useEffect(() => {
        setIsClient(true);
    }, [])

    useEffect(() => {
        if (!props.initialValue) {
            refetchData();
        }
    }, [])

    const refetchData = async () => {
        const data = await getDataTable();
        setCountries(data);
    }
    if (!countries?.length) return <h1>No data yet</h1>

    return (
        <>
            {
                isClient ? <p>This is render on the client side</p> : <p>This is render on the server side</p>
            }
            <h2>Countries</h2>
            <ul>
                {countries.map((country, index) => (
                    <li key={index}>Name: {country.official}</li>
                ))}
            </ul>
            <button onClick={refetchData}>Refetch Countries</button>
        </>
    )

}
