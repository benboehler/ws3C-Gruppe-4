document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabs li');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('is-active'));
            tab.classList.add('is-active');

            tabContents.forEach(content => content.classList.add('is-hidden'));

            const target = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(target);
            if (targetContent) {
                targetContent.classList.remove('is-hidden');
            }
        });
    });
});
