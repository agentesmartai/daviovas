function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5XzgQwCYSVd":
        Script1();
        break;
      case "5VttzaP1Wbe":
        Script2();
        break;
      case "6InYzuKjmKW":
        Script3();
        break;
      case "6UFNPUGR8WC":
        Script4();
        break;
      case "6LlPNXfjEXb":
        Script5();
        break;
      case "6pmIanu6V0F":
        Script6();
        break;
      case "6MPAyMSs957":
        Script7();
        break;
      case "6gpKDDxo3ev":
        Script8();
        break;
      case "5jrepMEURnk":
        Script9();
        break;
      case "6ettUGqOA11":
        Script10();
        break;
      case "5Us0P6sdpUK":
        Script11();
        break;
      case "6PHMXfTn58y":
        Script12();
        break;
      case "6ZeLBU2UEIL":
        Script13();
        break;
      case "6YgnZilzG5X":
        Script14();
        break;
      case "6A0o0EUEroq":
        Script15();
        break;
      case "6aRfHpFOTxY":
        Script16();
        break;
      case "6WXp6k8sIJj":
        Script17();
        break;
      case "5ef0O006Xyh":
        Script18();
        break;
      case "6IZlgXj81uL":
        Script19();
        break;
      case "6RRfLuUt38u":
        Script20();
        break;
      case "5pQfYfGaYe0":
        Script21();
        break;
      case "67RHJ6XVzsC":
        Script22();
        break;
      case "5qdbXAH9yfh":
        Script23();
        break;
      case "5XcxBXBf4oN":
        Script24();
        break;
      case "6SnVvrrg4QV":
        Script25();
        break;
      case "5kVdFFjMTCo":
        Script26();
        break;
      case "6aKP1pqHRrb":
        Script27();
        break;
      case "5mWZ127q3KH":
        Script28();
        break;
      case "5YgEKSm88pF":
        Script29();
        break;
      case "64bPm1B66aP":
        Script30();
        break;
      case "6EhKvgYOJMR":
        Script31();
        break;
      case "63WFuhDJ0NC":
        Script32();
        break;
      case "5aoipi4UttC":
        Script33();
        break;
      case "5XxKJG6qlcw":
        Script34();
        break;
      case "6mYosyvfPXu":
        Script35();
        break;
      case "6B4vspwURAY":
        Script36();
        break;
      case "6XgC2ptWQms":
        Script37();
        break;
      case "5xrgyKNui8Z":
        Script38();
        break;
      case "6UNnWsQRnPo":
        Script39();
        break;
      case "6GSiV4r3xl8":
        Script40();
        break;
      case "655YDLOfjnb":
        Script41();
        break;
      case "6XHAjSuNi4s":
        Script42();
        break;
      case "66X2MPIbkVI":
        Script43();
        break;
      case "607OAGa1ZjH":
        Script44();
        break;
      case "6OwThfQQ47t":
        Script45();
        break;
      case "6C0aic1kOiu":
        Script46();
        break;
      case "6NrfDIPyZR1":
        Script47();
        break;
      case "6MfZHKxvrCN":
        Script48();
        break;
      case "5ea1bnGydRQ":
        Script49();
        break;
      case "5XO0rSafmkP":
        Script50();
        break;
      case "6EeqYkLm5MA":
        Script51();
        break;
      case "6rbWaIjH6cQ":
        Script52();
        break;
      case "6kd3ARw9CCi":
        Script53();
        break;
      case "65dJyGvHhQa":
        Script54();
        break;
      case "6o1W75Xj0u2":
        Script55();
        break;
      case "6jgjb0MuAC0":
        Script56();
        break;
      case "6GAerIgGaYi":
        Script57();
        break;
      case "5cbNoOPPGSg":
        Script58();
        break;
      case "6jK8ePwf82O":
        Script59();
        break;
      case "5qJSyQtAOa9":
        Script60();
        break;
      case "6IGaBuF9p3X":
        Script61();
        break;
      case "6dyV3hvYUcJ":
        Script62();
        break;
      case "6QYAGQhUCAv":
        Script63();
        break;
      case "5vGy3VhfK6E":
        Script64();
        break;
      case "5bq9425oNRv":
        Script65();
        break;
      case "6c3iY8dIYYp":
        Script66();
        break;
      case "5YuxE0Ia4U5":
        Script67();
        break;
      case "5bcskl1WYqH":
        Script68();
        break;
      case "5XzMtOm1YFp":
        Script69();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5avIXOFE1rM');
