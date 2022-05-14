const string = `.skin *, .skin *::after, .skin *::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .skin{
        background-color: rgb(255,230,0);
        height: 50vh;
        position: relative;
    }
    .nose{
        position: absolute;
        top: 200px;
        left: 50%;
        margin-left: -10px;
    }
    .nose .san{
        position: relative;
        border: 10px solid;
        border-color: black  transparent transparent;
        border-bottom: none;
        width: 0px;
        height: 0px;
        z-index: 10;
    }
    .nose .circle{
        position: relative;
        width: 20px;
        height: 10px;
        top: -15px;
        border-radius: 50%;
        background-color: black;
    }
    .nose .circle::after{
        content: '';
        position: absolute;
        width: 20px;
        height: 5px;
        top: 50%;
        background-color: rgb(255,230,0);
    }
    @keyframes wave {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(-5deg);
        }
        50% {
            transform: rotate(0deg);
        }
        75%{
            transform: rotate(5deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
    .nose:hover{
        animation: wave 300ms infinite linear;
    }
    .eye{
        border: 3px solid black;
        background-color: rgb(46,46,46);
        height: 64px;
        width: 64px;
        position: absolute;
        left: 50%;
        top: 180px;
        margin-left: -32px;
        margin-top: -32px;
        border-radius: 50%;
    }
    .eye::before{
        content: '';
        display: block;
        height: 30px;
        width: 30px;
        border: 3px solid black;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        left: 8px;
    }
    .eye.left{
        transform: translateX(-120px);
    }
    .eye.right{
        transform: translateX(120px);
    }
    .mouth{
        width: 180px;
        height: 180px;
        position: absolute;
        top: 230px;
        left: 50%;
        margin-left: -90px;
    }
    .mouth .up_left{
        border: 3px solid black;
        width: 80px;
        height: 25px;
        border-top: none;
        border-right: none;
        border-bottom-left-radius: 2.5em 1.5em;
        transform: rotate(-18deg);
        position: absolute;
        top: -4px;
        right: 89px;
        background-color: rgb(255,230,0);
        z-index: 5;
    }
    .mouth .up_right{
        border: 3px solid black;
        width: 80px;
        height: 25px;
        border-top: none;
        border-left: none;
        border-bottom-right-radius: 2.5em 1.5em;
        transform: rotate(18deg);
        position: absolute;
        top: -4px;
        left: 89px;
        background-color: rgb(255,230,0);
        z-index: 5;
    }
    .mouth .down{
        width: 160px;
        height: 180px;
        position: relative;
        top: 4px;
        left: 10px;
        overflow: hidden;
    }
    .mouth .down .circle1{
        border: 3px solid black;
        height: 800px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 50%;
        background-color: rgb(155,0,10);
        overflow: hidden;
    }
    .mouth .down .circle1 .circle2{
        height: 300px;
        width: 200px;
        position: absolute;
        top: 100%;
        right: 50%;
        margin-top: -150px;
        margin-right: -100px;
        border-radius: 120px/170px;
        background-color: rgb(255,72,95);
    }
    .face{
        border: 3px solid black;
        height: 88px;
        width: 88px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-left: -44px;
        top: 260px;
        background-color: rgb(255,0,0);
    }
    .face.left{
        transform: translateX(-160px);
    }
    .face.right{
        transform: translateX(160px);
    }`

export default string; //导出