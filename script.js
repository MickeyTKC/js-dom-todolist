setTimeout(function () {
    const toDolist = {
        el: "no El!",
        items: ["Item 01", "Item 02", "Item 03", "Item 04", "Item 05"],
        add: (item) => {
            toDolist.items.push(item)
            toDolist.render();
        },
        delete: (index) => {
            toDolist.items.splice(index, 1)
            toDolist.render();
        },
        render: () => {
            toDolist.el.innerHTML = ""
            toDolist.items.forEach(function (v, i) {
                const row = document.createElement("div")
                row.className = "row d-flex m-1 p-0"
                row.innerHTML = `<div class="col-10"><p class="lead align-middle">${v}</p></div>
                    <div class="col-2 text-center">
                        <buttom class="btn btn-danger" role="button">Delete</buttom>
                    </div>`
                row.getElementsByClassName("btn-danger")[0].addEventListener("click", () => { toDolist.delete(i); })
                toDolist.el.appendChild(row)
            })
        }
    }
    toDolist.el = document.getElementById("itemList");
    document.getElementById("add").addEventListener("click", () => {
        toDolist.add(document.getElementById("item").value);
    })
    toDolist.render()
})