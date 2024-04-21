import { Observable } from "./Observable";
import { ToastProps } from "./Toast";
import { v4 as uuid} from 'uuid'

type Events = {type: "ADD", toast: Pick <ToastProps, 'id' | 'message' | 'variant'>} | {type: 'REMOVE', toastId: number} | {type: 'RemoveAll'}

export const observable = new Observable<Events>()

export function toast(message: string){
    console.log("toast")
    observable.notify({
        type: "ADD",
        toast: {id: uuid(), message}
    })
}

toast.success = (message: string)=>{
    observable.notify({
        type: "ADD",
        toast: {id: uuid(), message, variant: "success"}
    })
}

toast.error =  (message: string)=>{
    observable.notify({
        type: "ADD",
        toast: {id: uuid(), message, variant: "error"}
    })
}

export function removeAll(){
    observable.notify({
        type: "RemoveAll"
    })
}