function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'member',
    default: 'skills',
    label: 'Skills',
    description: 'Skills',
    fields: [
      {
        name: 'name',
        type: 'string',
        label: 'Name',
        description: 'Name',
        required: true,
        default: '',
      },
      {
        name: 'level',
        type: 'string',
        label: 'Level',
        description: 'Level',
        required: true,
        default: '',
      },
    ],
  };
}