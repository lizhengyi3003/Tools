function showSection(idx) {
            const tabs = document.querySelectorAll('.admin-menu h2');
            const sections = document.querySelectorAll('.admin-section');
            tabs.forEach((tab, i) => {
                if(i === idx) {
                    tab.classList.add('active');
                    sections[i].classList.add('active');
                } else {
                    tab.classList.remove('active');
                    sections[i].classList.remove('active');
                }
            });
        }