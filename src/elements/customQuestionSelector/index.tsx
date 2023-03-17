import styles from './styles/index.module.scss';

export const CustomQuestionSelector = ({
    question, answer1, answer2, answer3,
}: IQuestionSelectorProps) => {
    return (
        <div className = { styles.question }>
            <h1>{ question }</h1>
            <div className = { styles.answers }>
                <span className = { styles.answer }>{ answer1 }</span>
                <span className = { styles.answer }>{ answer2 }</span>
                { answer3 ? <span className = { styles.answer }>{ answer3 }</span> : null }
            </div>
            <button className = { styles.sendAnswer }>Ответить</button>
        </div>
    );
};


interface IQuestionSelectorProps{
    question: string,
    answer1: string,
    answer2: string,
    answer3?: string,
}
