var tl = anime.timeline({});

tl
    .add({
        targets: ['.fil1', '.fil2', '.fil3', '.fil4'],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function (el, i) { return i * (200) },
    })
    .add({
        targets: ['.fil1', '.fil2', '.fil3', '.fil4'],
        fill: "#dbcf21",
        duration: 300,
        delay: anime.stagger(200),
        easing: 'easeInOutSine',
    })

