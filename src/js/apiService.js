const apiKey = '19986935-c30e8a30fe3b8a8494dfefb1a';

export default {
searchQuery: '',
    page: 1,

    fetchPhoto() {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;

        return fetch(url).then(res => res.json()).then(({ hits }) => {
            this.page += 1;
            return hits;
})
},
    
    get query() {
        return this.searchQuery;
    },

    set query(value) {
        this.searchQuery = value;
    },

resetPage() {
        this.page = 1;
    },
}
