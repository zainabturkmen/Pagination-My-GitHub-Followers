const paginate = (followers) => {
    const itemsPerPage = 9;
    const numberOfPages = Math.ceil(followers.length / itemsPerPage);
    const newFollowers = Array.from({length:numberOfPages}, (_, index)=>{
    });
};



export default paginate
