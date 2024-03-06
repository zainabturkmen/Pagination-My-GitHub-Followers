import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const title = document.querySelector(".section-title h1");

const init  = async (){
    const followers = await fetchFollowers();
    displayFollowers(followers);
    title.textContent = "pagination"
};

window.addEventListener("load", init);
