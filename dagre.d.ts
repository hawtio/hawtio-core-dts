// Type definitions for dagre 0.7
// Project: https://github.com/cpettitt/dagre
// Definitions by: Qinfeng Chen <https://github.com/qinfchen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace dagre;

export function layout(graph: graphlib.Graph): void;

export interface Edge {
    v: string;
    w: string;
}