// one way to do it 

const allInfo = Promise.all([
    fetch(url1).then(value => value.json()),
    fetch(url2).then(value => value.json())
    ]);
allInfo.then((value) => {
    console.log(value)
})


// one way to do it

const fetch1 = fetch(url1).then(response => response.json());
const fetch2 = fetch(url2).then(response => response.json());
const allData = Promise.all([fetch1, fetch2]);
allData.then(data => console.log(data))