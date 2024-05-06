export class GameDTO {
    constructor({ name, description, category, img }) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.img = img;
    }
}
function shortDescription(description) {
    console.log("LA DESCRIPTIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONNNNNNNN,N", description);
    if (description.length > 25) {
        return description.substring(0, 25) + '...';
    }
    return description;
}

export class GameListDTO {
    constructor({ name, description, category, img }) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.img = img;
    }
}
