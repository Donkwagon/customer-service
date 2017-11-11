export class Stage {
    id: string;
    flowId: string;
    parentId: string;

    name: string;
    description: string;
    content: string;

    constructor(parentId, flowId) {
        this.parentId = parentId;
        this.flowId = flowId;
    }
}
