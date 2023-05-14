export const typeDefs = `
    #graphql

    type Query{
        apiStatus: ApiStatus
    }

    type ApiStatus{
        status: String
    }

    type Mutation{
        createUser(input: UserInput): User
    }

    input UserInput{
        name: String
        email: String
        password: String
    }

    type User{
        name: String
        email: String
    }

`