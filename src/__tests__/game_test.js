import Team from '../game';

test('Проерка добавления персонажа в команду', () => {
  const expectedTeam = {"members": Set ["bob"]};
  const currentTeam = new Team();
  currentTeam.add('bob');
  expect(expectedTeam).toEqual(currentTeam);
});


//expect(bowman).toThrowError();