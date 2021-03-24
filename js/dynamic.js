let names = [
    "Bryan", "Celina", "Lance", "Andrea", "Jonathan",
    "Tyler", "Chas", "Dustin", "Pete", "Tom", 
    "Will", "Daemon", "Jada", "Parker"
];

const loadDiv = () => {
    let divCtrl = document.getElementById("ps");
    divCtrl.innerHTML = "";
    for(let name of names) {
        let p = `<p>${name}</p>`;
        divCtrl.innerHTML += p;
    }
}