function submitForm() {
      const prograExperience = document.querySelector('input[name="languageprogra"]:checked').value;
      const enjoyDevelopment = document.querySelector('input[name="enjoy-development"]:checked').value;
      const ecran = document.querySelector('input[name="écran"]:checked').value;
      const cyber = document.querySelector('input[name="cyber"]:checked').value;
      const gestion = document.querySelector('input[name="gestion"]:checked').value;


      let compSLAM = 0;
      let compSISR = 0;
      //tous les if :


      if (gestion === "yes") {
        compSISR+=1
      } else {
        compSLAM+=1
      }
      if (cyber === "yes") {
        compSISR +=1;
      } else {
        compSLAM +=1;
      }
      if (prograExperience === "yes") {
        compSLAM += 1;
      } else {
        compSISR += 1;
      }

      if (enjoyDevelopment === "yes") {
        compSLAM += 1;
      } else {
        compSISR += 1;
      }

      if (ecran === "yes") {
        compSLAM += 1;
      } else {
        compSISR += 1;
      }



      let results = "<p id='formulaire'>Merci d'avoir répondu à nos questions ! <br></p>";
      if (compSLAM > compSISR) {
        results += "<p id='formulaire'>Vos réponses montrent que vous devriez vous orientez vers l'option SLAM <br>"
      } else if (compSISR > compSLAM) {
        results += "<p id='formulaire'>Vos réponses montrent que vous devriez vous orientez vers l'option SISR<br><p>"
      } else if (compSISR === compSLAM) {
        results += "<p id='formulaire'>Vous êtes équilibrés <br></p>"
      }

      document.getElementById("results").innerHTML = results;
    }