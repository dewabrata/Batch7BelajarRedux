

export function setUsername(name) {
    return { type: "SET_USERNAME", payload: name }
}

export function setNilai(nilai) {
    return { type: "SET_NILAI", payload: nilai }
}

export function setTinggi(tinggi) {
    return { type: "SET_TINGGI", payload: tinggi }
}

export function getAPI(json) {
    return {
        type: "SET_API_DATA",
        payload: json
    }
}