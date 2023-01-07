
exports.handler = async (event) => {
    try {
        const { name } = JSON.parse(event.body)
        const greeting = `Hello ${name}`
        return {
            statusCode: 200,
            body: JSON.stringify(greeting)
        }
    } catch (error) {
        console.log('error occured ', error)

        return {
            statusCode: 400,
            body: JSON.stringify(error)
        }
    }
}