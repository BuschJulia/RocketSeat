import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/Buschjulia.png" />
                    <div className={styles.authorInfo}>
                        <strong>Júlia Busch</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time tittle="11 de Maio de 2022 às 08:49h" datetime="2022-05-11 08:49:09">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p></p>
            </div>
        </article>
    )
}