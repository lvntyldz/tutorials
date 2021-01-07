### Açıklama
    - Bu çalışmada alt componentten üst componente mesaj gönderme amaçlanmıştır.
    - React tarafında bu işlemi yapmak için RxJS kullanılmıştır.
    - Rx Js ile Home componentinden mesaj gönderilerek App componenti bu mesajlardan haberdar edilmiştir.
    - Rx Js normalde bu mesajları iletirken state değiştirip erkanı render etmez. Ancak çalışmada mesaj gelikçe state değiştirilerek ekran rereder edilmiştir.

### Bağımlılıklar
    package.json dosyasına aşağıdaki şekilde Rx.js eklenir.
    ```
    ...
    "rxjs": "^6.3.3"
    ...
    ```

### services.js
    - services.js dosyasında rxjs üzerinden bir Subject instance'ı yaratılır.
    - messageService adında bir obje yaratılarak Subject'in next() ve asObservable() methodları birer fonksiyon olarak tanımlanır.
    ```
    import { Subject } from 'rxjs';

    const subject = new Subject();

    export const messageService = {
        sendMessage: message => subject.next({ text: message }),
        clearMessages: () => subject.next(),
        getMessage: () => subject.asObservable()
    };
    ```

### App.js
    - services.js dosyasında export edilen messageService'e subscribe olunarak alt componentten gelecek mesajlar dinlenir.
    - Alt componentten her mesaj gönderilme işleminden sonra state teki messages[] array'i doldurularak ekran render edilir.
    ```
    componentDidMount() {
    this.subscription = messageService.getMessage().subscribe(message => {
        if (message) {
        this.setState({ messages: [...this.state.messages, message] });
        return;
        }
        this.setState({ messages: [] });
    });
    }
    ``` 


### Home.js
    - Bu componette services.js te export edilen messageService üzerinden rxjs ile mesaj gönderilme işlemi yapılmıştır. 
    - Mesaj gönderme işlemi aşağıdaki gibidir.

    ```
    const sendMessage = () => {
        messageService.sendMessage('Sample Message Content(FROM HOME)');
    }
    ```

### References
    https://jasonwatmore.com/post/2019/02/13/react-rxjs-communicating-between-components-with-observable-subject

