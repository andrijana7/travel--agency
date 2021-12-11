window.onload = function () {

    ///proba

    let selection=document.querySelector('select');
  
       
      
     
     

  //ispis menija

        function ispisMenija() {
        var meni = ["Destinations", "Special offers", "Portfolio", "Contact"];
        let ul = document.getElementById('meni_ul')
        meni.forEach((item) => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute("href", "#");
            li.appendChild(a);
            li.classList.add("nav-item");
            ul.appendChild(li);
            a.classList.add("nav-link" );
            a.innerHTML = item;
            a.id = item;
            a.addEventListener('click',function(e){
                e.preventDefault();
                switch (e.target.id) {
                    case "Destinations":
                        a.setAttribute("href", item);
                        let destination = document.getElementById('portfolio');
                        destination.scrollIntoView()
                        
                      break;
                    case "Special offers":
                        a.setAttribute("href",item);
                        let about = document.getElementById('about');
                        about.scrollIntoView()
                      break;
                    case "Portfolio":
                        a.setAttribute("href",item);
                        let team = document.getElementById('team');
                        team.scrollIntoView()
                      break;
                    case "Contact":
                      a.setAttribute("href",item);
                      let contact = document.getElementById('contact');
                      contact.scrollIntoView()
                      break;
                  }
                


            })
        })
    };


    // ispis naslova

    var elem = document.getElementById("text");
    var text = ["Where do you want to go next?", "Our team is waiting to assist you!"];
    var counter = 0;
    var inst = setInterval(change, 3000);

    function change() {
        elem.innerHTML = text[counter];
        counter++;
        if (counter >= text.length) {
            counter = 0;
        }
    }

//ispis galerije 

    function ispisSlika() {
        var nizSlika = [
            {
                key: "Greece",
                slika: {
                    alt: "greece",
                    src: "assets/img/portfolio/greece1.jpg"
                },
                content: ""
            },
            {
                key: "Bora Bora",
                slika: {
                    alt: "bora-bora",
                    src: "assets/img/portfolio/bora.jpg"
                },
                content: ""

            },
            {
                key: "Egypt",
                slika: {
                    alt: "egypt",
                    src: "assets/img/portfolio/egypt.jpg"
                },
                content: ""

            },
            {
                key: "Moscow",
                slika: {
                    alt: "moscow",
                    src: "assets/img/portfolio/moscow.jpg"
                },
                content: ""

            },
            {
                key: "Rome",
                slika: {
                    alt: "rome",
                    src: "assets/img/portfolio/rome.jpg"
                },
                content: ""

            },
            {
                key: "New York",
                slika: {
                    alt: "new-york",
                    src: "assets/img/portfolio/ny.jpg"
                },
                content: ""

            }
        ];

        var ispis = "";
        for (var obj of nizSlika) {
            ispis += `
                    <div class="col-lg-4 col-sm-6 mb-4">
                                <div class="portfolio-item">
                                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                        <div class="portfolio-hover">
                                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                        </div>
                                        <img class="img-fluid" src="${obj.slika.src}" alt="${obj.slika.alt}"  />
                                    </a>
                                    <div class="portfolio-caption">
                                        <div class="portfolio-caption-heading" >${obj.key}</div>
                                        <div class="portfolio-caption-subheading text-muted">${obj.content}</div>
                                    </div>
                                </div>
                            </div>
                   
                    `
        }
        document.getElementById("slikaDiv").innerHTML = ispis;
    }

