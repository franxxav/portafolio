window.onload = function() {
  let Vermas1 = document.querySelectorAll(".Project1 .Vermas");
  Vermas1[0].addEventListener("click", event => {
    let ProjectSections = document.querySelectorAll(
      ".Project1 .ProjectSection"
    );
    let ProjectIntro = document.querySelectorAll(".Project1 .ProjectText");
    let ParentContainer = event.currentTarget.parentNode.parentNode.parentNode;
    ParentContainer.style.height = "fit-content";
    ProjectIntro[0].style.display = "none";
    for (let i = 0; i < ProjectSections.length; i++) {
      ProjectSections[i].style.display = "initial";
    }
  });
  let Vermas3 = document.querySelectorAll(".Project3 .Vermas");
  Vermas3[0].addEventListener("click", event => {
    let ProjectSections = document.querySelectorAll(
      ".Project3 .ProjectSection"
    );
    let ProjectIntro = document.querySelectorAll(".Project3 .ProjectText");
    let ParentContainer = event.currentTarget.parentNode.parentNode.parentNode;
    ParentContainer.style.height = "fit-content";
    ProjectIntro[0].style.display = "none";
    for (let i = 0; i < ProjectSections.length; i++) {
      ProjectSections[i].style.display = "initial";
    }
    let Project3 = document.querySelectorAll(".Project3");
    Project3[0].style.color ="#FFFFFF"
  });

  let Vermenos1 = document.querySelectorAll(".Project1 .VerMenos");
  Vermenos1[0].addEventListener("click", event => {
    let ProjectSections = document.querySelectorAll(
      ".Project1 .ProjectSection"
    );
    let ProjectIntro = document.querySelectorAll(".Project1 .ProjectText");
    let ParentContainer = event.currentTarget.parentNode.parentNode;
    ParentContainer.style.height = "95vh";
    ProjectIntro[0].style.display = "initial";
    for (let i = 0; i < ProjectSections.length; i++) {
      ProjectSections[i].style.display = "none";
    }
    let Project1 = document.querySelectorAll(".Project1");
    Project1[0].scrollIntoView()
  });

  let Vermenos3 = document.querySelectorAll(".Project3 .VerMenos");
  Vermenos3[0].addEventListener("click", event => {
    let ProjectSections = document.querySelectorAll(
      ".Project3 .ProjectSection"
    );
    let ProjectIntro = document.querySelectorAll(".Project3 .ProjectText");
    let ParentContainer = event.currentTarget.parentNode.parentNode;
    ParentContainer.style.height = "95vh";
    ProjectIntro[0].style.display = "initial";
    for (let i = 0; i < ProjectSections.length; i++) {
      ProjectSections[i].style.display = "none";
    }
    let Project3 = document.querySelectorAll(".Project3");
    Project3[0].style.color ="#FF7575"
    Project3[0].scrollIntoView()
});
}