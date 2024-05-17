import { createContext } from "react";
import { viewIndex } from "../Navigator/Navigator";

export type ViewerType = {
    view: number,
    board: number,
}

type ViewContextType = {
    viewer: ViewerType,
    useViewer: Function,
    statusColor: string | null,
    useStatusColor: Function,
}

export function changeView(prev: ViewerType, view: number | string) {
    if (typeof view === 'string')
        view = viewIndex(view);
    return { ...prev, view: Math.max(0, view) };
}

export function changeBoard(prev: ViewerType, board: number) {
    return { ...prev, board: Math.max(0, board) };
}

export function changeViewBoard(view: number | string, board: number) {
    if (typeof view === 'string')
        view = viewIndex(view);
    return { view: Math.max(0, view), board: Math.max(0, board) };
}

export const ViewContext = createContext({} as ViewContextType);