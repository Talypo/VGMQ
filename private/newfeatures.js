
// Dates here are in EDT times
const features =
[
    {
        date: new Date('September 7, 2020 10:30:00'),
        value: 'Individual songs may be excluded from gameplay. Try the "Report Song" button for bad links!'
    },
    {
        date: new Date('September 7, 2020 09:00:00'),
        value: 'Fixed criteria for restricted videos (probably).'
    },
    {
        date: new Date('September 6, 2020 21:30:00'),
        value: 'Added a video volume slider.'
    },
    {
        date: new Date('September 6, 2020 20:00:00'),
        value: 'Lobbies with spaces in the name now function properly.'
    },
    {
        date: new Date('September 6, 2020 19:00:00'),
        value: 'Songs that are shorter than 30 seconds will no longer be played in-game.'
    },
    {
        date: new Date('September 6, 2020 19:00:00'),
        value: 'Songs that are restricted will no longer be played in-game.'
    }
];

// Convert to UTC
for (feature of features)
{
    // Add four hours
    feature += (4*60*60*1000);
}

function getSince(inputDate)
{
    var output = [];

    for (feature of features)
    {
        if (inputDate == undefined || inputDate < feature.date)
        {
            output.push(feature.date.toString() + ': ' + feature.value);
        }
    }

    return output;
}

module.exports =
{
    getSince
};