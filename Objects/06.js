function solve(arr) {

    class Song {
        constructor(type, songName, time) {
            this.type = type;
            this.name = songName;
            this.time = time;
        }

    }

    let tracks = [];
    let songCount = arr.shift();
    let list = arr.pop()

    for (let i = 0; i < songCount; i++) {
        let data = arr[i].split('_');
        let type, name, time;

        [type, name, time] = [data[0], data[1], data[2]];
        tracks.push(new Song(type, name, time))
    }

    let result = [];

    for (const song of tracks) {

        if (list === "all") {
            console.log(song.name);
        } else {
            if (song.type === list) {
                console.log(song.name);
            }
        }
    }
}

solve([3, "favorite_DownTown_3:14", "favorite_Kiss_5:14", "favorite_Smooth Criminal_8:14", "favorite"])