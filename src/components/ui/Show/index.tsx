//
// this is not the best way since it need to render both Show.Then and Show.Else
// before conditionally render the correct one
// just use <Show when={condition}><div></div></Show> is better
// also it's more readable,
// but it will be not implemented in this project
//

import React, { ReactNode, ReactElement } from 'react'

type ShowThenProps = { children: ReactNode }
type ShowElseProps = { children: ReactNode }

type ShowProps = {
  when: boolean | undefined | null
  children: [ReactElement<ShowThenProps>, ReactElement<ShowElseProps>?]
}

export const Show = ({ when, children }: ShowProps) => {
  const [thenContent, elseContent] = children

  return <>{when ? thenContent : elseContent}</>
}

Show.Then = ({ children }: ShowThenProps) => <>{children}</>
Show.Else = ({ children }: ShowElseProps) => <>{children}</>
