
import { gql } from "@apollo/client";

const ADD_CONTACT = gql`
    mutation ADD_CONTACT ( $input: SubmitFormInput!) {
        submitForm(input: $input) {
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

export default ADD_CONTACT;
