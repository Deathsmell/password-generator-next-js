import generator from 'generate-password'
import Head from 'next/head'
import Image from 'next/image'
import PasswordInput from '../components/password-input'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const DEFAULT_PASSWORD_LENGTH = 6;

export default function Home() {
    const [password, setPassword] = useState(null);
    const [isWithNumbers, setIsWithNumbers] = useState(false);
    const [passwordLenght, setPasswordLenght] = useState(DEFAULT_PASSWORD_LENGTH);

    const options = (function(start, end) {
        const result = [];
        while (start <= end) {
            result.push(start)
            start += 1;
        }
        return result
    })(1, 20)

    const generatePasswordHandler = () => {
        const newPasword = generator.generate({
            length: passwordLenght,
            numbers: isWithNumbers,
        });
        setPassword(newPasword);
    }

    const changeUseNumberHandler = (event) => {
        setIsWithNumbers(event.target.checked)
    }

    const changePaswordLenghtHandler = (event) => {
        setPasswordLenght(event.target.value)
    }

    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Password generator</title>
                    <meta name="description" content="Password generator demo for test task"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <main className={styles.main}>
                    <select className={styles['password-length-selector']}
                            defaultValue={passwordLenght}
                            onChange={changePaswordLenghtHandler}>
                        {
                            options.map(value => {
                                return (
                                    <option key={value}
                                            value={value}>
                                        {value}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <label className={styles.checkbox}>
                        With numbers
                        <input type="checkbox" onInput={changeUseNumberHandler}/>
                        <span className={styles.checkmark}></span>
                    </label>
                    <button className={styles['generate-btn']}
                            onClick={generatePasswordHandler}>
                        Generate
                    </button>
                    {
                        password && <PasswordInput value={password}
                                                   className={styles['generated-password']}/>
                    }
                </main>
            </div>
        </>
    )
}
