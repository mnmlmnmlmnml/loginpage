import React from 'react'
import styles from './index.module.scss'
import svgFace from './facebook.svg'
import svgGit from './github.svg'
import svgGoogle from './google.svg'

const social = [
    {
        svg: svgGoogle,
        href: 'https://www.google.com/',
    },
    {
        svg: svgGit,
        href: 'https://git-scm.com/',
    },

    {
        svg: svgFace,
        href: 'https://ru-ru.facebook.com/',
    },
]

export function Social() {
    return (
        <div className={styles.social}>
            {social.map((item) => (
                <div key={item.href} className={styles.item}>
                    <button className={styles.button}>
                        <img className={styles.svg} src={item.svg} alt='icon' />
                    </button>
                </div>
            ))}
        </div>
    )
}
