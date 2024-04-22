import './styles.css';

const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', function() {

    if(![...dropdownContent.classList].includes('open-dropdown')) {

        dropdownContent.className += ' open-dropdown';

    } else {
        
        const defaultClass = [...dropdownContent.classList].filter((classes) => {
            return classes !== 'open-dropdown';
        })

        dropdownContent.className = defaultClass.join(' ');

    }

})