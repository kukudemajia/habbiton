import React, {Suspense, lazy, useContext, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {getHabits, saveHabits} from './storage';
import {getFormattedDate} from './helpers';
import ThemeProvider, {ThemeContext} from './themes';
import Header from './elements/Header/Header';
import './index.less';

const Habits = lazy(() => import('./routes/Habits'));
const Edit = lazy(() => import('./routes/Edit'));
const Statistic = lazy(() => import('./routes/Statistic'));

function App() {
    const {settings} = useContext(ThemeContext);
    const defaultHabit = {
        key: 0,
        title: 'Training',
        dateRange: null,
    };
    const initialItem = getHabits(defaultHabit);
    const [habits, setHabits] = useState(initialItem);
    const [currentDay, setCurrentDay] = useState(getFormattedDate());

    useEffect(() => {
        saveHabits(habits);
    }, [habits]);

    const updateHabits = (updatedItem, key) => {
        const editedHabits = key
            ? habits.slice(0).map((item) => (item.key === +key ? updatedItem : item))
            : [...habits, updatedItem];
        setHabits(editedHabits);
    };

    const wrapperTheme = {
        background: settings.background,
    };

    return (
        <>
            <Header />
            <div className="wrapper" style={wrapperTheme}>
                <Suspense fallback={<div>Loading…</div>}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Habits
                                    habits={habits}
                                    currentDay={currentDay}
                                    setCurrentDay={setCurrentDay}
                                />
                            )}
                        />

                        <Route
                            path="/add"
                            render={() => (
                                <Edit
                                    habits={habits}
                                    updateHabits={(item, habitId) => updateHabits(item, habitId)}
                                />
                            )}
                        />

                        <Route
                            path="/edit/:id"
                            render={() => (
                                <Edit
                                    habits={habits}
                                    updateHabits={(item, habitId) => updateHabits(item, habitId)}
                                />
                            )}
                        />

                        <Route path="/statistics" component={Statistic} />
                    </Switch>
                </Suspense>
            </div>
        </>
    );
}

ReactDOM.render(
    <Router>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Router>,
    document.getElementById('root'),
);
