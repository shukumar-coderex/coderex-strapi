const CommentFieldsFragment = `
fragment CommentFields on Comment {
    id
    date
    type
    databaseId
    approved
    content
    parentId
    parentDatabaseId
    author {
        node {
            avatar {
                url
            }
            name
        }
    }
}
`

export default CommentFieldsFragment
