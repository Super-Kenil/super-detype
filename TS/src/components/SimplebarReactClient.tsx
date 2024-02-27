'use client'
import { type ReactNode } from 'react'
import SimpleBar, { type Props } from 'simplebar-react'
import type SimpleBarCore from 'simplebar-core'

type SimplebarReactClientProps = React.ForwardRefExoticComponent<Props & React.RefAttributes<SimpleBarCore | null>>['defaultProps'] & {
  children: ReactNode
}

const SimplebarReactClient = ({ children, ...options }: SimplebarReactClientProps) => {
  return <SimpleBar {...options}>{children}</SimpleBar>
}

export default SimplebarReactClient
