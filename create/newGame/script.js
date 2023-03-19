let PCtag = "";
let BETAtag = "";
let DISABLEDtag = "";
let NEWtag = "";

// document.getElementById("create").addEventListener("click", () => {
document.body.addEventListener("change", () => {
  const gameName = document.getElementById("gameName").value;
  const gameDescription = document.getElementById("gameDescription").value;
  const gameHref = document.getElementById("gameHref").value;

  var checkboxPC = document.getElementById("checkPC");
  var checkboxBETA = document.getElementById("checkBETA");
  var checkboxDISABLED = document.getElementById("checkDISABLED");
  var checkboxNEW = document.getElementById("checkNEW");

  PCtag = "";
  BETAtag = "";
  DISABLEDtag = "";
  NEWtag = "";

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

  const output = `<article>
      ${NEWtag}
      <div class="text">
          <h3>${gameName}</h3>

          <p>${gameDescription}</p>
          <a href="${gameHref}" class="${PCtag + BETAtag + DISABLEDtag}"></a>
      </div>
  </article>`;

  // prompt("Copy article", output);

  const textBox = document.getElementById("outputBox");
  textBox.innerText = output;
});

function copyText(containerid) {
  var range = document.createRange();
  range.selectNode(containerid); //changed here
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Successfully copied!");
}
