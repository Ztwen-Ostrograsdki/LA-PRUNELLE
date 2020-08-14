const pupils_states = {
	pupilsArray : [], //With her classes formatted
    secondaryPupils : {},
    targetPupil : {},
    targetPupilName: '',
    targetPupilLastName: '',
    targetPupilFirstName: '',
    targetPupilClasseFMT: {},
    targetPupilBirthFMT: '',
    age: '',

    newPupil: {
        name: '',
        classe_id: '',
        birth: '',
        sexe: '',
        level: 'secondary',
        month: '',
        year: (new Date).getFullYear(),
    },

    editedPupil : {},
    editedPupilSubjects: [],
    primaryPupils : {},
    pupils: {},
    pupilsAll: [], 
    pupilsBlockedsAll: {},
    pupilsBlockeds: {},
    PSBlockeds: [],
    PPBlockeds: [],
    alertPupilsSearch: 'Tous les apprenants',

    marks: {
        first: {},
        second: {},
        third: {},
    }
}

export default pupils_states