//ispis ponude 

    function ispisPonude() {
        var nizPonude = [
            {
                naslov: "For our oldest",
                opis: "Always wanted to visit the city of your dreams but never got the chance?In your senior years you finally have the time to go where ever you want and see all the fhings you dreamed about. Our senior program can help with that. Great quality and lower prices.",
                slika: {
                    src: "assets/img/about/senior.jpg",
                    alt: "seniro-couple"
                }
            },
            {
                naslov: "For students",
                opis: "Enjoy your summer break with your friends at some of the best beaches and best Djs in the world!!! We also offer help for students exchange!!!Call us for more info.",
                slika: {
                    src: "assets/img/about/students.jpg",
                    alt: "students"
                }
            },
            {
                naslov: "Just married",
                opis: "May the first steps you take together be the most beautiful You pick the destination and tell us what you want and we will arrange everything so your honeymoon is a dream come true. Newlyweds have a special discounts on plane tickets",
                slika: {
                    src: "assets/img/about/bride.jpg",
                    alt: "just-married"
                }
            }
        ];

        var ispis = "";
        for (var pon of nizPonude) {
            ispis += `
            <li>
            <div class="timeline-image"><img class="rounded-circle img-fluid" src="${pon.slika.src}" alt="${pon.slika.alt}" /></div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h4>${pon.naslov}</h4>
                
                </div>
                <div class="timeline-body"><p class="text-muted">${pon.opis}</p></div>
            </div>
        </li>
            `


            document.getElementById("timeline").innerHTML = ispis;

        }
        $("#timeline li:odd").addClass("timeline-inverted");

    }


//portfolio

    function ispisAutor() {
        var autor = [{

            
                slika:{
                    src:"assets/img/team/ja.jpg",
                    alt:"myself"
                },

            punoIme: {
                ime: "Andrijana",
                prezime: "Vasic"
            },
            opis: "Hi, my name is Andrijana Vasić. I was born the second of February 1995. in Pančevo. I finished high school of Pharmacy in Pančevo and now I am studying ICT Collage. Aside from that, I am a part time waitress in a coffee shop called 'Brasileiro'. I am creative, friendly, communicative person and I am capable of working under preasure. ",
            social: {
                twitter: {
                    class: "fab fa-twitter",
                    href: "https://twitter.com/?lang=sr"
                },
                facebook: {
                    class: "fab fa-facebook",
                    href: "https://www.facebook.com/janaczbg/"
                },
                insta: {
                    class: "fab fa-instagram",
                    href: "https://www.instagram.com/andrijana_vasic7/"
                }
            },
           
        }];

        var ispis = "";
        for (var au of autor) {
            ispis += `
            <div class="col-lg-12">
                <div class="team-member">
                 <img class="mx-auto rounded-circle" src="${au.slika.src}" alt="${au.slika.alt}" />
                 <h4> <a href="#" id="proba"> ${au.punoIme.ime} ${au.punoIme.prezime} </a></h4>
                <p id="toggle" class="text-muted"> ${au.opis} </p>
                    <a class="btn btn-dark btn-social mx-2" href="${au.social.twitter.href}"><i class="${au.social.twitter.class}"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="${au.social.facebook.href}"><i class="${au.social.facebook.class}"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="${au.social.insta.href}"><i class="${au.social.insta.class}"></i></a>
                </div>
                </div>
    `
        }


        document.getElementById("tim").innerHTML = ispis;

    };


//forma

const form=document.getElementById('contactForm')
const name=document.getElementById('name')
const email=document.getElementById('email')
const phone=document.getElementById('phone')
const message=document.getElementById('message')
form.addEventListener("submit",(e) => {
e.preventDefault()
proveraForme();

})
function setSuccess(rezultat){
    console.log(rezultat)
}
function setError(message){
    console.log(message)
}
function proveraForme(){
    const nameV=name.value.trim()
    const emailV=email.value.trim()
    const phoneV=phone.value.trim()
    const messageV=message.value.trim()

    function validateNumber(phone)
    {
        return /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(phone);
        
    }

    function isEmailValid(emailV) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          emailV
        );
      }
    if(nameV === ""){
        setError("Ne moze prazno ime!")
        errorName.innerHTML= `<p class="errorsWrong"> Insert your name please </p>`
    }
    else {
        setSuccess(nameV)
        errorName.innerHTML= `<p class="errorsNone"> What a nice name! </p>`
    }
    if(emailV === ""){
        setError("Ne moze prazan email")
        errorEmail.innerHTML= `<p class="errorsWrong"> Insert your email please </p>`
    }
    else if(!isEmailValid(emailV)){
        setError("Email is not valid!")
        errorEmail.innerHTML= `<p class="errorsWrong"> Insert your email in corect form please </p>`
    }
    else {
        setSuccess(emailV)
        errorEmail.innerHTML= `<p class="errorsNone"> We will send you an email </p>`
    }
    if(!validateNumber(phoneV)){
        setError("Phone is not valid!")
        errorPhone.innerHTML= `<p class="errorsWrong"> Insert your phone number please </p>`
    }
    else{
        setSuccess(phoneV)
        errorPhone.innerHTML= `<p class="errorsNone"> You will receve a call wery soon</p>`
    }
    if(messageV === ""){
        setError("Ne moze prazna poruka")
        errorMess.innerHTML= `<p class="errorsWrong"> Please enter message </p>`
    }
    else{
        setSuccess(messageV)
        errorMess.innerHTML= `<p class="errorsNone"> You will get your response soon </p>`
    }
}
    


