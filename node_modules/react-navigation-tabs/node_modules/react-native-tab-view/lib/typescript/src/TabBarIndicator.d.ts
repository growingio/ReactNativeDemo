import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Route, SceneRendererProps, NavigationState } from './types';
export declare type Props<T extends Route> = SceneRendererProps & {
    navigationState: NavigationState<T>;
    width: number;
    style?: StyleProp<ViewStyle>;
};
export default class TabBarIndicator<T extends Route> extends React.Component<Props<T>> {
    private getTranslateX;
    render(): JSX.Element;
}
