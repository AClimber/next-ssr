import {ReactNode} from "react";

export const Container = ({children}: {children: ReactNode}): JSX.Element => {
  return (
      <div>
          {children}
      </div>
  )
}
