import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
      <aside className={styles.sidebar}>
        <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?%C2%A1xlib=rb-1.2.1&ixid=MnwxM%5DA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        />
      
      <div className={styles.profile}>
        <strong>Diego Fernandes</strong>
        <span>Web Developer</span>

        <footer>
            <a href="#">
                Editar seu perfil
            </a>
        </footer>

      </div>
      </aside>
    );
}