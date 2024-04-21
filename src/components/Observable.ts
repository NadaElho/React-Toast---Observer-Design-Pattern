
export class Observable <T>{
    private observers: ((data:T)=> void)[] = []

    subscribe(dataFun: ((data:T)=> void)){        
        this.observers.push(dataFun)
        return ()=>{
            this.observers = this.observers.filter((observer)=> observer == dataFun)
            console.log(this.observers[0]);
            
        }
    }

    notify(data: T){
        this.observers.forEach((observer)=> observer(data))
    }
}