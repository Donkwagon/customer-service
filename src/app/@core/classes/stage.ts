export class Stage {
    id: string;
    flowId: string;
    parentId: string;

    name: string;
    description: string;
    content: string;

    constructor(parent) {
        console.log("...");
        console.log(parent);
        this.parentId = parent._id;
        if (!parent.flowId) { // parent is flow, which doesn't have a flow id
            this.flowId = parent._id;
        } else {
            this.flowId = parent.flowId;
        }
    }
}
