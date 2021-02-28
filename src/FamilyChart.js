import React from 'react';
import FamilyTree from '@mui-treasury/components/chart/family';
import Box from '@material-ui/core/Box';

const FamilyChart = () => {
  return (
    <Box>
      <FamilyTree stretchIndexes={[2]} tree={getData()} />
    </Box>
  );
};
const getData = () => ({
  displayName: 'Fire Ball',
  spouse: { displayName: 'Flame Wall' },
  children: [
    {
      displayName: 'Heat Wave',
      spouse: { displayName: 'Alessa' },
      children: [{ displayName: 'Alexander' }, { displayName: 'Bryna' }],
    },
    {
      displayName: 'Celina',
      spouse: [
        {
          displayName: 'Dayna',
          spouse: { displayName: 'Josephe' },
          spouse: { displayName: 'Adom' },
          children: [
            {
              displayName: 'Zandra',
              children: [{ displayName: 'Anuj' }],
            },
            { displayName: 'Damian' },
            {
              displayName: 'Mary',
              spouse: { displayName: 'Celina' },
              children: [{ displayName: 'Benita' }],
            },
          ],
        },
        {
          displayName: 'Claude',
          children: [
            { displayName: 'Ryanne' },
            { displayName: 'Theodora', spouse: { displayName: 'Cristina' } },
          ],
        },
        { displayName: 'Zlatan' },
      ],
    },
    { displayName: 'Geraldine' },
  ],
});

export default FamilyChart;