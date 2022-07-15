import styles from './avatar.module.css'

interface IAvatar {
    hasBorder: Boolean
    src: string
}

export function Avatar({hasBorder, src}: IAvatar): any{
    return(
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
        />
    )
}