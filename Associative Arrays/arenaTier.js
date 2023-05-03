function arenaTier(data) {
  let gladiators = {};

  for (let line of data) {
    if (line === "Ave Cesar") {
      break;
    }
    if (!line.includes(" vs ")) {
      let [name, technique, skill] = line.split(" -> ");
      skill = Number(skill);
      if (!gladiators.hasOwnProperty(name)) {
        let gladiatorsInfo = {};
        gladiatorsInfo[technique] = skill;
        gladiators[name] = gladiatorsInfo;
      }
      if (
        !gladiators[name].hasOwnProperty(technique) ||
        (gladiators[name].hasOwnProperty(technique) &&
          gladiators[name][technique] < skill)
      ) {
        gladiators[name][technique] = skill;
      }
    }
    if (line.includes(" vs ")) {
      let [gladiator1, gladiator2] = line.split(" vs ");
      if (
        gladiators.hasOwnProperty(gladiator1) &&
        gladiators.hasOwnProperty(gladiator2)
      ) {
        let arrGladiator1 = Object.keys(gladiators[gladiator1]);
        let arrGladiator2 = Object.keys(gladiators[gladiator2]);
        for (let index = 0; index < arrGladiator1.length; index++) {
          let firstGladiatorTechnique = arrGladiator1[index];

          for (let j = 0; j < arrGladiator2.length; j++) {
            let secondGladiatorTechnique = arrGladiator2[j];
            if (
              firstGladiatorTechnique === secondGladiatorTechnique &&
              gladiators.hasOwnProperty(gladiator1) &&
              gladiators.hasOwnProperty(gladiator2)
            ) {
              if (
                gladiators[gladiator1][firstGladiatorTechnique] >
                gladiators[gladiator2][secondGladiatorTechnique]
              ) {
                delete gladiators[gladiator2];
                break;
              } else if (
                gladiators[gladiator1][firstGladiatorTechnique] <
                gladiators[gladiator2][secondGladiatorTechnique]
              ) {
                delete gladiators[gladiator1];
                break;
              }
            }
          }
        }
      }
    }
  }
  let sortedGladiators = new Set();
  for (let key in gladiators) {
    let name = key;
    let totalSkill = 0;
    for (
      let index = 0;
      index < Object.values(gladiators[name]).length;
      index++
    ) {
      totalSkill += Object.values(gladiators[name])[index];
    }
    let arr = [];
    arr.push(name, totalSkill);
    sortedGladiators.add(arr);
  }
  sortedGladiators = Array.from(sortedGladiators).sort((a, b) => {
    return b[1] - a[1] || a[0].localeCompare(b[0]);
  });
  for (let currentGladiator of sortedGladiators) {
    let gladiatorName = currentGladiator[0];
    let skill = currentGladiator[1];
    let sortedSkills = Object.entries(gladiators[gladiatorName]).sort(
      (a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0]);
      }
    );
    console.log(`${gladiatorName}: ${skill} skill`);
    for (let currentSkill of sortedSkills) {
      console.log(`- ${currentSkill[0]} <!> ${currentSkill[1]}`);
    }
  }
}
arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Kladius -> Heal -> 200",
  "Kladius -> Support -> 250",
  "Kladius -> Shield -> 250",
  "Peter vs Kladius",
  "Kladius vs Julius",
  "Kladius vs Maximilian",
  "Ave Cesar",
]);
