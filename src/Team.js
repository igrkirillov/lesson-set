export default class Team {

  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!character) {
      // прерываем работу метода
      return;
    }
    if (Array.from(this.members.keys()).includes(character)) {
      throw new Error(`Персонаж ${character} уже есть в команде!`);
    }
    this.members.add(character);
  }

  addAll(...characters) {
    if (characters) {
      characters.forEach(character => {
        if (character) {
          this.members.add(character);
        }
      })
    }
  }

  toArray() {
    return Array.from(this.members.values());
  }
}