
document.addEventListener('DOMContentLoaded', function () {
  console.log("Loaded html")
  // aboutMeSection.posi
  function changeBackgroundColor() {
    // Get the current scroll position
    var scrollPosition = window.scrollY;

    var aboutMeSection = document.querySelector('#about-me-section');
  //Get the position and dimensions (details) of the element using the getBoundingClientRect() method
    const aboutMeSection_details = aboutMeSection.getBoundingClientRect();

    var skillsSection_row = document.querySelector('#skills-section .row');
    const skillsSection_row_details = skillsSection_row.getBoundingClientRect();

    var body = document.querySelector("body");


    // Check if the scroll position is greater than or equal to the specified position (15px from the top)
    if ( skillsSection_row_details.bottom <= 300) {
      body.classList.remove("white-theme"); 
      body.classList.add("bg-black") ; /**Changes from white theme to black theme */

    } else if (aboutMeSection_details.top <=160 ) {
      // body.style.backgroundColor = '#3498db'; // Reset to the initial background color
      body.classList.remove("bg-black"); 
      body.classList.add("white-theme") ;/**Changes from black theme to white theme */
      // console.log("White theme")
      // console.log('About me section top:', aboutMeSection_details.top);
    }else{
      body.classList.remove("white-theme"); 
      body.classList.add("bg-black") ; /**Changes from white theme to black theme */
      // console.log("Black-theme")
    }

  }

  // Listen for the scroll event and call the function to check the position
  window.addEventListener('scroll', changeBackgroundColor);


  //to rotate the specific arrow-icon in the prject section
  const proj_buttons = document.querySelectorAll(".accordion-header button");
  console.log("Accordian buttons found!")
  console.log(proj_buttons);


  proj_buttons.forEach( function(button){
    //loop through each button in the proj_button array
    const buttonId = button.id;
    button.addEventListener("click", function(){
      rotateArrowIcon(buttonId)
    }); //adds the click event to all the project buttons

  })

  function rotateArrowIcon(active_buttonID){
    console.log(active_buttonID + " Button clicked!")
    const clicked_proj_button = document.getElementById(active_buttonID);

    const arrowIcon = document.querySelectorAll("#"+active_buttonID+" svg")[0];

    console.log(arrowIcon);
    if (clicked_proj_button.classList.contains("collapsed")){
      //if the button contains the collapsed class => that button is inactive
      arrowIcon.classList.remove("active-arrow-icon")
      arrowIcon.classList.add("inactive-arrow-icon");
      
      

    }else{
      //if the button does not contains the collapsed class => that button is active
      arrowIcon.classList.add("active-arrow-icon")
      arrowIcon.classList.remove("inactive-arrow-icon");

    }

    proj_buttons.forEach(function(button){
      console.log("Post search: Current button id: "+ button.id)
      const currentButttonIcon =  document.querySelectorAll("#"+button.id+" svg")[0];

      if ( (button.id != active_buttonID) && (currentButttonIcon.classList.contains("active-arrow-icon"))){
        console.log(button);
        const arrowIcon = document.querySelectorAll("#"+button.id+" svg")[0];
        arrowIcon.classList.remove("active-arrow-icon");
        arrowIcon.classList.add("inactive-arrow-icon");

      }
    })
    
    

  }//end of function reposible for rotating the icons

});