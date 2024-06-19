import axios from 'axios';
import https from 'https';
import Cookie from "js-cookie";

const agent = new https.Agent({  
  rejectUnauthorized: false
});

export function addAudio(url) {
    return axios.post("https://192.168.86.77/api/convert/", { url: url }, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Cookie.get("token")}`,
        },
        httpsAgent: agent
    });
}

export function listAudio() {
    return axios.get("https://192.168.86.77/api/user/audios/", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Cookie.get("token")}`,
        },
        httpsAgent: agent
    })
    .then((response) => {
        if (response.data.error) {
            throw new Error("List audio failed");
        }
        return response.data;
    });
}

export function getAudio(id) {
    return axios.get(`https://192.168.86.77/api/audio/${id}/`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Cookie.get("token")}`,
        },
        httpsAgent: agent
    })
    .then((response) => {
        if (response.data.error) {
            throw new Error("Get audio failed");
        }
        return response.data;
    });
}

export function editAudio(id, name, image) {
    return axios.patch(`https://192.168.86.77/api/audio/${id}/`, { name: name, image: image }, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Cookie.get("token")}`,
        },
        httpsAgent: agent
    })
    .then((response) => {
        if (response.data.error) {
            throw new Error("Edit audio failed");
        }
        return response.data;
    });
}

export function deleteAudio(id) {
    return axios.delete(`https://192.168.86.77/api/audio/${id}/`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Cookie.get("token")}`,
        },
        httpsAgent: agent
    })
    .then((response) => {
        if (response.data.error) {
            throw new Error("Delete audio failed");
        }
        return response.data;
    });
}

export function getAudioByName(name) {
    return axios.get(`https://192.168.86.77/api/audio/${name}/`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Cookie.get("token")}`,
        },
        httpsAgent: agent
    })
    .then((response) => {
        if (response.data.error) {
            throw new Error("Get audio by name failed");
        }
        return response.data;
    });
}