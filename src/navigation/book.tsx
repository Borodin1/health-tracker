// Components
import { Dashboard } from '../pages';

const base = '/';

export const book = Object.freeze({
    root: {
        url:  `${base}`,
        page: Dashboard,
    },
    login: {
        url:  `${base}login`,
        page: () => <h1>Login</h1>,
    },
    registration: {
        url:  `${base}registration`,
        page: () => <h1>Registration</h1>,
    },
    profile: {
        url:  `${base}profile`,
        page: () => <h1>Profile</h1>,
    },
    breakfast: {
        url:  `${base}breakfast`,
        page: () => <h1>Breakfast</h1>,
    },
    coffee: {
        url:  `${base}coffee`,
        page: () => <h1>Coffee</h1>,
    },
    dinner: {
        url:  `${base}dinner`,
        page: () => <h1>Dinner</h1>,
    },
    fruits: {
        url:  `${base}fruits`,
        page: () => <h1>Fruits</h1>,
    },
    junk: {
        url:  `${base}junk`,
        page: () => <h1>Junk</h1>,
    },
    lunch: {
        url:  `${base}lunch`,
        page: () => <h1>Lunch</h1>,
    },
    sleep: {
        url:  `${base}sleep`,
        page: () => <h1>Sleep</h1>,
    },
    steps: {
        url:  `${base}steps`,
        page: () => <h1>Steps</h1>,
    },
    vegetables: {
        url:  `${base}vegetables`,
        page: () => <h1>Vegetables</h1>,
    },
    water: {
        url:  `${base}water`,
        page: () => <h1>Water</h1>,
    },
});

export type BookType = typeof book;
