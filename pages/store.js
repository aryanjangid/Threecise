export let welcome = true;
export const changeWelcome = () => {
    welcome = false;
}

export const colors = ['#704F4F', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD', '#A500F2', '#EC7272', '#B9FFF8', '#F94892', '#A66CFF', '#FD5D5D', '#FF8FB1', '#0096FF'];

export const dances = ["Dance", "Thriller Moves", "Squats", "Hip Hop", "Fun Moves", "Excercises", "Excercise", "Dance", "Thriller", "Squats", "Hip Hop", "Fun Moves", "Excercises"];
export const pages = ['dance', 'thriller', 'squats', 'hiphop', 'funMoves', 'excercises', 'excercise', 'dance', 'thriller', 'squats', 'hiphop', 'funMoves', 'excercises']

export const c1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
export const c2 = [2, 3, 1, 5, 4, 4, 5, 3, 2, 1]
export const c3 = [5, 4, 2, 3, 1, 1, 3, 4, 2, 2]
export const opac = [0.5, 0.4, 1, 0.3, 0.1, 0.1, 0.3, 0.4, 1, 0.2]

export const backgroundCircles = [
    {
        height: 900,
        numberOfItems: 5,
    },
    {
        height: 800,
        numberOfItems: 7,
    },
    {
        height: 860,
        numberOfItems: 7,
    }
]

export let mousePositionX = 0;
export let mousePositionY = 0;
export const setMousePosition = (x, y) => {
    mousePositionX = x;
    mousePositionY = y;
}


const actions = ["idle", "Belly Dance", "Shopping Cart ", "Break Dance1", "Dance Tweark", "Flair", "Gagnam Style", "House Dance", "Silly", "Soul Spin Combo"]

export let currentDance = 0;
export const nextDance=(index)=>{
    console.log(index);

    var l = index + 1;
    if (l == 10) {
        currentDance = 0

    }
    else{
        currentDance = l
    }
}
export const previousDance=(index)=>{
    console.log(index);
    var l = index - 1;
    if (l == -1) {
        currentDance = 9

    }
    else{
        currentDance = l
    }
}