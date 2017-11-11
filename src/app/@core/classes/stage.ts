export class Stage {
    id: string;
    parentId: string;

    name: string;
    description: string;
    content: string;

    constructor(parentId) {
        this.parentId = parentId;
    }
}
