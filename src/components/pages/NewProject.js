import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import {useNavigate} from 'react-router-dom'

function NewProject() {

    const navigate = useNavigate()
    
    function createPost(project) {
        // initalize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        }) 
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/projects', { state: { message: 'Projeto enviado com sucesso!' }})
            })
            .catch((err) => console.log(err))

    }

    return (
    
        <div className={styles.newProject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para adicionar serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>

    )

}

export default NewProject