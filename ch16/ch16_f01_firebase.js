const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');


const unsub = db.collection('recipes').onSnapshot(snapshot => {
    for(const change of snapshot.docChanges()){
        const doc = change.doc;
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id);
        }
        else if(change.type === 'removed'){
            deleteRecipe(doc.id);
        }
    }
    console.log('unsub is called');
});

//add documents
form.addEventListener('submit', e => {
    e.preventDefault();
    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now),
    };
    db.collection('recipes').add(recipe).then(() => {
        console.log('recipe added');
    }).catch(err => {
        console.log(err);
    });
})

//method for recipe addition
const addRecipe = (recipe, id) => {
    let time = recipe.created_at.toDate();
    let html = `
        <li data-id="${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">Delete</button>
        </li>
    `;
    list.innerHTML += html;
}

const deleteRecipe = (id) => {
    let itemToDelete = document.querySelector(`[data-id = "${id}"]`);
    if(itemToDelete){
        itemToDelete.remove();
    }
}

//deleting documents
list.addEventListener('click', e => {
    if(e.target.tagName.toUpperCase() == 'BUTTON'){
        const id = e.target.closest('li').getAttribute('data-id');
        db.collection('recipes').doc(id).delete()
        .then(() =>{
            console.log('recipe deleted');
        })
        .catch(() => console.log('some error during deletion process...'));
    }
});

//unsub from database changes
button.addEventListener('click', () => {
    unsub();
    console.log('unsubscribed from collection changes');
});