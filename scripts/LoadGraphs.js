$(document).ready(function(){
    $(".dropdown-button").dropdown({hover: true});

    n = 0;
    while(data[n] != undefined){
        createCard(data[n]);
        n++;
    }

    function createCard(gdata){
        let card = $("<div></div>").addClass("card graphs-card");
            let titlelink = $("<a></a>").attr("href", gdata.link).attr("target", "_blank");
                let titlespan = $("<span></span>").addClass("card-title").text(gdata.title);
            titlelink.append(titlespan);
            let graphdisplay = $("<div></div>").addClass("graphs-image");
                let frame = $("<iframe></iframe>").attr("src", gdata.link + "?embed").attr("frameborder", "0");
            graphdisplay.append(frame);
            let cardcont = $("<div></div>").addClass("card-content");
                let par = $("<p></p>").text(gdata.description);
            cardcont.append(par);
        card.append(titlelink).append(graphdisplay).append(cardcont);
        $(".flex-container").append(card);

    }
});