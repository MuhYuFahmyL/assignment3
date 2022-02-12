function getDataTable(){
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://covid-193.p.rapidapi.com/statistics",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "43405c845dmsh6d87a4af8bca278p1aac4ejsn75e4022ef80d"
      }
    };

    $.ajax(settings).done(function (response) {
      $('table').find('tbody').html("")
      response.response.forEach(function(item,index){
        $('table').find('tbody').append(`<tr><td>${item.country}</td><td>${(item.cases.active?item.cases.active:0).toLocaleString()}</td><td>${(item.cases.recovered?item.cases.recovered:0).toLocaleString()}</td><td>${(item.deaths.total?item.deaths.total:0).toLocaleString()}</td></tr>`);
      })
    });
  }
  getDataTable()