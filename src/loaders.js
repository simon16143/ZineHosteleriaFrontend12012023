export const appLoader = async ( ) => {
    const response = await fetch("https://zine-hosteleria-backend12012023.onrender.com")
    const data = await response.json()
    const result = data
    console.log(result)
    return result
}