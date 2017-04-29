$(document).ready(function () {
  Morris.Donut({
      element: 'skills-chart',
      data: [{
          label: "Android",
          value: 10
      }, {
          label: "C/C++",
          value: 5
      },{
        label: "Java",
        value: 5
      }],
      resize: true,
      colors: ['green','red','yellow']
  });
});
