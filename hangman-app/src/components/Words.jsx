var progammingLanguges = [
    'java',
    'javascript',
    'fortran',
    'python',
    'fortran',
    'go',
    'php',
    'ruby',
    'kotlin'
]

export const randomWord = () => {
    return progammingLanguges[Math.floor(Math.random() * progammingLanguges.length)]
}