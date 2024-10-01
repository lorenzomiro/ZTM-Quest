import kaplay from 'kaplay';

export const k = kaplay({
    global: false,
    touchToMouse: true,
    canvas: document.getElementById('game'),
    debugKey: 'f8',
    buttons: {
        up: { keyboard: ['w', 'up'], gamepad: 'north' },
        down: { keyboard: ['s', 'down'], gamepad: 'south' },
        left: { keyboard: ['a', 'left'], gamepad: 'west' },
        right: { keyboard: ['d', 'right'], gamepad: 'east' },
    },
});

export const setGlobalEvents = (cb = () => {}) => {
    cb();
};