const duration = 3500;
const easing = 'ease-out';
const id = '6qlZ70mRSTa';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5avIXOFE1rM');
const duration = 3500;
const easing = 'ease-out';
const id = '6RupPcR9e9o';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5avIXOFE1rM');
const duration = 3500;
const easing = 'ease-out';
const id = '6qlZ70mRSTa';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5r1Ef8CPMHu');
const duration = 2250;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  const target = object('5r1Ef8CPMHu');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6V3Yl0T3W00';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5r1Ef8CPMHu');
const duration = 2250;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6Gol68zuktS');
const duration = 1500;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  const target = object('6Gol68zuktS');
const duration = 1500;
const easing = 'ease-in-out';
const id = '6V3Yl0T3W00';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6Gol68zuktS');
const duration = 1500;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  player.once(() => {
const target = object('6TzqzFeXdIl');
const duration = 1500;
const easing = 'ease-in';
const id = '6EOqLynqr99';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  const target = object('6TzqzFeXdIl');
const duration = 1500;
const easing = 'ease-in-out';
const id = '65aTqmTUJFg';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6TzqzFeXdIl');
const duration = 1500;
const easing = 'ease-in';
const id = '6EOqLynqr99';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  player.once(() => {
const target = object('65MiP5tzGdp');
const duration = 1500;
const easing = 'ease-in';
const id = '69Cxud50HBh';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  const target = object('65MiP5tzGdp');
const duration = 1500;
const easing = 'ease-in-out';
const id = '67VfZfYZZGp';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('65MiP5tzGdp');
const duration = 1500;
const easing = 'ease-in';
const id = '69Cxud50HBh';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  player.once(() => {
const target = object('66mSDeTet3I');
const duration = 1500;
const easing = 'ease-in';
const id = '5dPhoaRMSeR';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script17 = function()
{
  const target = object('66mSDeTet3I');
const duration = 1500;
const easing = 'ease-in-out';
const id = '5eIc1ysnRBC';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('66mSDeTet3I');
const duration = 1500;
const easing = 'ease-in';
const id = '5dPhoaRMSeR';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('6BKRBnOumO5');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6gNpCUDnPga';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  player.once(() => {
const target = object('6BKRBnOumO5');
const duration = 2250;
const easing = 'ease-in';
const id = '67BfrvDXScY';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script21 = function()
{
  const target = object('6BKRBnOumO5');
const duration = 2250;
const easing = 'ease-in';
const id = '67BfrvDXScY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('5V8WeUMw2G5');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6V3Yl0T3W00';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  player.once(() => {
const target = object('5V8WeUMw2G5');
const duration = 2250;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script24 = function()
{
  const target = object('5V8WeUMw2G5');
const duration = 2250;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  player.once(() => {
const target = object('5nvAqXTLgg2');
const duration = 3500;
const easing = 'ease-out';
const id = '613TJdcaGRG';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script26 = function()
{
  const target = object('5nvAqXTLgg2');
const duration = 3500;
const easing = 'ease-out';
const id = '5p8TA87aQBv';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('5nvAqXTLgg2');
const duration = 3500;
const easing = 'ease-out';
const id = '613TJdcaGRG';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  player.once(() => {
const target = object('6XLVtYE53BB');
const duration = 2250;
const easing = 'ease-in';
const id = '6nAjUowmxmQ';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script29 = function()
{
  const target = object('6XLVtYE53BB');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6jNAWaDrOlv';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('6XLVtYE53BB');
const duration = 2250;
const easing = 'ease-in';
const id = '6nAjUowmxmQ';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  player.once(() => {
const target = object('63iarPFLp1L');
const duration = 2250;
const easing = 'ease-in';
const id = '6YZF7BVvgeo';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script32 = function()
{
  const target = object('63iarPFLp1L');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6dtc5fFlzjM';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('63iarPFLp1L');
const duration = 2250;
const easing = 'ease-in';
const id = '6YZF7BVvgeo';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  player.once(() => {
const target = object('5pTZ1XFmJHZ');
const duration = 2250;
const easing = 'ease-in';
const id = '6dRDQz4Zh4S';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script35 = function()
{
  const target = object('5pTZ1XFmJHZ');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6EHYbWtpItV';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('5pTZ1XFmJHZ');
const duration = 2250;
const easing = 'ease-in';
const id = '6dRDQz4Zh4S';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  player.once(() => {
const target = object('6AA628Wv4mx');
const duration = 2250;
const easing = 'ease-in';
const id = '5d0xaXhCWzl';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script38 = function()
{
  const target = object('6AA628Wv4mx');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6jyubg7uBGk';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  const target = object('6AA628Wv4mx');
const duration = 2250;
const easing = 'ease-in';
const id = '5d0xaXhCWzl';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('5hV9vXVgarJ');
const duration = 2500;
const easing = 'ease-in-out';
const id = '5mNO0lzUmOu';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  player.once(() => {
const target = object('5hV9vXVgarJ');
const duration = 2250;
const easing = 'ease-in';
const id = '6eagv4NvCyi';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script42 = function()
{
  const target = object('5hV9vXVgarJ');
const duration = 2250;
const easing = 'ease-in';
const id = '6eagv4NvCyi';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('6VvsNtEBHBz');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6ekcaAyMKvZ';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  player.once(() => {
const target = object('6VvsNtEBHBz');
const duration = 2250;
const easing = 'ease-in';
const id = '64ir8LPvvVd';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script45 = function()
{
  const target = object('6VvsNtEBHBz');
const duration = 2250;
const easing = 'ease-in';
const id = '64ir8LPvvVd';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  player.once(() => {
const target = object('6qAHoX6JgBa');
const duration = 3500;
const easing = 'ease-out';
const id = '6LJNIZiMKjs';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script47 = function()
{
  const target = object('6qAHoX6JgBa');
const duration = 3500;
const easing = 'ease-out';
const id = '5gcFFU1jDow';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script48 = function()
{
  const target = object('6qAHoX6JgBa');
const duration = 3500;
const easing = 'ease-out';
const id = '6LJNIZiMKjs';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script49 = function()
{
  player.once(() => {
const target = object('6cew2woXiAi');
const duration = 2250;
const easing = 'ease-in';
const id = '6PxSZvCpYaN';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script50 = function()
{
  const target = object('6cew2woXiAi');
const duration = 2500;
const easing = 'ease-in-out';
const id = '66m7zc1cCv7';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script51 = function()
{
  const target = object('6cew2woXiAi');
const duration = 2250;
const easing = 'ease-in';
const id = '6PxSZvCpYaN';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script52 = function()
{
  player.once(() => {
const target = object('6VRxyfziA18');
const duration = 2250;
const easing = 'ease-in';
const id = '5iqjLy4lmW7';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script53 = function()
{
  const target = object('6VRxyfziA18');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6iMviZHNnUV';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script54 = function()
{
  const target = object('6VRxyfziA18');
const duration = 2250;
const easing = 'ease-in';
const id = '5iqjLy4lmW7';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script55 = function()
{
  const target = object('5hVZuFrGZvh');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6RLxYigptGq';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script56 = function()
{
  player.once(() => {
const target = object('5hVZuFrGZvh');
const duration = 2250;
const easing = 'ease-in';
const id = '60PBH2l8jXL';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script57 = function()
{
  const target = object('5hVZuFrGZvh');
const duration = 2250;
const easing = 'ease-in';
const id = '60PBH2l8jXL';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script58 = function()
{
  player.once(() => {
const target = object('5dNPnUOujsk');
const duration = 3500;
const easing = 'ease-out';
const id = '6PUXI4nBKfT';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script59 = function()
{
  const target = object('5dNPnUOujsk');
const duration = 3500;
const easing = 'ease-out';
const id = '6FwmM0UhIvm';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script60 = function()
{
  const target = object('5dNPnUOujsk');
const duration = 3500;
const easing = 'ease-out';
const id = '6PUXI4nBKfT';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script61 = function()
{
  player.once(() => {
const target = object('5ohvY3VrL0g');
const duration = 3500;
const easing = 'ease-out';
const id = '6CNit4pMwsh';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script62 = function()
{
  const target = object('5ohvY3VrL0g');
const duration = 3500;
const easing = 'ease-out';
const id = '6JpA0bBJDI0';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script63 = function()
{
  const target = object('5ohvY3VrL0g');
const duration = 3500;
const easing = 'ease-out';
const id = '6CNit4pMwsh';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script64 = function()
{
  player.once(() => {
const target = object('5efAnu3KvpK');
const duration = 2250;
const easing = 'ease-in';
const id = '5Vdqz6YhC3w';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script65 = function()
{
  const target = object('5efAnu3KvpK');
const duration = 2500;
const easing = 'ease-in-out';
const id = '68dwseNYjZq';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script66 = function()
{
  const target = object('5efAnu3KvpK');
const duration = 2250;
const easing = 'ease-in';
const id = '5Vdqz6YhC3w';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script67 = function()
{
  player.once(() => {
const target = object('63svEiZw7XJ');
const duration = 2250;
const easing = 'ease-in';
const id = '5zM9bV9YhGG';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script68 = function()
{
  const target = object('63svEiZw7XJ');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6PDibTB6tqg';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script69 = function()
{
  const target = object('63svEiZw7XJ');
const duration = 2250;
const easing = 'ease-in';
const id = '5zM9bV9YhGG';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
