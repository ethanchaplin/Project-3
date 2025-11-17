// place files you want to import through the `$lib` alias in this folder.
export const CLASSES = [
    {
        title: 'Python Programming',
        id: 'cs2023',
        subject: 'CS',
        number: 2023,
        college: 'CEAS',
        credits: 3,
        prereqs: ['CS1001', 'CS2001'],
        description: "",
        sections: [
            {
                id: 1,
                professor: 'Ken Johnson',
                days: ['M', 'W', 'F'],
                start: '10:00',
                end: '11:00',
                building: 'Mantei',
                room: '101'
            },
            {
                id: 2,
                professor: 'Sara Lee',
                days: ['T', 'Th'],
                start: '14:00',
                end: '15:30',
                building: 'Mantei',
                room: '202'
            }
        ]
    }
]