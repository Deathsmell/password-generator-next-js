import { useState } from 'react'
import styles from '../styles/PasswordInput.module.css'
import CopyIcon from '../public/copy-solid.svg'

export default function PasswordInput(props) {
    let [copyStatusClass, setCopyStatusClass] = useState('');

    const copyInputValueHandler = async () => {
        try {
            await navigator.clipboard.writeText(props.value)
            setCopyStatusClass(styles['copy-successful'])
        } catch (e) {
            setCopyStatusClass.error(styles['copy-error'])
        }
        setTimeout(() => setCopyStatusClass(''), 1000)
    }

    return (
        <>
            <div className={`${styles['generated-password-container']} ${props.className}`}>
                <input value={props.value}
                       className={styles['generated-password']}
                       disabled/>
                <CopyIcon className={`${styles['copy-icon']} ${copyStatusClass}`}
                          onClick={copyInputValueHandler}/>
            </div>
        </>
    )
}
