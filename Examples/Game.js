function solve(kingdomArr, battleArr) {
  //  Fill
  let kingdomsMap = new Map();

  for (const kingdomObj of kingdomArr) {
    let kingdom = kingdomObj["kingdom"];
    let general = kingdomObj["general"];
    let army = kingdomObj["army"];

    if (!kingdomsMap.has(kingdom)) {
      kingdomsMap.set(kingdom, new Map());
    }

    let generalMap = kingdomsMap.get(kingdom);

    if (!generalMap.has(general)) {
      generalMap.set(general, { armyCount: army, wins: 0, losses: 0 });
    } else {
      let generalObj = generalMap.get(general);
      generalObj["armyCount"] += army;
    }
  }
  // Fight
  for (const row of battleArr) {
    let [attackingKingdom, attackingGen, defendingKingdom, defendingGen] = row;

    if (attackingKingdom !== defendingKingdom) {
      let attackArmy = kingdomsMap.get(attackingKingdom).get(attackingGen);
      let defendingArmy = kingdomsMap.get(defendingKingdom).get(defendingGen);

      if (attackArmy["armyCount"] > defendingArmy["armyCount"]) {
        attackArmy["wins"]++;
        defendingArmy["losses"]++;
        attackArmy["armyCount"] = Math.floor(attackArmy["armyCount"] * 1.1);
        defendingArmy["armyCount"] = Math.floor(
          defendingArmy["armyCount"] * 0.9
        );
      }
      if (attackArmy["armyCount"] < defendingArmy["armyCount"]) {
        attackArmy["losses"]++;
        defendingArmy["wins"]++;
        attackArmy["armyCount"] = Math.floor(attackArmy["armyCount"] * 0.9);
        defendingArmy["armyCount"] = Math.floor(
          defendingArmy["armyCount"] * 1.1
        );
      }

      if (attackArmy["armyCount"] === defendingArmy["armyCount"]) {
        continue;
      }
    } else {
      continue;
    }
  }
  // Sort
  let sortedKingdom = [...kingdomsMap.entries()].sort(sortKingdoms)[0];
  console.log(`Winner is: ${sortedKingdom[0]}`);
  let sortedGenerals = [...sortedKingdom[1].entries()].sort((a, b) => {
    let aCount = a[1]["armyCount"];
    let bCount = b[1]["armyCount"];

    return bCount - aCount;
  });
  for (const [genName,genObj] of sortedGenerals) {
       console.log(`/\\general: ${genName}`);
       console.log(`---army: ${genObj["armyCount"]}`);
       console.log(`---wins: ${genObj["wins"]}`);
       console.log(`---losses: ${genObj["losses"]}`);


  }

  function sortKingdoms(a, b) {
    let [kingdomA, generalA] = a;
    let [kingdomB, generalB] = b;

    kingdomAWins = [...generalA.entries()]
      .map(kA => kA[1].wins)
      .reduce((i, j) => i + j);

    kingdomBWins = [...generalB.entries()]
      .map(kB => kB[1].wins)
      .reduce((i, j) => i + j);

    let sortWins = kingdomBWins - kingdomAWins;
    if (sortWins === 0) {
      kingdomALosses = [...generalA.entries()]
        .map(kA => kA[1].losses)
        .reduce((i, j) => i + j);
      kingdomBLosses = [...generalB.entries()]
        .map(kB => kB[1].losses)
        .reduce((i, j) => i + j);

      let sortLosses = kingdomALosses - kingdomBLosses;
      if (sortLosses === 0) {
        return kingdomA.localCompare(kingdomB);
      }
      return sortLosses;
    }

    return sortWins;
  }
}

solve(
  [
    { kingdom: "Maiden Way", general: "Merek", army: 5000 },
    { kingdom: "Stonegate", general: "Ulric", army: 4900 },
    { kingdom: "Stonegate", general: "Doran", army: 70000 },
    { kingdom: "YorkenShire", general: "Quinn", army: 0 },
    { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
    { kingdom: "Maiden Way", general: "Berinon", army: 100000 }
  ],
  [
    ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Stonegate", "Ulric", "Stonegate", "Doran"],
    ["Stonegate", "Doran", "Maiden Way", "Merek"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ["Maiden Way", "Berinon", "Stonegate", "Ulric"]
  ]
);
