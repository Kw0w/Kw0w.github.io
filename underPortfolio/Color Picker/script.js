class ColorPicker {
    constructor(root) {
        this.root = root;
        this.colorjoe = colorjoe.rgb(this.root.querySelector(".colorjoe"));
        this.selectedColor = null;

        this.colorjoe.show();
        this.setSelectedColor("#2E3440");

        this.colorjoe.on("change", color => {
            this.setSelectedColor(color.hex(), true);
        });

    };

    setSelectedColor(color, skipCjUpdate = false) {
        this.selectedColor = color;
        this.root.querySelector(".selected-color-text").textContent = color;
        this.root.querySelector(".selected-color").style.background = color;

        if (!skipCjUpdate) {
            this.colorjoe.set(color);
        }
    };
}

const colorPicker = new ColorPicker(document.querySelector(".container"));