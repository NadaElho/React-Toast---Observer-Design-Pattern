import { useEffect, useState } from 'react';
import { Toast } from './Toast';
import { ToastProps } from './Toast';
import { close, observable, removeAll } from './utils';
import { Button } from './Button';

export function ToastContainer() {
  const [toasts, setToasts] = useState<Pick<ToastProps,'id' | 'message' | 'variant'>[]>([])

  useEffect(()=>{
    return observable.subscribe(data=>{   
      if(data.type == "ADD"){
        setToasts((prev)=>[...prev, data.toast])
      }else if(data.type == "RemoveAll"){
        setToasts([])
      }
    })
  },[])


  return (
    <div>
      <div className="absolute bottom-0 end-0 p-4 space-y-2 w-full h-full justify-end pointer-events-none flex flex-col max-w-xs ">
        {toasts.map((toast, i)=> <Toast key={i} id={toast.id} message={toast.message} variant={toast.variant} onClose={() => setToasts(toasts.filter(tst => tst.id != toast.id))} />)}
      </div>
      {toasts.length != 0 &&   <Button onClick={removeAll}>Remove All</Button>}
    </div>
  );
}
