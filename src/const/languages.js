export const LANGUAGES = [
    'JavaScript',
    'C++',
    'Ruby',
    'PHP',
    'GO',
]

export const getLanguages = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(LANGUAGES);
        }, 1000)
    })
}