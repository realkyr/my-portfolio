import React, { ReactNode, ReactElement } from 'react';

type ShowThenProps = { children: ReactNode };
type ShowElseProps = { children: ReactNode };

type ShowProps = {
  when: boolean;
  children: [ReactElement<ShowThenProps>, ReactElement<ShowElseProps>?];
};

export const Show = ({ when, children }: ShowProps) => {
  const [thenContent, elseContent] = children;

  return <>{when ? thenContent : elseContent}</>;
};

Show.Then = ({ children }: ShowThenProps) => <>{children}</>;
Show.Else = ({ children }: ShowElseProps) => <>{children}</>;