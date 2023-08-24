import client from '../apollo/client';
import {GET_PAGE_BY_ID} from '../queries/pages/get-page';
import LOGIN from '../mutations/login';
import ADD_CONTACT from '../mutations/contact';
import { v4 } from 'uuid';

export async function getPreviewPage( id ) {

	const { data, errors } = await client.query( {
		query: GET_PAGE_BY_ID,
		variables: {
			id: Number( id ),
		},
	} );

	return data || {};
}

export async function loginUser( {username, password} ) {

	const { data, errors } = await client.query( {
		query: LOGIN,
		variables: {
			input: {
				clientMutationId: v4(), // Generate a unique id
				username: username || '',
				password: password || '',
			},
		},
	} );

	return data || {};
}


export async function addNinjaContact( {formId, contactData } ) {
	const { data, errors } = await client.query( {
		query: ADD_CONTACT,
		variables: {
			input: {
				clientMutationId: v4(), // Generate a unique id
				formId: formId,
				data: contactData
			},
		},
	} );

	return data || {};
}

