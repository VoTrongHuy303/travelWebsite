var getMenu = document.querySelector('.nav__menu');
        console.log(getMenu);    
        document.getElementById('checkbox').onclick = function (e) {
            getMenu.classList.toggle("hide-element");
        };
        var count = 1;
        setInterval(() => {
            if (count > 5) {
                count = 1;
            }
            document.getElementById("radio" + count).checked = true;
            count++;
        }, 5000);

        ScrollReveal({
            reset: true,
            distance: '500px',
            duration: 2500,
            delay: 100
        });
        ScrollReveal().reveal('.header-content--title', { delay: 500, origin: 'top' });
        ScrollReveal().reveal('.header-content--subtitle', { delay: 500, origin: 'left' });
        ScrollReveal().reveal('.header-content--btn', { delay: 500, origin: 'bottom' });
        ScrollReveal().reveal('.introduce__content', { delay: 500, origin: 'right' });
        ScrollReveal().reveal('.introduce__img', { delay: 300, origin: 'left' });
        ScrollReveal().reveal('.popular-tour--title', { delay: 400, origin: 'right' });

        var getC1 = document.getElementById('c1');
        var getC2 = document.getElementById('c2');
        var getC3 = document.getElementById('c3');
        getC1.addEventListener('click', function(){
            document.documentElement.style.setProperty('--btn_main-color', 'rgb(35, 144, 233)');
            localStorage.setItem("pickcolor",'rgb(35, 144, 233)');
        });
        getC2.addEventListener('click', function(){
            document.documentElement.style.setProperty('--btn_main-color', 'orange');
            localStorage.setItem("pickcolor",'orange');
        });
        getC3.addEventListener('click', function(){
            document.documentElement.style.setProperty('--btn_main-color', 'green');
            localStorage.setItem("pickcolor",'green');
        });
        function loadtheme(){
            document.documentElement.style.setProperty('--btn_main-color', localStorage.getItem("pickcolor"));
            
        }