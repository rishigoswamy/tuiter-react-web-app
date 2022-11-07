import ProfileData from '../data/profile.json'

const profile = (state = ProfileData, action) => {
    switch (action.type) {
        case 'change-profile':
            console.log(action);
            const newProfile = {
                ...state, ...action.profileChange,
            };
            console.log(newProfile);
            return newProfile;

        default:
            return state;
    }
}

export default profile;