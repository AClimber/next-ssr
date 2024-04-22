import {Widget} from './App.tsx'
import {Dog} from './Dog.tsx'
import {DogServer} from './DogServer.tsx'
import {DogSWR} from './DogSWR.tsx'
import {Container} from './Container.tsx'
import './index.css'
import {CountriesServer, Countries} from "./Countries";

export const components = {
    'container': Container,
    'widget': Widget,
    'dog': Dog,
    'dogswr': DogSWR,
    'dogserver': DogServer,
    'countries': Countries,
    'countriesserver': CountriesServer,
}
