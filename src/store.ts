import { observable } from 'mobx';

const point1 = observable({
    number: 0,
    increase() {
        this.number++;
    }
});

const point2 = observable({
    number: 0,
    increase() {
        this.number++;
    }
});

const gameResult = observable({
    winner: '',
    round: 0,
    game1_winner: '',
    game2_winner: '',
    game3_winner: '',
    game4_winner: ''
})

export {point1, point2, gameResult}
