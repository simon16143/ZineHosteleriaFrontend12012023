export const appLoader = async ( ) => {
    const response = await fetch("http://zine-hosteleria-backend12012023.onrender.com")
    const data = await response.json()
    const result = data
    return result
}