export class Stage {
    _id: string;
    flowId: string;
    parentId: string;

    name: string;
    description: string;
    content: string;
    emergency: boolean;

    constructor(parent) {
        this.parentId = parent._id;
        this.emergency = false;
        if (!parent.flowId) { // parent is flow, which doesn't have a flow id
            this.flowId = parent._id;
        } else {
            this.flowId = parent.flowId;
        }
    }
}
