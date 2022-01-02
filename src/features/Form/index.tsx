import React from 'react'
import { Input, Link, Button, Social } from '../../ui'
import styles from './Form.module.scss'

export function Form() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <h3 className={styles.text}>Your logo</h3>
                <h2 className={styles.title}>Login</h2>
                <Input
                    type='email'
                    label='Email'
                    placeholder='username@gmail.com'
                />
                <Input
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
        </div>
    )
}
