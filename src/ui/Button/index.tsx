import React from 'react'
import styles from './index.module.scss'

interface Props {
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
