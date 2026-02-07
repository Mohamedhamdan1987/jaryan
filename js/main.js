// ===================================
// Article Data
// ===================================
const articles = {
    1: {
        title: 'قوة "عربة الشفط والتسليك": الحل الجذري لأصعب الانسدادات!',
        image: 'images/coolage1.jpg',
        content: 'هل تعاني من انسداد متكرر أو طفح مجاري لا تحله الطرق العادية؟ عربة الشفط والتسليك لدينا ليست مجرد سيارة، إنها محطة متنقلة بقوة ضغط هائلة لسحب الرواسب الصلبة، وطرد الانسدادات المستعصية. ودّع مشاكل الصرف للأبد.'
    },
    2: {
        title: 'كيف تحميك عربة الشفط والتسليك من الأمراض والروائح الكريهة؟',
        image: 'images/coolage2.jpg',
        content: 'مشاكل الصرف ليست مجرد إزعاج؛ بل هي خطر صحي يهدد أسرتك. عربتنا المتطورة لا تكتفي بالتسليك فقط، بل تقوم بشفط المخلفات السائلة والصلبة بالكامل، وترك المكان نظيفًا ومعقمًا. هذا يضمن القضاء على مصادر الروائح الكريهة وتكاثر الجراثيم.'
    },
    3: {
        title: '"عربة الطوارئ" جاهزة للوصول في أي وقت: لا تدع مشكلة الصرف تنتظرك!',
        image: 'images/coolage3.jpg',
        content: 'انسداد المجاري لا ينتظر المواعيد! لذلك، عربة الشفط والتسليك الخاصة بنا في أهبة الاستعداد 24/7. بمجرد اتصالك، نصل إليك بأقصى سرعة، مزودين بكل ما يلزم لحل المشكلة فورًا وعلى الفور. وقتك وصحة بيتك أهم أولوياتنا.'
    },
    4: {
        title: '5 علامات تحذيرية تخبرك أن "كارثة" انسداد المجاري اقتربت!',
        image: 'images/warning_signs.webp',
        content: 'لا تنتظر حتى يفيض الماء! إذا لاحظت بطء في تصريف الأحواض، أو سمعت أصوات "قرقرة" في المواسير، أو شممت روائح كريهة مفاجئة، فهذا يعني أن هناك انسداداً يتكون. نحن نستخدم تقنيات التصوير بالكاميرات لتحديد مكان السدد بدقة دون تكسير.'
    },
    5: {
        title: 'لماذا لا يكفي "الأسيد" والطرق التقليدية لتسليك المجاري؟',
        image: 'images/methods_comparison.webp',
        content: 'المواد الكيميائية قد تسبب تآكل المواسير وتلفها على المدى البعيد. في خدماتنا، نعتمد على "ضغط النيتروجين" و "ماكينات السوستة الكهربائية" التي تزيل الدهون والرواسب الصلبة من الجذور، مما يضمن عدم عودة الانسداد لسنوات.'
    },
    6: {
        title: 'كيف تحافظ على منزلك من أخطار تسربات الصرف الصحي؟',
        image: 'images/prevention_tips.webp',
        content: 'إهمال انسداد المجاري قد يؤدي لتسرب المياه تحت الأرضية وتآكل الخرسانة. الوقاية دائماً أرخص من الترميم. نحن نقدم فحصاً شاملاً لشبكة الصرف مع كل عملية تسليك لنضمن سلامة أساسات منزلك.'
    }
};

// ===================================
// Mobile Menu Toggle
// ===================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// ===================================
// Smooth Scrolling
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#aboutLink') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Article Modal
// ===================================
const articleModal = document.getElementById('articleModal');
const modalBody = document.getElementById('modalBody');
const articleCards = document.querySelectorAll('.article-card');

articleCards.forEach(card => {
    card.addEventListener('click', () => {
        const articleId = card.getAttribute('data-article');
        const article = articles[articleId];
        
        if (article) {
            modalBody.innerHTML = `
                <h2 class="modal-title">${article.title}</h2>
                <img src="${article.image}" alt="${article.title}" style="width: 100%; border-radius: 15px; margin-bottom: 1.5rem;">
                <p class="modal-text">${article.content}</p>
                <div style="text-align: center; margin-top: 2rem;">
                    <button class="btn btn-primary" onclick="closeModal('articleModal')">
                        <span style="margin-left: 0.5rem;">✓</span>
                        فهمت ذلك
                    </button>
                </div>
            `;
            articleModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// ===================================
// About Modal
// ===================================
const aboutModal = document.getElementById('aboutModal');
const aboutLink = document.getElementById('aboutLink');

if (aboutLink) {
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        aboutModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// ===================================
// Close Modal Function
// ===================================
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking close button
document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
});

// ===================================
// Lazy Loading Images
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Header Scroll Effect
// ===================================
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.2)';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Performance: Reduce animations on low-end devices
// ===================================
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    document.body.classList.add('reduce-motion');
}

// ===================================
// Console Message
// ===================================
console.log('%cجريان لخدمات الصرف الصحي', 'font-size: 20px; font-weight: bold; color: #0066CC;');
console.log('%cنصلك أينما كنت في الدمام 🚰', 'font-size: 14px; color: #25D366;');
console.log('%cللتواصل: 0549573700', 'font-size: 12px;');
