$(document).ready(function () {
    // Toggle navbar on menu click
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Handle scroll events
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Show scroll-to-top button
        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // Scroll spy for active navbar links
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

    // Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });

    // Formspree for contact form submission
    $("#contact-form").submit(function (event) {
        event.preventDefault();
        
        $.ajax({
            url: "https://formspree.io/f/xdayqbpw",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json",
            success: function(response) {
                console.log('SUCCESS!', response);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully!");
            },
            error: function(error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Please try again.");
            }
        });
    });

    // Change favicon and title on visibility change
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === "visible") {
            document.title = "Wilson Kabangi | AI Builder & Full Stack Developer";
            $("#favicon").attr("href", "assets/images/favicon.png");
        } else {
            document.title = "Come Back — Let's Build Something 🚀";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });

    // Typed.js effect for typing animation
    var typed = new Typed(".typing-text", {
        strings: [
            "build AI Agents.",
            "design LangChain Workflows.",
            "build Automation Systems.",
            "develop Full Stack Applications.",
            "ship Scalable Digital Solutions.",
            "engineer Multi-Agent Systems.",
        ],
        loop: true,
        typeSpeed: 55,
        backSpeed: 28,
        backDelay: 1200,
    });

    // Fetch skills and projects data
    async function fetchData(type = "skills") {
        let response;
        if (type === "skills") {
            response = await fetch("skills.json");
        } else {
            response = await fetch("./projects/projects.json");
        }
        const data = await response.json();
        return data;
    }

    // Display skills on the page
    function showSkills(skills) {
        let skillsContainer = document.getElementById("skillsContainer");
        let skillHTML = "";
        skills.forEach(skill => {
            skillHTML += `
            <div class="bar">
                <div class="info">
                    <img src="${skill.icon}" alt="skill" />
                    <span>${skill.name}</span>
                </div>
            </div>`;
        });
        skillsContainer.innerHTML = skillHTML;
    }

    // Display projects on the page
    function showProjects(projects) {
        let projectsContainer = document.querySelector("#work .box-container");
        let projectHTML = "";
        // Icon mapping by category
        const iconMap = {
            ai: "fas fa-robot",
            frontend: "fas fa-code",
            backend: "fas fa-server",
            fullstack: "fas fa-layer-group",
        };
        projects.slice(0, 10).filter(project => project.category !== "android").forEach(project => {
            const icon = iconMap[project.category] || "fas fa-project-diagram";
            projectHTML += `
            <div class="box tilt">
                <div class="project-placeholder">
                    <i class="${icon}"></i>
                    <span>${project.category || 'project'}</span>
                </div>
                <div class="content">
                    <div class="tag">
                        <h3>${project.name}</h3>
                    </div>
                    <div class="desc">
                        <p>${project.desc}</p>
                        <div class="btns">
                            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                        </div>
                    </div>
                </div>
            </div>`;
        });
        projectsContainer.innerHTML = projectHTML;

        // Initialize tilt effect on project boxes
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 15,
        });

        // Scroll reveal animation for projects
        const srtop = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 1000,
            reset: true
        });

        srtop.reveal('.work .box', { interval: 200 });
    }

    // Fetch and display skills and projects
    fetchData().then(data => {
        showSkills(data);
    });

    fetchData("projects").then(data => {
        showProjects(data);
    });

    // Disable developer tools access
    document.onkeydown = function (e) {
        if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && [73, 67, 74].includes(e.keyCode)) || (e.ctrlKey && e.keyCode == 85)) {
            return false;
        }
    };

;
});

