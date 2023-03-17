import styles from './styles/index.module.scss';

export const CustomQuestionInput = ({ questions, type, placeholder }: IQuestionInputProps) => {
    return (
        <div className = { styles.question }>
            <h1>{ questions }</h1>
            <div className = { styles.inputRow }>
                <input type = { type } placeholder = { placeholder } />
            </div>
            <button className = { styles.sendAnswer }>Ответить</button>
        </div>
    );
};


interface IQuestionInputProps{
    questions: string,
    type: string,
    placeholder: string
}
