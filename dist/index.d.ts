import * as React from 'react';
interface IDriftProps {
    appId: string;
}
declare class Drift extends React.PureComponent<IDriftProps> {
    componentDidMount(): void;
    render(): null;
}
declare global {
    interface Window {
        drift: IDriftApi;
    }
}
interface IDriftApi {
    [index: string]: any;
}
declare const driftApi: () => IDriftApi;
export default Drift;
export { driftApi };
