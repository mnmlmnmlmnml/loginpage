import React, { useState } from 'react'
import type { FormEvent } from 'react'
import { Input, Link, Button, Social } from '../../ui'
import styles from './Form.module.scss'

export function Form() {
    const [value, setValue] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        setValue('')
        setPassword('')
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
        if (!e.target.value) {
            setErrors('Введите данные')
        } else {
            setErrors('')
        }
    }
    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
        if (e.target.name.length < 3 || e.target.name.length > 8) {
            setErrors('Пароль должен быть длинне 3  и меньше 8')
        }
        if (!e.target.value) {
            setErrors('Введите данные')
        } else {
            setErrors('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.wrapper}>
            <div className={styles.form}>
                <h3 className={styles.text}>Your logo</h3>
                <h2 className={styles.title}>Login</h2>
                {errors && <span className={styles.error}>{errors}</span>}
                <Input
                    name='email'
                    value={value}
                    onChange={(e) => handleChange(e)}
                    type='email'
                    label='Email'
                    placeholder='username@gmail.com'
                />
                {errors && <span className={styles.error}>{errors}</span>}
                <Input
                    name={password}
                    value={password}
                    onChange={(e) => handlePassword(e)}
                    type='password'
                    label='Password'
                    placeholder='Password'
                />
                <Link text='Forgot Password?' href='.' />
                <Button type='button' label='Sign in' />
                <span className={styles.desc}>or continue with</span>
                <Social />
                <span className={styles.desc}>
                    Don’t have an account yet?
                    <a href='3 ' className={styles.link}>
                        &nbsp;Register for free
                    </a>
                </span>
            </div>
        </form>
    )
}
