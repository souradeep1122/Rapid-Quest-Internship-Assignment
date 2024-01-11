
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["20","","25","","30","","35","","40","","45","","50"],
    
    datasets: [
      {
        type: 'bar',
        label:"Employee",
        
        data: [20, 23, 25, 28, 30, 33, 35, 38,40,50,60,63,65],
        borderWidth: 1,
        backgroundColor: 'blue',
        width:'10px',
      },
    ],
  },
  options: {
    scales: {
      x: {
          grid: {
              color: 'white'
          },

    
  
        beginAtZero: true,
      },
    },
  },
});

//Mobile
const ctx2 = document.getElementById("myChart-mob");

new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["20","","25","","30","","35","","40","","45","","50"],
    
    datasets: [
      {
        type: 'bar',
        label:"Employee:$52,00",
        
        data: [20, 23, 25, 28, 30, 33, 35, 38,40,50,60,63,65],
        borderWidth: 1,
        backgroundColor: 'blue',
        width:'10px',
      },
    ],
  },
  options: {
    scales: {
      x: {
          grid: {
              color: 'white'
          },

    
  
        beginAtZero: true,
      },
    },
  },
});



//circular progree bar
document.addEventListener("DOMContentLoaded", function() {
  const circles = document.querySelectorAll('.progress-circle');
  circles.forEach(circle => {
    const progressValue = circle.dataset.progress;
    const circleProgress = circle.querySelector('.progress');
    const radius = circleProgress.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progressValue / 100) * circumference;
    
    circleProgress.style.strokeDasharray = `${circumference}`;
    circleProgress.style.strokeDashoffset = `${offset}`;
  });
});