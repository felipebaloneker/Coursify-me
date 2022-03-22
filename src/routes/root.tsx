import * as React from 'react';

export const navigationRef:any = React.createRef();
type Props={
    name:string,
    params:any
}
export function navigate({name, params}:Props) {
  navigationRef.current?.navigate(name, params);
}