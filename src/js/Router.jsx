/* eslint-disable react/no-children-prop, react/display-name */
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { css } from '@emotion/core';

import Overview from './containers/OverviewContainer';
import Settings from './containers/SettingsContainer';
import Chat from './views/Chat';

import {
    contentTextStyles,
    defaultTransitionStyle,
    transitionStyles,
    transitionDuration,
} from './styles';

const Router = () => {
    return (
        <BrowserRouter>
            <Route
                render={({ location }) => {
                    return (
                        <div css={contentTextStyles}>
                            <nav>
                                <ul
                                    css={css`
                                        margin: 0;
                                        padding: 0;
                                    `}
                                >
                                    <li>
                                        <Link to="/">Overview</Link>
                                    </li>
                                    <li>
                                        <Link to="/chat">Chat</Link>
                                    </li>
                                    <li>
                                        <Link to="/settings">Settings</Link>
                                    </li>
                                </ul>
                            </nav>
                            <TransitionGroup>
                                <Transition
                                    key={location.key}
                                    timeout={transitionDuration}
                                    appear
                                >
                                    {state => {
                                        return (
                                            <div
                                                style={{
                                                    ...defaultTransitionStyle,
                                                    ...transitionStyles[state],
                                                }}
                                            >
                                                <Switch location={location}>
                                                    <Route
                                                        exact
                                                        path="/"
                                                        component={Overview}
                                                    />
                                                    <Route
                                                        path="/chat"
                                                        component={Chat}
                                                    />
                                                    <Route
                                                        path="/settings"
                                                        component={Settings}
                                                    />
                                                </Switch>
                                            </div>
                                        );
                                    }}
                                </Transition>
                            </TransitionGroup>
                        </div>
                    );
                }}
            />
        </BrowserRouter>
    );
};

export default Router;
