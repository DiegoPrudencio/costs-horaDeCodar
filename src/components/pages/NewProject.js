import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
    
    return (
    
        <div className={styles.newProject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para adicionar serviços</p>
            <ProjectForm btnText="Criar projeto"/>
        </div>

    )

}

export default NewProject