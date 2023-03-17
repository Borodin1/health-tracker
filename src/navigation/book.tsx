// Components
import {
    Dashboard, DinnerPage, FruitsPage, JunkPage, LoginPage, LunchPage, SignUpPage, SleepPage, VegetablesPage, WaterPage,
} from '../pages';
import { BreakfastPage } from '../pages/breakfastPage';
import { CoffeePage } from '../pages/coffeePage';
import { StepsPage } from '../pages/stepsPage';

const base = '/';

export const book = Object.freeze({
    root: {
        url:  `${base}`,
        page: Dashboard,
    },
    login: {
        url:  `${base}login`,
        page: LoginPage,
    },
    registration: {
        url:  `${base}registration`,
        page: SignUpPage,
    },
    profile: {
        url:  `${base}profile`,
        page: () => <h1>Profile</h1>,
    },
    breakfast: {
        url:  `${base}breakfast`,
        page: BreakfastPage,
    },
    coffee: {
        url:  `${base}coffee`,
        page: CoffeePage,
    },
    dinner: {
        url:  `${base}dinner`,
        page: DinnerPage,
    },
    fruits: {
        url:  `${base}fruits`,
        page: FruitsPage,
    },
    junk: {
        url:  `${base}junk`,
        page: JunkPage,
    },
    lunch: {
        url:  `${base}lunch`,
        page: LunchPage,
    },
    sleep: {
        url:  `${base}sleep`,
        page: SleepPage,
    },
    steps: {
        url:  `${base}steps`,
        page: StepsPage,
    },
    vegetables: {
        url:  `${base}vegetables`,
        page: VegetablesPage,
    },
    water: {
        url:  `${base}water`,
        page: WaterPage,
    },
});

export type BookType = typeof book;
