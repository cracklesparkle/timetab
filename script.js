d3.text("data.csv", function(data) {
    var parsedCSV = d3.csvParseRows(data);
    
    tableToHtml(parsedCSV, 1, 6, "#week1");
    tableToHtml(parsedCSV, 7, 12, "#week2");

    // var container1 = d3.select("body")
    //     .append("table")

    //     .selectAll("tr")
    //         .data(parsedCSV.slice(0,7)).enter()
    //         .append("tr")

    //     .selectAll("td")
    //         .data(function(d) { return d.slice(0, 6); }).enter()
    //         .append("td")
    //         .text(function(d) { return d; });
});

function tableToHtml(p, a, b, id){
    var x = 0;
    var y = 7;
    //первая неделя
    for(let i = 0; i < 6; i++){
        d3.select(id)
        .append("div").attr('class', 'box')
        .append("div").attr('class', 'content')
        .append("table")
        
        .selectAll("tr")
            
            .data(p.slice(x,y)).enter()
            .append("tr")
            .attr('class', function(d) { 
                if (d.slice(1,2) == 'Пн.' || 
                d.slice(1,2) == 'Вт.' || 
                d.slice(1,2) == 'Ср.' || 
                d.slice(1,2) == 'Чт.' || 
                d.slice(1,2) == 'Пт.' || 
                d.slice(1,2) == 'Сб.') return 'header';
            })

        .selectAll("td")
            .data(function(d) { return d.slice(a, b); }).enter()
            .append("td")
            .html(function(d) { return d; });
        x = x + 8;
        y = y + 8;
        console.log(x, y);
    }
}