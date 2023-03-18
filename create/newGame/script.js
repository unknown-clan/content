const gameName = document.getElementById("gameName").value;
const gameDescription = document.getElementById("gameDescription").value;
const gameHref = document.getElementById("gameHref").value;

var checkboxPC = document.getElementById("checkPC");
var checkboxBETA = document.getElementById("checkBETA");
var checkboxDISABLED = document.getElementById("checkDISABLED");
var checkboxNEW = document.getElementById("checkNEW");

document.getElementById("create").addEventListener("click", () => {
  let PCtag = "";
  let BETAtag = "";
  let DISABLEDtag = "";
  let NEWtag = "";

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
  if (checkboxNEW.checked) {
    NEWtag = `<div title="This is a new game" id="badgeNew">NEW</div>`;
  } else {
    NEWtag = "";
  }

  const output = `
  <article>
      ${NEWtag}
      <div class="text">
          <h3>${gameName}</h3>

          <p>${gameDescription}</p>
          <a href="${gameHref}" class="btn pc beta"></a>
      </div>
  </article>`;

  prompt("Copy article", output);
});
