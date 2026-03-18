// Smooth navigation highlight
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for scroll animations
const revealOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, revealOptions);

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// Projects Tab Logic
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding tab pane
        const targetId = btn.getAttribute('data-target');
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
            targetPane.classList.add('active');
        }
    });
});

// Layout Grid Animation Logic
const layoutCards = document.querySelectorAll('.layout-card');
const eventsGrid = document.querySelector('.events-layout-grid');
const overlay = document.getElementById('events-overlay');
let activeCard = null;

if (layoutCards.length > 0) {
    layoutCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (activeCard === this) {
                closeActiveCard();
                return;
            }

            if (activeCard) {
                activeCard.classList.remove('active-card');
            }

            this.classList.add('active-card');
            eventsGrid.classList.add('has-active');
            overlay.classList.add('active');
            document.body.classList.add('modal-open');
            activeCard = this;
        });
    });

    document.addEventListener('click', function(e) {
        if (activeCard && !activeCard.contains(e.target)) {
            closeActiveCard();
        }
    });

    function closeActiveCard() {
        if (activeCard) {
            activeCard.classList.remove('active-card');
            eventsGrid.classList.remove('has-active');
            overlay.classList.remove('active');
            document.body.classList.remove('modal-open');
            activeCard = null;
        }
    }
}

// Animated Grid Pattern Logic
function initGridPattern() {
    const container = document.getElementById('hero-grid-pattern-inner');
    const squaresContainer = document.getElementById('grid-squares-container');
    if (!container || !squaresContainer) return;

    const width = 40;
    const height = 40;
    const numSquares = 40;
    const maxOpacity = 0.15;
    const duration = 2400; // 20% faster than 3000
    
    let dimensions = { width: container.clientWidth, height: container.clientHeight };

    function getPos() {
        return [
            Math.floor((Math.random() * dimensions.width) / width),
            Math.floor((Math.random() * dimensions.height) / height),
        ];
    }

    function animateSquare(rect, delay) {
        const animation = rect.animate([
            { opacity: 0 },
            { opacity: maxOpacity },
            { opacity: 0 }
        ], {
            duration: duration * 2,
            delay: delay,
            easing: 'ease-in-out'
        });

        animation.onfinish = () => {
            const newPos = getPos();
            rect.setAttribute("x", newPos[0] * width + 1);
            rect.setAttribute("y", newPos[1] * height + 1);
            animateSquare(rect, 0); // Loop infinitely
        };
    }

    function createSquares() {
        squaresContainer.innerHTML = '';
        for (let i = 0; i < numSquares; i++) {
            const pos = getPos();
            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute("width", width - 1);
            rect.setAttribute("height", height - 1);
            rect.setAttribute("x", pos[0] * width + 1);
            rect.setAttribute("y", pos[1] * height + 1);
            rect.setAttribute("fill", "currentColor");
            rect.setAttribute("stroke-width", "0");
            rect.style.opacity = "0";
            squaresContainer.appendChild(rect);
            
            animateSquare(rect, i * 150);
        }
    }

    createSquares();

    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            dimensions = { width: entry.contentRect.width, height: entry.contentRect.height };
        }
    });
    resizeObserver.observe(container);
}

document.addEventListener("DOMContentLoaded", initGridPattern);
