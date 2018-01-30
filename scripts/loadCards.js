$(document).ready(function(){
    $(".dropdown-button").dropdown({hover: true});

    n = 0;
    while(data[n] != undefined){
        createCard(data[n]);
        n++;
    }

    function createCard(gdata){
        let card = $("<div></div>").addClass("card about-card");

            // let titlelink = $("<a></a>").attr("href", gdata.link).attr("target", "_blank");
            // titlelink.append(titlespan);
            let imgwrap = $("<div></div>").addClass("about-imgwrap");
                let image = $("<img></img>").attr("src", "images/" + gdata.picture).addClass("about-img");

            imgwrap.append(image);
            let titlelink = $("<div></div>").addClass("about-link").attr("href", gdata.link);
                 let titlespan = $("<span></span>").addClass("about-title").text(gdata.title);
            titlelink.append(titlespan);
            let cardcont = $("<div></div>").addClass("card-content");
                let par = $("<p></p>").text(gdata.description);
            cardcont.append(par);

        let link = $("<a></a>").attr("href", gdata.link);

        link.append(imgwrap).append(titlelink).append(cardcont);
        card.append(link);
        $(".flex-container").append(card);

    }
});