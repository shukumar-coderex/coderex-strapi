import {addNinjaContact} from '../../src/utils/api';


export default async function contact( req, res ) {
	const { formId, contactData } = req?.body ?? {};
	const data = await addNinjaContact( { formId, contactData } );
	// Only sending a message that successful, because we dont want to send JWT to client.
	res.status( 200 ).json( { success: Boolean( data?.submitForm?.success )} );
}
