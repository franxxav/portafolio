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
  });
};
