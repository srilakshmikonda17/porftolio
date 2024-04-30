$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });


    
    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("y3uVObpo0LxLWpA2u");

        // Capture form data before sending the form
        var userName = this.user_name.value;
        var userEmail = this.user_email.value;
        var userContact = this.contact_number.value;
        var userMessage = this.message.value;

        emailjs.send('service_z6ovmnu', 'template_9otfujy', {
            from_name: userName,
            email_id: userEmail,
            contact : userContact,
            message: userMessage
        })
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Srilakshmi Konda";
            $("#favicon").attr("href", "assets/images/favicon2.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Civil Engineer", "Project Engineer", "Construction Manager"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = [
            /*{
                "name" : "Java",
                "icon" : "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
            },
            {
                "name": "Python",
                "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
            },{
                "name" : "C",
                "icon" : "https://img.icons8.com/color/48/c-programming.png"
            },
            {
                "name" : "C++",
                "icon" : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            },
            {
                "name" : "C#",
                "icon" : "https://img.icons8.com/color/48/c-programming.png"
            },
            {
                "name" : "TCL",
                "icon" : "https://img.icons8.com/color/48/javascript--v1.png"
            }, 
            {
                "name" : "PySpark",
                "icon" : "https://img.icons8.com/color/48/javascript--v1.png"
            },
            {
                "name" : "HTML",
                "icon" : "https://img.icons8.com/color/48/html-5--v1.png"
            },{
                "name" : "CSS",
                "icon" : "https://img.icons8.com/color/48/css.png"
            },
            {
                "name" : "MongoDB",
                "icon" : "https://img.icons8.com/color/48/mongodb.png"
            },
            {
                "name": "MySQL",
                "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
            },
           /* {
                "name": "SQLServer",
                "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
            },
            {
                "name" : "HDFS",
                "icon" : "https://img.icons8.com/color/48/spring-logo.png"
            },
            {
                "name" : "Spark",
                "icon" : "https://img.icons8.com/color/48/spring-logo.png"
            },
            /*
            {
                "name" : "Snowflake",
                "icon" : "https://img.icons8.com/color/48/spring-logo.png"
            },
            {
                "name" : "Apache Airflow",
                "icon" : "https://img.icons8.com/color/48/spring-logo.png"
            },
            {
                "name" : "Apache Kafka",
                "icon" : "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-apache-a-free-and-open-source-cross-platform-web-server-software-logo-color-tal-revivo.png"
            },
            {
                "name" : "Pandas",
                "icon" : "https://img.icons8.com/color/48/pandas.png"
            },{
                "name" : "Flask",
                "icon" : "https://img.icons8.com/color/48/flask.png"
            },{
                "name" : "REST",
                "icon" : "https://img.icons8.com/color/48/api-settings.png"
            },{
                "name" : "AWS",
                "icon" : "https://img.icons8.com/color/48/amazon-web-services.png"
            },
            /*
            {
                "name" : "SPICE",
                "icon" : "https://img.icons8.com/color/48/amazon-web-services.png"
            },
            
            {
                "name" : "FastSPICE",
                "icon" : "https://img.icons8.com/color/48/amazon-web-services.png"
            },
            {
                "name" : "FastAPI",
                "icon" : "https://img.icons8.com/color/48/flask.png"
            },/*
            {
                "name" : "Selenium",
                "icon" : "https://img.icons8.com/color/48/flask.png"
            },
            {
                "name" : "Jira",
                "icon" : "https://img.icons8.com/color/48/flask.png"
            },
            {
                "name" : "Firebase",
                "icon" : "https://img.icons8.com/color/48/google-firebase-console.png"
            },{
                "name" : "Git",
                "icon" : "https://img.icons8.com/color/48/git.png"
            },{
                "name" : "BitBucket",
                "icon" : "https://img.icons8.com/color/48/bitbucket.png"
            },{
                "name" : "Postman",
                "icon" : "https://img.icons8.com/pulsar-color/48/postman-api.png"
            },{
                "name" : "FFMpeg",
                "icon" : "https://img.icons8.com/color/48/ffmpeg.png"
            },{
                "name" : "Docker",
                "icon" : "https://img.icons8.com/color/48/docker.png"
            },{
                "name" : "NumPy",
                "icon" : "https://img.icons8.com/color/48/numpy.png"
            },{
                "name" : "Confluence",
                "icon" : "https://img.icons8.com/color/48/confluence--v2.png"
            },
            {
                "name": "Tableau",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            }, 
            {
                "name": "PowerBI",
                "icon": "https://img.icons8.com/color/48/power-bi.png"
            }, 
            {
                "name": "VS Code",
                "icon": " https://img.icons8.com/fluency/48/visual-studio.png"
            },*/
            {
                "name": "AutoCAD",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            }, 
            {
                "name": "Civil 3D",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            }, 
            {
                "name": "Primavera P6",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            },
            {
                "name": "SketchUp",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            },
            {
                "name": "Bluebeam Revu 21",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            },
            {
                "name": "WinEst",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            },
            {
                "name": " STAAD Pro",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            },
            {
                "name": " ArcGIS Pro",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            }, 
            {
                "name": " ArchiCAD",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            },
            {
                "name": " FormIT",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            }, 
            {
                "name": " MS Project",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            },
            {
                "name": " Adobe InDesign",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            }, 
            {
                "name": "Revit 2024",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            },
            {
                "name": "Adobe Illustrator",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            },
            {
                "name": "Adobe Photoshop",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            },
            {
                "name": "Solidworks",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            },
            {
                "name": "Microsoft Office Suite",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            },
            {
                "name": "Google Earth Pro",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            },
            {
                "name": "Procore",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            },
            {
                "name": "SAP2000",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            },
            {
                "name": "Technical Writing",
                "icon": "https://img.icons8.com/color/48/000000/wordpress.png"
            },  
            {
                "name": "Architecture",
                "icon": "https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/48/external-structure-science-and-technology-icongeek26-outline-gradient-icongeek26.png"
            },
            {
                "name": "Video Edit",
                "icon": "https://img.icons8.com/fluency/48/video.png"
            },
            {
                "name": "Solutions",
                "icon": "https://img.icons8.com/color/48/solve-problem.png"
            },
            {
                "name": "Insights",
                "icon": "https://img.icons8.com/color/48/light.png"
            },
            {
                "name": "Research",
                "icon": "https://img.icons8.com/color/48/fine-print.png"
            },
            {
                "name": "Leadership",
                "icon": "https://img.icons8.com/color/48/meeting-room.png" 
            }
        ]
        :
        response =[
            {
              "name": "Cost & Production Analysis for Syphon Reservoir",
              "desc": "Estimated the total cost of the project, the equipment required, and location of dumpsites using Revit and Google Earth Pro",
              "image": "Youtube",
              "category": "visual",
              "links": {
                "view": "https://github.com/pradhatrivemula/Youtube-analysis-AWS",
               // "code": "https://github.com/pradhatrivemula/Youtube-analysis-AWS"
              }
            },
            {
                "name": "Self-Healing Capability of Concrete",
                "desc": "Published a research paper on “Self-healing Capability of Concrete under Three Dif erent Environmental Exposures.",
                "image": "Event",
                "category": "visual",
                "links": {
                  "view": "https://drive.google.com/file/d/1bAZHT5sBh_x9w8uXtUKTmtqHO_qZL9KS/view?usp=sharing",
                //  "code": "https://github.com/pradhatrivemula/EventFinder"
               }
              }
              ]
    const data = await response;
    return data;
}


function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

// ../images/projects/${project.image}.png

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="./assets/images/projects/${project.image}.png" alt="projecthello" />
      
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
              <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
           </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts
   // 
   // -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}




/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 700 });
srtop.reveal('.home .envelope', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

const mediaQuery = window.matchMedia('(min-width: 300px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  
    srtop.reveal('.education .box', { interval: 100 });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 100 });

    /* SCROLL EXPERIENCE */
    srtop.reveal('.experience .timeline', { delay: 200 });
    srtop.reveal('.experience .timeline .container', { interval: 200 });

    /* SCROLL CONTACT */
    srtop.reveal('.contact .container', { delay: 200 });
    srtop.reveal('.contact .container .form-group', { delay: 200 });
}