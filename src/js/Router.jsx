/* eslint-disable react/no-children-prop, react/display-name */
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Overview from './containers/OverviewContainer';
import Settings from './containers/SettingsContainer';
import Chat from './views/Chat';

const Router = () => {
    return (
        <BrowserRouter>
            <Route
                render={({ location }) => {
                    return (
                        <>
                            <nav>
                                <ul>
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
                            <div
                                style={{ position: 'relative', height: '100%' }}
                            >
                                <TransitionGroup>
                                    <CSSTransition
                                        key={location.key}
                                        classNames="fade"
                                        timeout={500}
                                    >
                                        <Switch location={location}>
                                            <Route
                                                exact
                                                path="/"
                                                component={Overview}
                                            />
                                            <Route
                                                exact
                                                path="/chat"
                                                component={Chat}
                                            />
                                            <Route
                                                exact
                                                path="/settings"
                                                component={Settings}
                                            />
                                        </Switch>
                                    </CSSTransition>
                                </TransitionGroup>
                            </div>
                        </>
                    );
                }}
            />
        </BrowserRouter>
    );
};

export default Router;
