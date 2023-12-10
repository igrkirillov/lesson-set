import Team from "../Team";

describe("team module", () => {
  test ("method add successfully", () => {
    const team = new Team();
    const tiger = {name: "Tiger"};
    team.add(tiger);
    expect(team).toEqual({
      members: new Set([tiger])
    });
  });
  test ("method add error", () => {
    const team = new Team();
    const tiger = {name: "Tiger"};
    team.add(tiger);
    expect(() => team.add(tiger)).toThrow(Error);
  });
  test ("method add null does not add anything", () => {
    const team = new Team();
    team.add(null);
    expect(team).toEqual({
      members: new Set()
    });
  });
  test ("method addAll successfully", () => {
    const team = new Team();
    const tiger = {name: "Tiger"};
    const owl = {name: "Owl"};
    team.addAll(tiger, owl);
    expect(team).toEqual({
      members: new Set([tiger, owl])
    });
  });
  test ("method addAll not error", () => {
    const team = new Team();
    const tiger = {name: "Tiger"};
    const owl = {name: "Owl"};
    team.addAll(tiger, owl);
    expect(() => team.addAll(tiger, owl)).not.toThrow(Error);
    expect(team).toEqual({
      members: new Set([tiger, owl])
    });
  });
  test ("method addAll null does not add anything", () => {
    const team = new Team();
    team.addAll(null);
    expect(team).toEqual({
      members: new Set()
    });
  });
  test ("method toArray", () => {
    const team = new Team();
    const tiger = {name: "Tiger"};
    const owl = {name: "Owl"};
    team.addAll(tiger, owl);
    expect(team.toArray()).toEqual([tiger, owl]);
  });
});