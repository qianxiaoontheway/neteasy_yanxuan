//接收消息
self.addEventListener('message',function(e){
    console.log(e);
    var data = e.data;
    switch(data.cmd){
        case 'start':
          this.self.postMessage('WORKERSTARTED')

        break;
        case 'stop':
        this.self.postMessage('WORKER STOOPED'+data.msg);
        break;
    }

})