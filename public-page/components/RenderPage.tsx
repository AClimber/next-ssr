"use client"
import { components } from 'ext-components';
import { Dummy } from './Dummy';
const COMPONENTS = {
    ...components,
    Dummy
}
export const RenderPage = ({ data }) => {
    const ComponentsNode = COMPONENTS[data.name] || Dummy;
    console.log(components)
    console.log(data.name, ComponentsNode)
    return (
        <ComponentsNode>
            {
                (data.children || []).map((child, index) => (
                    <RenderPage data={child} key={index} />
                ))
            }
        </ComponentsNode>
    )
}
