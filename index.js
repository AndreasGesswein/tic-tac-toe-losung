// Import stylesheets
import "./style.css";

// das was ab hier kommt, erst ausführen,
// wenn das Dokument vollständig geladen ist
$(document).ready(function() {
  // Direkt beim Start der Seite, Gewinnefeld ausblenden
  $("div.winner").toggle();

  // Hilfsvariable in der die Rundennummer abgespeichert wird
  let counter = 0;

  // alle TD-Zellen bekommen ein Click-event
  $("td").click(function() {
    // $(this) ist dann jeweils die angeklickte Zelle
    let currentCell = $(this);

    // Ist der Text der aktuellen Zelle leer? Nur dann ein gültiger Spielzug
    if (currentCell.text() == "") {
      counter++;
      // counter%2 --> Rest bei Teilung durch 2 wird ermittelt
      if (counter % 2 == 1) {
        // ungerade Zahl
        currentCell.text("X");
      } else {
        // gerade Zahl
        currentCell.text("O");
      }
    }
    checkLine(0, 1, 2);
    checkLine(3, 4, 5);
    checkLine(6, 7, 8);
    checkLine(0, 4, 8);
    checkLine(2, 4, 6);
    checkLine(0, 3, 6);
    checkLine(2, 5, 8);

    if (counter >= 9) {
      $("div.winner").css("backgroundColor", "red");
      $("div.winner").text("Unentschieden");
      $("div.winner").slideDown(1000);
    }
  });
});

function checkLine(one, two, three) {
  if (
    $("#cell" + one).text() != "" &&
    $("#cell" + one).text() == $("#cell" + two).text() &&
    $("#cell" + two).text() == $("#cell" + three).text()
  ) {
    let winnerText = $("#cell" + one).text() + " hat Gewonnen";
    $("div.winner").text(winnerText);
    $("div.winner").slideDown(1000);
  }
}
