// adding new chat documents
// setting up a real-time lestener to get new chats
// updating the username
// updating the room

class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.unsub;

        //firebase collection
        this.chats = db.collection("chats");
    }

    async addChat(message){
        //format a chat object
        const chat = {
            message,
            username : this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(new Date())
        };

        //save the chat document
        const response = await this.chats.add(chat);
        return response;
    }

    getChats(callback) {
        this.unsub = this.chats
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            for(const change of snapshot.docChanges()){
                if(change.type === 'added'){
                    
                    //update the ui
                    callback(change.doc.data());
                }
            }
        })
    }

    updateName(username){
        this.username = username;
        localStorage['username'] = username;
    }

    updateRoom(room){
        this.room = room;
        console.log('room updated');

        //unsubscribe from changes
        if(this.unsub){
            this.unsub();
        }
    }
}


