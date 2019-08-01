import * as React from 'react';
import { NavigationState } from 'react-native-tab-view';
declare type Route = {
    key: string;
};
declare type State = NavigationState<Route>;
export default class CoverflowExample extends React.Component<{}, State> {
    static title: string;
    static backgroundColor: string;
    static appbarElevation: number;
    state: {
        index: number;
        routes: {
            key: string;
        }[];
    };
    private buildCoverFlowStyle;
    private handleIndexChange;
    private renderTabBar;
    private renderScene;
    render(): JSX.Element;
}
export {};
