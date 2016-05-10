export function loadAll() {
    return $.get('http://localhost:3001/api/article')
}

export function loadById({id}) {
    return $.get(`http://localhost:3001/api/article/${id}`)
}