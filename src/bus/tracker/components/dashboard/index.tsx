// Core
import { Link } from 'react-router-dom';

// styles
import styles from './styles/index.module.scss';

export const DashboardQuestions: React.FC = () => {
    return (
        <div className = { styles.dashboard }>
            <div className = { styles.navigation }>
                <h1>Как у тебя проходит день?</h1>
                <div className = { styles.items }>
                    <Link className = { `${styles.link} ${styles.category0}` } to = '/breakfast'>
                        <span className = { styles.title }>Добавить завтрак</span>
                        <span className = { styles.description }>Хороший завтра очень важен </span>
                    </Link>

                    <Link className = { `${styles.link} ${styles.category1}` } to = '/lunch'>
                        <span className = { styles.title }>Добавить обед</span>
                        <span className = { styles.description }>Успешные люди обедают</span>
                    </Link>

                    <Link className = { `${styles.link} ${styles.category2}` } to = '/dinner'>
                        <span className = { styles.title }>Добавить ужин</span>
                        <span className = { styles.description }>Лучше не ужинать вообще</span>
                    </Link>

                    <Link className = { `${styles.link} ${styles.category3}` } to = '/steps'>
                        <span className = { styles.title }>Добавить активность</span>
                        <span className = { styles.description }>Пешие прогулки это минимум</span>
                    </Link>

                    <Link className = { `${styles.link} ${styles.category4}` } to = '/fruits'>
                        <span className = { styles.title }>Добавить фрукты</span>
                        <span className = { styles.description }>Фрукты поднимают настроение</span>
                    </Link>

                    <Link className = { `${styles.link} ${styles.category5}` } to = '/vegetables'>
                        <span className = { styles.title }>Добавить овощи</span>
                        <span className = { styles.description }>Овощи очень важны</span>
                    </Link>

                    <Link className = { `${styles.link} ${styles.category6}` } to = '/junk'>
                        <span className = { styles.title }>Добавить фастфуд</span>
                        <span className = { styles.description }>Эта еда очень вредная</span>
                    </Link>

                    <Link className = { `${styles.link} ${styles.category7}` } to = '/water'>
                        <span className = { styles.title }>Добавить воду</span>
                        <span className = { styles.description }>Вода это жизнь</span>
                    </Link>

                    <Link className = { `${styles.link} ${styles.category8}` } to = '/sleep'>
                        <span className = { styles.title }>Добавить сон</span>
                        <span className = { styles.description }>Спать нужно всем</span>
                    </Link>

                    <Link className = { `${styles.link} ${styles.category9}` } to = '/coffee'>
                        <span className = { styles.title }>Добавить кофе</span>
                        <span className = { styles.description }>Можно и без него</span>
                    </Link>

                </div>
            </div>
        </div>
    );
};
