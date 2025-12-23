import styles from './Heading.module.css'


export function Heading(props: React.PropsWithChildren<{attr?: number; attr2?: string}>) {
console.log(props);

    return <h1 className={styles.heading}>{props.children}</h1>
}

