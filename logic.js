
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