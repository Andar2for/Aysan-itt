// تهيئة Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
});

// زر التمرير للأعلى
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// إضافة تأثير التمرير الناعم
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// إضافة مؤثرات عند التمرير
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

// التحقق من صحة نموذج تسجيل الدخول
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "user" && password === "password") {
        alert("تم تسجيل الدخول بنجاح!");
        window.location.href = "index.html"; // توجيه المستخدم إلى الصفحة الرئيسية
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
    }
});

// التحقق من صحة نموذج التسجيل
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("كلمة المرور غير متطابقة!");
        return;
    }

    // يمكنك هنا إضافة كود لإرسال البيانات إلى الخادم
    alert("تم إنشاء الحساب بنجاح!");
    window.location.href = "login.html"; // توجيه المستخدم إلى صفحة تسجيل الدخول
});

});