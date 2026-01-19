export function initHeroAnimation() {
    const heroContent = document.querySelector('.hero__content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('fade-in');
        }, 100);
    }
}

export function initProjectCardsAnimation() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
    });
}

export function initMirageTransition() {
    const wrapper = document.querySelector('.transition-wrapper');
    // セクションの順序定義（IDで指定）
    const sectionIds = ['hero', 'projects', 'about', 'contact'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(el => el);

    if (!wrapper || sections.length === 0) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateGlobalTransition(wrapper, sections);
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

function updateGlobalTransition(wrapper, sections) {
    const rect = wrapper.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const wrapperHeight = rect.height;

    const end = wrapperHeight - viewportHeight;
    const current = -rect.top;
    let globalProgress = Math.max(0, Math.min(1, current / end));

    const transitionCount = sections.length - 1;
    if (transitionCount <= 0) return;
    const stepSize = 1 / transitionCount;

    sections.forEach((section, index) => {
        if (index === sections.length - 1) return;

        const nextSection = sections[index + 1];

        const start = index * stepSize;
        const finish = (index + 1) * stepSize;
        let localProgress = 0;

        if (globalProgress >= start && globalProgress <= finish) {
            localProgress = (globalProgress - start) / stepSize;
        } else if (globalProgress > finish) {
            localProgress = 1;
        } else {
            localProgress = 0;
        }

        applyMirageEffect(section, nextSection, localProgress);
    });

    sections.forEach(section => {
        const opacity = parseFloat(window.getComputedStyle(section).opacity);
        if (opacity < 0.1) {
            section.style.pointerEvents = 'none';
        } else {
            section.style.pointerEvents = 'auto';
        }
    });
}

function applyMirageEffect(currentSection, nextSection, progress) {
    let delayedProgress = 0;
    if (progress > 0.2) {
        delayedProgress = (progress - 0.2) / 0.8;
    }

    if (progress >= 1) {
        currentSection.style.opacity = 0;
    } else if (progress <= 0) {
        currentSection.style.opacity = 1;
        currentSection.style.filter = 'none';
        currentSection.style.transform = 'scale(1)';

        const content = currentSection.querySelector('.hero__content, .about__content, .contact__content, .container');
        if (content) {
            content.style.transform = '';
            content.style.filter = '';
            content.style.opacity = '';
        }
    } else {
        if (delayedProgress < 0.6) {
            const p1 = delayedProgress / 0.6;
            currentSection.style.opacity = 1 - p1;
            currentSection.style.filter = `blur(${p1 * 10}px) brightness(${1 + p1 * 0.5})`;
            currentSection.style.transform = `scale(${1 + p1 * 0.1})`;

            const content = currentSection.querySelector('.hero__content, .about__content, .contact__content, .container');
            if (content) {
                content.style.transform = `translateY(-${p1 * 50}px) scale(${1 + p1 * 0.2})`;
                content.style.filter = `blur(${p1 * 20}px)`;
            }
        } else {
            currentSection.style.opacity = 0;
        }
    }

    if (progress >= 1) {
        nextSection.style.opacity = 1;
        nextSection.style.filter = 'none';
        nextSection.style.transform = 'scale(1)';
    } else if (progress <= 0) {
        nextSection.style.opacity = 0;
    } else {
        if (delayedProgress > 0.4) {
            const p2 = (delayedProgress - 0.4) / 0.6;
            nextSection.style.opacity = p2;
            nextSection.style.transform = `scale(${1.1 - p2 * 0.1})`;
            nextSection.style.filter = `blur(${(1 - p2) * 10}px)`;
        } else {
            nextSection.style.opacity = 0;
        }
    }
}
