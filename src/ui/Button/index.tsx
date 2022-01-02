import React, { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    type?: 'button' | 'reset' | 'submit'
}

export function Button({ label, type = 'button' }: Props) {
    return (
        <button className={styles.button} type={type}>
            {label}
        </button>
    )
}
