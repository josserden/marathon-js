// import CircleType from 'circletype';

$(document).ready(function () {
    $('.inline').modaal();
    $('.image').modaal({
        type: 'image',
    });
});

const circleType = new CircleType(document.querySelector('.play-box-text'));
circleType.radius(30);
