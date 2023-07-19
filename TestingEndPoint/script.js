const apiurl ="https://codeforces.com/api/user.info?handles=";

const Wrapper= document.getElementsByClassName("Wrapper");
const HandleInput = document.getElementById('Handle');
const mainOfpage = document.getElementById("mainPage");
let username=HandleInput.value;
var x;

function findHandle(){
    let searchHandle = (Handle.value).trim();
    if(searchHandle.length > 0){
        let apiURLL=apiurl+searchHandle;
        loadInfo(apiURLL);
    }
 }

  async function loadInfo(URLL){
    const res = await fetch(`${URLL}`);
    const data = await res.json();
    x = data.result;
    console.log(x);
    showData(x);
}

function showData(HandleData){
    if (HandleData && HandleData.length > 0) {
        const {lastName, maxRank,avatar,city,country,firstName,friendOfCount,handle,maxRating,rank,rating,organization} = HandleData[0];
        const NewElement=document.createElement('div');
        NewElement.innerHTML=`
        <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Handle</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Max Rank</th>
            <th>City</th>
            <th>Country</th>
            <th>Friend of Count</th>
            <th>Max Rating</th>
            <th>Rank</th>
            <th>Rating</th>
            <th>Organization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="${avatar}" alt="Avatar"></td>
            <td>${handle}</td>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${maxRank}</td>
            <td>${city}</td>
            <td>${country}</td>
            <td>${friendOfCount}</td>
            <td>${maxRating}</td>
            <td>${rank}</td>
            <td>${rating}</td>
            <td>${organization}</td>
          </tr>
          <!-- Add more rows as needed -->
        </tbody>
      </table>
        
        
        `;
        mainOfpage.appendChild(NewElement);
    }
}