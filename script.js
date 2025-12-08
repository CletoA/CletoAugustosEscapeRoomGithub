var F = document.getElementById("F");
var R = document.getElementById("R");
var E = document.getElementById("E");
var E3 = document.getElementById("E3");
var A = document.getElementById("A");
var T = document.getElementById("T");
var L = document.getElementById("L");
var A3 = document.getElementById("A3");
var S = document.getElementById("S");
var T3 = document.getElementById("T3");
var lock = document.getElementById("lock");
var door = document.getElementById("escape");
var scream = document.getElementById("scream");

function showModal() {
  document.getElementById("myModal").style.display = "flex";
}
function nextEscapeRoomPage() {
  window.location.href = "https://cletoa.github.io/EscapeRoomPT2/";
}

function hideModal() {
  document.getElementById("myModal").style.display = "none";
}
function hidetextModal() {
  document.getElementById("textmodal").style.display = "none";
  document.getElementById("d64").play();
  document.getElementById("d64").volume = 0.6;
}
function showModal2() {
  document.getElementById("myModal2").style.display = "flex";
  document.getElementById("paper").play();
}
function escapeMansion() {
  document.getElementById("exit").style.display = "flex";
}
x = 0;
function hideModal2() {
  if (x == 0) {
    document.getElementById("scream").play();
    document.getElementById("scream").volume = 0.2;
    document.getElementById("myModal2").style.display = "none";
    document.getElementById("door2").classList.add("clickable");
    x = x + 1;
  } else if (x == 1);
  {
    document.getElementById("myModal2").style.display = "none";
    document.getElementById("door2").classList.add("clickable");
    x = 1;
  }
}
function showModal3() {
  document.getElementById("myModal3").style.display = "flex";
  document.getElementById("paper").play();
}

