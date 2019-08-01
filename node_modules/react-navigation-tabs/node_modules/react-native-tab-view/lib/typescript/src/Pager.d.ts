import * as React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { Layout, NavigationState, Route, PagerCommonProps, EventEmitterProps } from './types';
declare type Props<T extends Route> = PagerCommonProps & {
    onIndexChange: (index: number) => void;
    navigationState: NavigationState<T>;
    layout: Layout;
    removeClippedSubviews?: boolean;
    children: (props: EventEmitterProps & {
        position: Animated.Node<number>;
        render: (children: React.ReactNode) => React.ReactNode;
        jumpTo: (key: string) => void;
    }) => React.ReactNode;
    gestureHandlerProps: React.ComponentProps<typeof PanGestureHandler>;
};
export default class Pager<T extends Route> extends React.Component<Props<T>> {
    static defaultProps: {
        swipeVelocityThreshold: number;
    };
    componentDidUpdate(prevProps: Props<T>): void;
    private clock;
    private velocityX;
    private gestureX;
    private gestureState;
    private offsetX;
    private progress;
    private index;
    private nextIndex;
    private lastEnteredIndex;
    private isSwiping;
    private isSwipeGesture;
    private routesLength;
    private layoutWidth;
    private swipeDistanceThreshold;
    private swipeVelocityThreshold;
    private position;
    private springConfig;
    private timingConfig;
    private initialVelocityForSpring;
    private currentIndexValue;
    private pendingIndexValue;
    private enterListeners;
    private jumpToIndex;
    private jumpTo;
    private addListener;
    private removeListener;
    private handleEnteredIndexChange;
    private transitionTo;
    private handleGestureEvent;
    private translateX;
    private getTranslateX;
    render(): React.ReactNode;
}
export {};
