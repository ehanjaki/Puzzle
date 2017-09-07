function getRand() {
    var left = Math.floor(Math.random() * (240)) + 'px';
    var top = Math.floor(Math.random() * (240)) + 'px';
    return {left: left, top: top};
}
