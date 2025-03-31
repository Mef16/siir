document.getElementById("addPoemForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const poem = document.getElementById("poem").value;

    if (title && poem) {
        addPoem(title, poem);
        document.getElementById("title").value = "";
        document.getElementById("poem").value = "";
    }
});

function addPoem(title, poem) {
    const poemList = document.getElementById("poemItems");

    const poemItem = document.createElement("li");
    poemItem.classList.add("poemItem");

    const poemTitle = document.createElement("div");
    poemTitle.classList.add("poemTitle");
    poemTitle.textContent = title;

    const poemText = document.createElement("div");
    poemText.classList.add("poemText");
    poemText.textContent = poem;

    poemItem.appendChild(poemTitle);
    poemItem.appendChild(poemText);

    poemList.appendChild(poemItem);
}
