const toggleMode = document.getElementById('darkMode');
toggleMode.addEventListener('click', () => {
    let html = document.getElementById('html')
    if (html.classList.toggle('dark')) {
        toggleMode.innerHTML = '<i class="bx bxs-sun"></i>'
    } else {
        toggleMode.innerHTML = '<i class="bx bxs-moon"></i>'
    }
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

if (html.className == 'dark') {
    toggleMode.innerHTML = '<i class="bx bxs-sun"></i>'
} else {
    toggleMode.innerHTML = '<i class="bx bxs-moon"></i>'
}

const toggleMenu = document.getElementById('toggleDropdown')
toggleMenu.addEventListener('click', () => {
    let menu = document.querySelector('.dropdownNav')
    menu.classList.toggle('hidden')
})

const toggleSide = document.getElementById('toggleSide')
toggleSide.addEventListener('click', () => {
    let content = document.querySelector('.content')
    let side = document.querySelector('.sidebar')
    let sideA = document.querySelector('.sidebar-a')
    if (side.classList.toggle('active')) {
        content.classList.add('active')
        sideA.classList.add('active')
    } else {
        content.classList.remove('active')
        sideA.classList.remove('active')
    }
})

const toggleClose = document.getElementById('toggleClose')
toggleClose.addEventListener('click', () => {
    let content = document.querySelector('.content')
    let side = document.querySelector('.sidebar')
    let sideA = document.querySelector('.sidebar-a')
    if (side.classList.toggle('active')) {
        content.classList.remove('active')
        sideA.classList.remove('active')
    } else {
        content.classList.add('active')
        sideA.classList.add('active')
    }
})

const statusDrop = document.getElementById('status')
statusDrop.addEventListener('click', () => {
    let dropdown = document.getElementById('dropdownStatus')
    if (dropdown.classList.toggle('hidden')) {
        statusDrop.innerHTML = '<i class="fa-solid fa-folder"></i><span class="ms-3 max-lg:ms-0 max-lg:text-xs max-lg:ms-2">Status</span>';
        statusDrop.classList.remove('bg-slate-50', 'text-slate-800')
    } else {
        statusDrop.innerHTML = '<i class="fa-regular fa-folder-open"></i><span class="ms-3 max-lg:ms-0 max-lg:text-xs max-lg:ms-2">Status</span>';
        statusDrop.classList.add('bg-slate-50', 'text-slate-800')
    }
})

const kecamatanDrop = document.getElementById('kecamatan')
kecamatanDrop.addEventListener('click', () => {
    let dropdown = document.getElementById('dropdownKecamatan')
    if (dropdown.classList.toggle('hidden')) {
        kecamatanDrop.innerHTML = '<i class="fa-solid fa-folder"></i><span class="ms-3 max-lg:ms-0 max-lg:text-xs max-lg:ms-2">Kecamatan</span>';
        kecamatanDrop.classList.remove('text-sky-500')
    } else {
        kecamatanDrop.innerHTML = '<i class="fa-regular fa-folder-open"></i><span class="ms-3 max-lg:ms-0 max-lg:text-xs max-lg:ms-2">Kecamatan</span>';
        kecamatanDrop.classList.add('text-sky-500')
    }
})

const btnModal = document.getElementById('btnModal')
btnModal.addEventListener('click', () => {
    document.getElementById('modal').classList.toggle('hidden')
});

const closeModal = document.getElementById('closeModal')
closeModal.addEventListener('click', () => {
    document.getElementById('modal').classList.toggle('hidden')
})