import styles from './styles/index.module.scss';

export const CustomQuestionCheckboxes = () => {
    return (
        <div className = { styles.question }>
            <h1>Сколько выпил воды?</h1>
            <div className = { styles.elements }>
                <button className = { styles.element } />
                <button className = { styles.element } />
                <button className = { styles.element } />
                <button className = { styles.element } />
                <button className = { styles.element } />
                <button className = { styles.element } />
                <button className = { styles.element } />
                <button className = { styles.element } />
                <button className = { styles.element } />
                <button className = { styles.element } />
                <button className = { styles.element } />
                <button className = { styles.element } />
            </div>
            <button className = { styles.sendAnswer }>Ответить</button>
        </div>
    );
};
