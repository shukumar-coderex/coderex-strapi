import { gql } from '@apollo/client';

export const SUBMIT_CONTACT_FORM = gql`
 query SUBMIT_CONTACT_FORM( $email: String, $after: String, $query: String ) {
    submitForm(input: {formId: 1, data: [
        {id: 1, value: "Julius"}, 
        {id: 2, value: "julius@test.com"}, 
        {id: 3, value: "Hello there"}
    ]}) {
        errors {
            fieldId
            message
            slug
        }
        message
        success
    }
 }
`;