import Cookie from "js-cookie";

export function addAudio(url) {
    return fetch("https://192.168.86.77/api/convert/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Cookie.get("token")}`,
        },
        body: JSON.stringify({ url: url }),
    })
}

export function listAudio() {
    return fetch("https://192.168.86.77/api/user/audios/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Cookie.get("token")}`,
        },
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.error) {
                throw new Error("List audio failed");
            }
            return response;
        });
}

export function getAudio(id) {
    return fetch(`https://192.168.86.77/api/audio/${id}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Cookie.get("token")}`,
        },
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.error) {
                throw new Error("Get audio failed");
            }
            return response;
        });
}

export function editAudio(id, name, image) {
    return fetch(`https://192.168.86.77/api/audio/${id}/`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Cookie.get("token")}`,
        },
        body: JSON.stringify({ name: name, image: image }),
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.error) {
                throw new Error("Edit audio failed");
            }
            return response;
        });

    }

export function deleteAudio(id) {
    return fetch(`https://192.168.86.77/api/audio/${id}/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Cookie.get("token")}`,
        },
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.error) {
                throw new Error("Delete audio failed");
            }
            return response;
        });
}

export function getAudioByName(name) {
    return fetch(`https://192.168.86.77/api/audio/${name}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Cookie.get("token")}`,
        },
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.error) {
                throw new Error("Get audio by name failed");
            }
            return response;
        });
}
    