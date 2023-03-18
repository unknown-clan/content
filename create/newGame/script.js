const gameName = document.getElementById("gameName").value;
const gameDescription = document.getElementById("gameDescription").value;
const gameHref = document.getElementById("gameHref").value;

var checkboxPC = document.getElementById("checkPC");
var checkboxBETA = document.getElementById("checkBETA");
var checkboxDISABLED = document.getElementById("checkDISABLED");

document.getElementById("create").addEventListener("click", () => {
  let PCtag = "";
  let BETAtag = "";
  let DISABLEDtag = "";

  if (checkboxPC.checked) {
    PCtag = "pc ";
  } else {
    PCtag = "";
  }
  if (checkboxBETA.checked) {
    BETAtag = "beta ";
  } else {
    BETAtag = "";
  }
  if (checkboxDISABLED.checked) {
    DISABLEDtag = "disabled ";
  } else {
    DISABLEDtag = "";
  }

  const output = `
  <article>
      <div class="text">
          <h3>${gameName}</h3>

          <p>${gameDescription}</p>
          <a href="${gameHref}" class="${PCtag + BETAtag + DISABLEDtag}"></a>
      </div>
  </article>`;

  prompt("Copy article", output);
});
