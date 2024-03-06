import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const title = document.querySelector(".section-title h1");

const init  = async () => {
    const followers = await fetchFollowers();
    title.textContent = "pagination"
    // displayFollowers(followers);
    // const pages =  paginate(followers)
    // console.log(pages);
};

window.addEventListener("load", init);
