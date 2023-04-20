function songs(input) {
  let numOfSongs = input.shift();
  let listType = input.pop();
  
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
    printSong() {
      if (listType === this.typeList) {
        console.log(`${this.name} `);
      } else if (listType === "all") {
        console.log(`${this.name} `);
      }
    }
  }

  for (let el of input) {
    let [typeList, name, time] = el.split("_");
    let newSong = new Song(typeList, name, time);
    newSong.printSong();
  }
}
songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
console.log("_______________________");
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
console.log("_______________________");
songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