function hideModal3() {
  document.getElementById("myModal3").style.display = "none";
}
L1 = 0;
function lockF() {
  if (L1 == 3) {
    L1 = 0;
  }
  L1 = L1 + 1;
  checkMatch();

  if (L1 == 1) {
    F.src = "Letters/Gothic_S.png";
    document.getElementById("turn").play();
  } else if (L1 == 2) {
    F.src = "Letters/Gothic_T.png";
    document.getElementById("turn").play();
  } else if (L1 == 3) {
    F.src = "Letters/Gothic_F.png";
    document.getElementById("turn").play();
  }
}
R2 = 0;
function lockR() {
  if (R2 == 3) {
    R2 = 0;
  }
  R2 = R2 + 1;
  checkMatch();

  if (R2 == 1) {
    R.src = "Letters/Gothic_L.png";
    document.getElementById("turn").play();
  } else if (R2 == 2) {
    R.src = "Letters/Gothic_E.png";
    document.getElementById("turn").play();
  } else if (R2 == 3) {
    R.src = "Letters/Gothic_R.png";
    document.getElementById("turn").play();
  }
}
E2 = 0;
function lockE() {
  if (E2 == 3) {
    E2 = 0;
  }
  E2 = E2 + 1;
  checkMatch();

  if (E2 == 1) {
    E.src = "Letters/Gothic_A.png";
    document.getElementById("turn").play();
  } else if (E2 == 2) {
    E.src = "Letters/Gothic_R.png";
    document.getElementById("turn").play();
  } else if (E2 == 3) {
    E.src = "Letters/Gothic_E.png";
    document.getElementById("turn").play();
  }
}
E1 = 0;
function lockE3() {
  if (E1 == 3) {
    E1 = 0;
  }
  E1 = E1 + 1;
  checkMatch();

  if (E1 == 1) {
    E3.src = "Letters/Gothic_A.png";
    document.getElementById("turn").play();
  } else if (E1 == 2) {
    E3.src = "Letters/Gothic_T.png";
    document.getElementById("turn").play();
  } else if (E1 == 3) {
    E3.src = "Letters/Gothic_E.png";
    document.getElementById("turn").play();
  }
}
A2 = 0;
function lockA() {
  if (A2 == 3) {
    A2 = 0;
  }
  A2 = A2 + 1;
  checkMatch();

  if (A2 == 1) {
    A.src = "Letters/Gothic_E.png";
    document.getElementById("turn").play();
  } else if (A2 == 2) {
    A.src = "Letters/Gothic_R.png";
    document.getElementById("turn").play();
  } else if (A2 == 3) {
    A.src = "Letters/Gothic_A.png";
    document.getElementById("turn").play();
  }
}
T2 = 0;
function lockT() {
  if (T2 == 3) {
    T2 = 0;
  }
  T2 = T2 + 1;
  checkMatch();

  if (T2 == 1) {
    T.src = "Letters/Gothic_R.png";
    document.getElementById("turn").play();
  } else if (T2 == 2) {
    T.src = "Letters/Gothic_A.png";
    document.getElementById("turn").play();
  } else if (T2 == 3) {
    T.src = "Letters/Gothic_T.png";
    document.getElementById("turn").play();
  }
}
L2 = 0;
function lockL() {
  if (L2 == 3) {
    L2 = 0;
  }
  L2 = L2 + 1;
  checkMatch();

  if (L2 == 1) {
    L.src = "Letters/Gothic_S.png";
    document.getElementById("turn").play();
  } else if (L2 == 2) {
    L.src = "Letters/Gothic_R.png";
    document.getElementById("turn").play();
  } else if (L2 == 3) {
    L.src = "Letters/Gothic_L.png";
    document.getElementById("turn").play();
  }
}
A1 = 0;
function lockA3() {
  if (A1 == 3) {
    A1 = 0;
  }
  A1 = A1 + 1;
  checkMatch();

  if (A1 == 1) {
    A3.src = "Letters/Gothic_E.png";
    document.getElementById("turn").play();
  } else if (A1 == 2) {
    A3.src = "Letters/Gothic_L.png";
    document.getElementById("turn").play();
  } else if (A1 == 3) {
    A3.src = "Letters/Gothic_A.png";
    document.getElementById("turn").play();
  }
}
S2 = 0;
function lockS() {
  if (S2 == 3) {
    S2 = 0;
  }
  S2 = S2 + 1;
  checkMatch();

  if (S2 == 1) {
    S.src = "Letters/Gothic_R.png";
    document.getElementById("turn").play();
  } else if (S2 == 2) {
    S.src = "Letters/Gothic_T.png";
    document.getElementById("turn").play();
  } else if (S2 == 3) {
    S.src = "Letters/Gothic_S.png";
    document.getElementById("turn").play();
  }
}
T1 = 0;
function lockT3() {
  if (T1 == 3) {
    T1 = 0;
  }
  T1 = T1 + 1;
  checkMatch();

  if (T1 == 1) {
    T3.src = "Letters/Gothic_L.png";
    document.getElementById("turn").play();
  } else if (T1 == 2) {
    T3.src = "Letters/Gothic_E.png";
    document.getElementById("turn").play();
  } else if (T1 == 3) {
    T3.src = "Letters/Gothic_T.png";
    document.getElementById("turn").play();
  }
}
function checkMatch() {
  if (
    L1 == 3 &&
    R2 == 3 &&
    E2 == 3 &&
    E1 == 3 &&
    A2 == 3 &&
    T2 == 3 &&
    L2 == 3 &&
    A1 == 3 &&
    S2 == 3 &&
    T1 == 3
  ) {
    F.classList.add("transparent");
    R.classList.add("transparent");
    E.classList.add("transparent");
    E3.classList.add("transparent");
    A.classList.add("transparent");
    T.classList.add("transparent");
    L.classList.add("transparent");
    A3.classList.add("transparent");
    S.classList.add("transparent");
    T3.classList.add("transparent");
    document.getElementById("myModal").style.display = "none";
    document.getElementById("lock2").play();
    lock.classList.remove("clickable");
    lock.style.display = "none";
    door.classList.add("clickable");
    document.getElementById("d64").pause();
    setTimeout(() => {
      document.getElementById("exit").style.display = "flex";
    }, 1000);
    setTimeout(() => {
      document.getElementById("night").play();
    }, 200);
    document.getElementById("night").volume = 0.4;
  }
}