function ispisSponzori() {
    var sponzori = [
        {
            slika: {
                alt: 'sponzor1',
                src: 'assets/img/logos/slika1.jpg'
            }
        },
        {
            slika: {
                alt: 'sponzor2',
                src: 'assets/img/logos/slika2.jpg'
            }
        },
        {
            slika: {
                alt: 'sponzor3',
                src: 'assets/img/logos/slika3.jpg'
            }
        },
        {
            slika: {
                alt: 'sponzor4',
                src: 'assets/img/logos/slika4.jpg'
            }
        }
    ];

    var ispis = "";
    for (var s of sponzori) {
        ispis += `
        <div class="col-md-3 col-sm-6 my-3" id="link">
        <a href="${s.slika.src}"><img class="img-fluid d-block mx-auto"
                src="${s.slika.src}" alt="${s.slika.alt}" /></a>
    </div>
        `
    }

    document.getElementById("divZaSponzore").innerHTML = ispis;
}


//futer


function ispisFuter() {
    var footer = [{

        content:"Copyright © Andrijana Vasic 81/19",
        social: {
            rss: {
                class: "fas fa-rss",
                href: "rss.xml"
            },
            sitemap: {
                class: "fas fa-sitemap",
                href: "sitemap.xml"
            },
            github: {
                class: "fab fa-github",
                href: "https://github.com/"
            }
        },
        dokument:{
            href:"documentation.pdf",
            content:"Documentation"
        }
       
    }];

    var ispis = "";
    for (var fu of footer) {
        ispis += `
        <div class="col-lg-4 text-lg-left">${fu.content}</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="${fu.social.rss.href}"><i class="${fu.social.rss.class}"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="${fu.social.sitemap.href}"><i class="${fu.social.sitemap.class}"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="${fu.social.github.href}"><i class="${fu.social.github.class}"></i></a>
                    </div>
                    <div class="col-lg-4 text-lg-right">
                        <a class="mr-3" href="${fu.dokument.href}">${fu.dokument.content}</a>
                      
                    </div>
        
`
    }


    document.getElementById("futer").innerHTML = ispis;

};
    //ispis funkcija

    ispisMenija();
    ispisSlika();
    ispisPonude();
    ispisAutor();
    timer();
    ispisSponzori();
    ispisFuter();
    

    // JQuery kod za toggle opisa
    document.getElementById("proba").addEventListener("click", function (e) {
        e.preventDefault();
        // alert("cao!");
        let klasa = $("#toggle");
        klasa.toggle(function() {
            $(this).animate( {'display':'block'}, 2000, 'linear')
          }, function() {
            $(this).animate( {'display':'none'}, 2000, 'linear');
          });

    });


}

//timer

function timer (){
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
    let time = "December 31, 2021 20:32:00";
    let countDown = new Date(time).getTime(),
    x = setInterval(function () {

        let now = new Date().getTime(),
            distance = countDown - now;

            document.getElementById('days').innerText = Math.floor(distance / (day)) + ' days',
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)) + ' hours',
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)) + ' minutes',
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second) + ' seconds';

        if (distance <= 0) {

            document.getElementById('days').innerText = ('0 days');
            document.getElementById('hours').innerText = ('0 hours');
            document.getElementById('minutes').innerText = ('0 minutes');
            document.getElementById('seconds').innerText = ('0 seconds');

            
            document.getElementById("divTimerExpired").style.display = "block";

        }

    }, second)
}



