function findHighestMarks() {
    // Get input values
    var marks1 = parseInt(document.getElementById('marks1').value);
    var marks2 = parseInt(document.getElementById('marks2').value);
    var marks3 = parseInt(document.getElementById('marks3').value);
    var marks4 = parseInt(document.getElementById('marks4').value);
    var marks5 = parseInt(document.getElementById('marks5').value);

    // Create an array of marks
    var marks = [marks1, marks2, marks3, marks4, marks5];

    // Initialize highestMarks with the first element of the array
    var highestMarks = marks[0];

    // Iterate through the remaining elements
    for (var i = 1; i < marks.length; i++) {
      // Check if the current element is greater than highestMarks
      highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }

    // Display the highestMarks
    document.getElementById('result').innerHTML = "The highest marks scored <br> by any student: " + highestMarks;
  }


