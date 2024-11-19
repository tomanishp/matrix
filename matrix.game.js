const _0x3e1b84 = _0x4a5f;
(function(_0x291178, _0x138c3a) {
    const _0x3269b5 = _0x4a5f
      , _0x2bcdf7 = _0x291178();
    while (!![]) {
        try {
            const _0x5eb603 = -parseInt(_0x3269b5(0x198)) / 0x1 * (parseInt(_0x3269b5(0x1a7)) / 0x2) + -parseInt(_0x3269b5(0x1b5)) / 0x3 * (-parseInt(_0x3269b5(0x1be)) / 0x4) + parseInt(_0x3269b5(0x19b)) / 0x5 + -parseInt(_0x3269b5(0x1ad)) / 0x6 + parseInt(_0x3269b5(0x1a1)) / 0x7 + parseInt(_0x3269b5(0x1b7)) / 0x8 * (-parseInt(_0x3269b5(0x19e)) / 0x9) + parseInt(_0x3269b5(0x1c3)) / 0xa * (parseInt(_0x3269b5(0x19c)) / 0xb);
            if (_0x5eb603 === _0x138c3a)
                break;
            else
                _0x2bcdf7['push'](_0x2bcdf7['shift']());
        } catch (_0x11529b) {
            _0x2bcdf7['push'](_0x2bcdf7['shift']());
        }
    }
}(_0x214f, 0x454f0));
let iR, iC, iXR, iXC, nums = [];
iR = iC = iXR = iXC = 0x1;
var cDiv;
let iClicks = 0x0;
$(document)[_0x3e1b84(0x19a)](function() {
    const _0x5474f1 = _0x3e1b84;
    $('button')['on'](_0x5474f1(0x1c9), resetAnimation),
    initializeMatrix();
});
function _0x4a5f(_0x16ff31, _0x1bb38e) {
    const _0x214fd9 = _0x214f();
    return _0x4a5f = function(_0x4a5fa5, _0x135234) {
        _0x4a5fa5 = _0x4a5fa5 - 0x196;
        let _0x4536e8 = _0x214fd9[_0x4a5fa5];
        return _0x4536e8;
    }
    ,
    _0x4a5f(_0x16ff31, _0x1bb38e);
}
function initializeMatrix() {
    const _0x170974 = _0x3e1b84;
    nums = [],
    $(_0x170974(0x1a6))[_0x170974(0x1c0)]();
    while (nums[_0x170974(0x1c7)] < 0x10) {
        const _0x28fcc4 = Math['floor'](Math[_0x170974(0x19d)]() * 0x10);
        if (!nums[_0x170974(0x1c5)](_0x28fcc4)) {
            nums[_0x170974(0x1b6)](_0x28fcc4),
            iXR = Math['ceil'](nums[_0x170974(0x1c7)] / 0x4),
            iXC = nums[_0x170974(0x1c7)] % 0x4;
            iXC == 0x0 && (iXC = 0x4);
            _0x28fcc4 == 0x0 && (iR = iXR,
            iC = iXC);
            iXC == 0x1 && $(_0x170974(0x1a6))['append'](_0x170974(0x1b0) + iXR + _0x170974(0x1b2));
            try {
                $(_0x170974(0x1c2) + iXR)['append'](_0x170974(0x1c1) + iXR + iXC + _0x170974(0x1a9) + iXR + iXC + '</button></div>'),
                $(_0x170974(0x197) + iXR + iXC)['text'](_0x28fcc4),
                $(_0x170974(0x197) + iXR + iXC)['css'](_0x170974(0x1ba), '100%');
            } catch (_0xfa749e) {
                throw _0xfa749e;
            }
        }
    }
    $(_0x170974(0x1a6))[_0x170974(0x1b3)]('<div\x20class=\x22row\x22\x20id=\x22rowReset\x22><p>&nbsp</p><button\x20type=\x22button\x22\x20id=\x22btnReset\x22\x20class=\x22btnR\x22\x20onclick=\x22initializeMatrix()\x22>Reset/\x20नया\x20क्रम</button></div>'),
    setButtons(iR, iC),
    $(_0x170974(0x1aa))[_0x170974(0x1a3)](_0x170974(0x1a4));
}
function resetAnimation() {
    resetButtonAnimation(this);
}
function _0x214f() {
    const _0x33d93a = ['#btn', '2572YJbOol', 'animated\x20slide-out-left', 'ready', '231635fPKHaQ', '2829475MalXzM', 'random', '212607JAmFcA', '\x20steps!!', 'ceil', '2081317nDcmii', 'animated\x20slide-out-down', 'text', 'Steps:\x200', 'grey', '#matrix', '318XVPKzw', 'button', '\x22>#btn', '#sClick', 'off', 'background-color', '125316Sjaglu', 'Solved\x20in\x20', 'removeClass', '<div\x20class=\x22row\x22\x20id=\x22row', 'click', '\x22></div>', 'append', 'animated\x20slide-out-right', '421257oRlKUB', 'push', '152vuRunR', 'display', 'black', 'width', '#C1E1C1', 'Down', 'Right', '16gvCoKS', 'Left', 'empty', '<div\x20class=\x22col-xs-3\x22><button\x20type=\x22button\x22\x20class=\x22btn\x20btnM\x22\x20id=\x22btn', '#row', '10Xrggxc', 'color', 'includes', 'animated\x20tada', 'length', 'Steps:\x20', 'animationend', 'css'];
    _0x214f = function() {
        return _0x33d93a;
    }
    ;
    return _0x214f();
}
function resetButtonAnimation(_0x408230) {
    const _0x1d7e98 = _0x3e1b84;
    $(_0x408230)['removeClass'](_0x1d7e98(0x1c6)),
    $(_0x408230)[_0x1d7e98(0x1af)]('animated\x20slide-out-up'),
    $(_0x408230)[_0x1d7e98(0x1af)](_0x1d7e98(0x1a2)),
    $(_0x408230)['removeClass'](_0x1d7e98(0x199)),
    $(_0x408230)['removeClass'](_0x1d7e98(0x1b4));
}
function setButtons(_0x41e04b, _0x56b503) {
    const _0x25a85a = _0x3e1b84;
    $(_0x25a85a(0x1a8))[_0x25a85a(0x1ab)](_0x25a85a(0x1b1)),
    $('button')[_0x25a85a(0x196)]('background-color', ''),
    $('button')['css'](_0x25a85a(0x1c4), _0x25a85a(0x1b9));
    var _0x34bd5a = _0x41e04b - 0x1
      , _0x4d648a = _0x41e04b + 0x1
      , _0x2874a7 = _0x56b503 - 0x1
      , _0x490c4e = _0x56b503 + 0x1;
    setSwapButton($(_0x25a85a(0x197) + _0x34bd5a + _0x56b503), moveDown),
    setSwapButton($(_0x25a85a(0x197) + _0x4d648a + _0x56b503), moveUp),
    setSwapButton($(_0x25a85a(0x197) + _0x41e04b + _0x2874a7), moveLeft),
    setSwapButton($(_0x25a85a(0x197) + _0x41e04b + _0x490c4e), moveRight),
    checkSolve(),
    $(_0x25a85a(0x197) + _0x41e04b + _0x56b503)['css'](_0x25a85a(0x1ac), _0x25a85a(0x1a5)),
    $(_0x25a85a(0x197) + _0x41e04b + _0x56b503)['css']('color', 'grey'),
    $(_0x25a85a(0x197) + _0x41e04b + _0x56b503)['text']();
}
function checkSolve() {
    const _0x1b2479 = _0x3e1b84;
    let _0x40b8e5 = 0x0;
    for (let _0x256381 = 0x1; _0x256381 < 0x10; _0x256381++) {
        iXR = Math[_0x1b2479(0x1a0)](_0x256381 / 0x4),
        iXC = _0x256381 % 0x4,
        iXC == 0x0 && (iXC = 0x4),
        btn = $(_0x1b2479(0x197) + iXR + iXC),
        btn[_0x1b2479(0x1a3)]() == _0x256381 ? (btn['css'](_0x1b2479(0x1ac), _0x1b2479(0x1bb)),
        _0x40b8e5++) : btn[_0x1b2479(0x196)](_0x1b2479(0x1ac), '');
    }
    _0x40b8e5 == 0xf && ($('#sClick')[_0x1b2479(0x1a3)](_0x1b2479(0x1ae) + iClicks + _0x1b2479(0x19f)),
    $('button')[_0x1b2479(0x1ab)](_0x1b2479(0x1b1)));
}
function removeTada(_0x10c2fb) {
    const _0x124d1b = _0x3e1b84;
    $('#' + _0x10c2fb)[_0x124d1b(0x1af)](_0x124d1b(0x1c6));
}
function setSwapButton(_0x136251, _0x2578ba) {
    const _0x46b65c = _0x3e1b84;
    $(_0x136251)[_0x46b65c(0x196)]('background-color', ''),
    $(_0x136251)[_0x46b65c(0x196)](_0x46b65c(0x1b8), 'inline'),
    $(_0x136251)[_0x46b65c(0x1ab)]('click'),
    $(_0x136251)['on']('click', _0x2578ba);
}
function swapClick(_0x491258, _0x3daa47) {
    const _0x50c005 = _0x3e1b84;
    $(_0x491258)[_0x50c005(0x1ab)](_0x50c005(0x1b1)),
    $('button')[_0x50c005(0x196)](_0x50c005(0x1ac), ''),
    $('button')[_0x50c005(0x1ab)](_0x50c005(0x1b1));
    let _0x379b6a = +$(_0x491258)[_0x50c005(0x1a3)]();
    $(_0x50c005(0x197) + iR + iC)[_0x50c005(0x1a3)](_0x379b6a);
    let _0x3a84d9 = (iR - 0x1) * 0x4 + iC;
    switch (_0x3daa47) {
    case 'Up':
        iR++;
        break;
    case _0x50c005(0x1bc):
        iR--;
        break;
    case _0x50c005(0x1bf):
        iC--;
        break;
    case _0x50c005(0x1bd):
        iC++;
        break;
    }
    setButtons(iR, iC),
    iClicks++,
    $(_0x50c005(0x1aa))[_0x50c005(0x1a3)](_0x50c005(0x1c8) + iClicks);
}
function moveUp() {
    swapClick($(this), 'Up');
}
function moveDown() {
    swapClick($(this), 'Down');
}
function moveLeft() {
    swapClick($(this), 'Left');
}
function moveRight() {
    swapClick($(this), 'Right');
}
