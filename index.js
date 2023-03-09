
function buttonDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };


 
  const dlValue = movieData["The Darjeeling Limited"];
  console.log(Object.values(dlValue));

  const fmfValue = movieData["Fantastic Mr. Fox"]
  console.log(Object.values(fmfValue));

  const rtValue = movieData["The Royal Tenenbaums"]
  console.log(Object.values(rtValue));

  const gbhValue = movieData["The Grand Budapest Hotel"]
  console.log(Object.values(gbhValue));

  for (const [key, value] of Object.entries(dlValue)) {
    console.log(`${key}: ${value}`);
  }

  const para1 = document.createElement("p");
  para1.innerHTML = (Object.entries(dlValue))

  document.getElementById("dl").onclick = function() {getdl()};

  function getdl() {
    document.getElementById("movietext").appendChild(para1);
  }

  const para2 = document.createElement("p");
  para2.innerHTML = (Object.values(fmfValue))

  document.getElementById("fmf").onclick = function() {getfmf()};

  function getfmf() {
    document.getElementById("movietext").appendChild(para2);
  }


 

  