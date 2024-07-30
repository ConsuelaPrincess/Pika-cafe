//scroll
        const scroll = new LocomotiveScroll({
            el: document.querySelector("#scroll-zone"),
            smooth: true,
            lerp: 0.05,
            repeat: true,
            tablet:{
                smooth:true,
                breakpoint:250
            },
            smartphone:{
                smooth:false
            }
        });

//navbar
        document.addEventListener('DOMContentLoaded', () => {
            const hamburger = document.querySelector('.hamburger');
            const navbar = document.querySelector('.navbar');
            const navbaroutline = document.querySelector('.navbar-outline');
            const navlinks = document.querySelector('.nav-links');

            hamburger.addEventListener('click', () => {
                navbar.classList.toggle('active');
                navbaroutline.classList.toggle('active');
                navlinks.classList.toggle('active');
                });
        });

//customized cake flavor
        function showImage1(imageId1) {
            const chiffonCakeImages = document.querySelectorAll('.chiffon-cake-container img');
            chiffonCakeImages.forEach(img => {
                img.style.display = 'none';
            });
            document.getElementById('img-' + imageId1).style.display = 'block';

            const labels1 = document.querySelectorAll('.chiffon-cake-container label');
            labels1.forEach(label => {
                label.classList.remove('selected-label');
            });

            const selectedLabel1 = document.querySelector(`label[for="${imageId1}"]`);
            if (selectedLabel1) {
                selectedLabel1.classList.add('selected-label');
            }
        }

        function showImage2(imageId2) { 
            const creamImages = document.querySelectorAll('.cream-container img');
            creamImages.forEach(img => {
                img.style.display = 'none';
            });
            document.getElementById('img-' + imageId2).style.display = 'block';

            const labels2 = document.querySelectorAll('.cream-container label');
            labels2.forEach(label => {
                label.classList.remove('selected-label');
            });

            const selectedLabel2 = document.querySelector(`label[for="${imageId2}"]`);
            if (selectedLabel2) {
                selectedLabel2.classList.add('selected-label');
            }
        }

        function showImage3(imageId3) {
            const fillingImages = document.querySelectorAll('.filling-container img');
            fillingImages.forEach(img => {
                img.style.display = 'none';
            });
            document.getElementById('img-' + imageId3).style.display = 'block';

            const labels3 = document.querySelectorAll('.filling-container label');
            labels3.forEach(label => {
                label.classList.remove('selected-label');
            });

            const selectedLabel3 = document.querySelector(`label[for="${imageId3}"]`);
            if (selectedLabel3) {
                selectedLabel3.classList.add('selected-label');
            }
        }
