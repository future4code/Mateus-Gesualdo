import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear')
}

export const getProfile = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mateus/person')	
	dispatch(setProfile(response.data.profile))
}

const setProfile = profile => ({
	type: "SET_PROFILE",
	payload: { profile }
})