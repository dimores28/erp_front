import axios from 'axios'
const API_URL = "http://localhost:88/"

export async function loadClient() {
    let clients = [];
    await axios.get(`${API_URL}client`)
    .then(response => {
        clients = response.data;
    });
    return clients;
}

export async function loadProject() {
    let projects = [];
    await axios.get(`${API_URL}project`)
    .then(response => {
        projects = response.data;
    });

    return projects;
}

export async function loadProjectById(id) {
    let projects = [];
    const paramsData = {
        ID_DEP_CLIENT: id
    };
    console.log(paramsData);
    await axios.get(`${API_URL}project`, {params:paramsData})
    .then(response => {
        projects = response.data;
    });

    return projects;
}

export async function AddProject(id_client, id_project) {
    const postData = {
        ID_DEP_CLIENT: id_client, 
        ID_PROJECT: id_project
    };
    console.log(postData);
    await axios.post(`${API_URL}project`, postData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
      });
}