import React, { useContext } from "react";
import { WorkspaceList } from "../Components";
import { Link } from "react-router-dom";
import workspaces from "../data/workspacesData";
import { WorkspaceContext } from "../Context/WorkspaceContext";


const HomeScreen = () => {
    //Quiero obtener a valor
    const workspace_context_values = useContext(WorkspaceContext) //Me devolvera un objeto con el valor de mi contexto
    console.log(workspace_context_values)
    const handleSubmit = (e) =>{
        e.preventDefault()
        workspace_context_values.createWorkspace({workspace_name: 'Nuevo workspace', workspace_description: 'Descripcion del nuevo workspace'})
    }

    return (
        <div>
			{/* Hace lo mismo que el <a></a> */}
			<Link to={'/estados'}>Ir a estados</Link>
			<br/>
			<Link to={'/formularios'}>Ir a formularios</Link>
            <WorkspaceList workspaces={workspaces}/>
        </div>
    )
}


export default  HomeScreen