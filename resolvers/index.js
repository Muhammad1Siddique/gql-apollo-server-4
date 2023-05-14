export const resolvers = {
    Query: {
        apiStatus: (parent, args, context, info) => ({status: 'The API is working as expected!'})
    },
    Mutation: {
        createUser: (parent, args, context, info) => {
            const {input} = args // Destructure the input from the args
            const {name, email, password} = input // Destructure the name, email, and password from the input object
            return {name, email} // Return the name and email
        }
    }
}