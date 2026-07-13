import type { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Loader = ({children}:Props) => {
    return <p>{children}</p>
}